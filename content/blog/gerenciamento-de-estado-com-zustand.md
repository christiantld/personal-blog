---
title: Gerenciamento de estado global no React com Zustand
description: O Zustand é uma biblioteca de gerenciamento de estado global para React. Nesse artigo vamos ver como utilizar essa biblioteca e quais são os benefícios de utilizá-la.
cover: zustand.webp
date: 2023-11-05
tags:
  - reactjs
  - zustand
  - frontend
  - gerenciamento-de-estado
---

# Gerenciamento de estado global no React com Zustand

![Figura de um urso mascote da biblioteca Zustand](/images/blog/zustand.webp)

**O que é estado?** É um termo genérico que na maioria dos casos se refere a uma coleção de dados mutáveis que influenciam o comportamento e/ou visualização da aplicação.

Primeiramente, podemos ter diferentes tipos de estado para gerenciar, como por exemplo: estado local, estado global, estado do servidor e estado da URL. Passando brevemente por cada um:

- Estado local se refere ao dado gerenciado em um ou outro componente. Nesses casos comumente utilizamos os hooks `useState` e `useReducer` para salvar o estado no componente.
- Estado global se refere a dados gerenciados através de múltiplos componentes, como por exemplo informações de um carrinho de compras ou informações de autenticação de usuário. O comportamento de diversos componentes pode ser afetado a partir de mudanças nesse estado.
- Estado do servidor diz respeito a dados que vem de fontes externas e impactam no estado das interfaces, como por exemplo quando o dado esta sendo carregado, ou quando a resposta é de sucesso ou erro. Bibliotecas como SWR e TanStack(antiga React-Query) são usadas para esse gerenciamento.
- Estado da URL diz respeito aos dados como `pathname` e `query params` da URL. Em vários casos não percebemos, mas nossa UI pode depender desses dados, como por exemplo os slugs de blogs e noticias.

Como lidar com estados globais no React? Bibliotecas de gerenciamento de estado sempre foram tópicos quentes nas discussões de frontend. No React, desde a chegada dos React Hooks e do Context provider, houve uma mudança de pensamento sobre a forma de gerenciar o estado das nossas aplicações. Um ambiente que antes era dominado pelo Redux e sua arquitetura Flux, hoje é disputado por diversas bibliotecas com variadas abordagens.

Uma coisa em comum entre as novas bibliotecas de gerenciamento de estado é o foco em simplicidade e objetividade. Dentre essas novas bibliotecas está o Zustand, que curiosamente, a palavra em alemão significa justamente _estado_ .

### A biblioteca Zustand

Na própria [documentação oficial ](https://github.com/pmndrs/zustand)o Zustand se define como uma solução para gerenciamento de estado pequena, leve (pouco mais de 1Kb), escalável e que aplica os princípios Flux de forma simplificada. Além disso, possui uma API amigável baseada em hooks sem a necessidade de muito _boilerplate_ .

Durante a minha utilização pude perceber que é uma biblioteca muito flexível, que permite iniciar de forma simples e estender o uso de acordo com a necessidade. Vamos ver com mais detalhes o porquê dessa biblioteca estar crescendo tanto em popularidade, e quais motivos você deve considerar para adota-la no seu próximo projeto.

### Criando uma store

Iniciamos adicionado o Zustand ao nosso projeto

```shell
npm install zustand # or yarn add zustand
```

Uma store nada mais é do que um hook customizado. Para iniciar é preciso importar o método `create` de dentro do Zustand e utilizá-lo para criar nossa store. O método `create` recebe um callback que como primeiro parâmetro recebe a função `set`, responsável por atualizar nossos valores. Podemos incluir valores primitivos, objetos e funções que manipulam o próprio estado.

```typescript
import create from "zustand";

type Counter = {
  counter: number;
  increaseCounter: () => void;
  decreaseCounter: () => void;
  resetCounter: () => void;
};

export const useCounter = create<Counter>(set => ({
  counter: 0,
  increaseCounter: () => set(state => ({ counter: state.counter + 1 })),
  decreaseCounter: () => set(state => ({ counter: state.counter - 1 })),
  resetCounter: () => set(() => ({ counter: 0 }))
}));
```

Um detalhe da implementação acima é o uso de Typescript. A princípio precisamos definir apenas o tipo da nossa store em um generic do método create. O Zustand é escrito em TS, logo possui boa integração com o mesmo, e adicionar tipagem as stores torna a experiência mais amigável. Caso queria utilizar com Javascript basta não adicionar a tipagem da store ao método `create`

Para utilizar a store basta importar o hook customizado que foi criado, tornando o estado global totalmente funcional em poucas linhas de código.

```typescript
import { useCounter } from "../store/useCounter";

export default function Counter() {
  const counter = useCounter(state => state.counter);
  const increaseCounter = useCounter(state => state.increaseCounter);
  const decreaseCounter = useCounter(state => state.decreaseCounter);
  const resetCounter = useCounter(state => state.resetCounter);

  function handleDecreaseCounter() {
    if (counter > 0) {
      decreaseCounter();
    }
  }

  return (
    <>
      <h1>Simple counter</h1>
      <h2>{counter}</h2>
      <div className="button-group">
        <button onClick={increaseCounter}>+</button>
        <button onClick={handleDecreaseCounter}>-</button>
      </div>
      <button onClick={resetCounter}>reset counter</button>
    </>
  );
}
```

Na implementação acima é possível perceber que não é necessário prover o estado em um Contexto que envolve a aplicação. Isso significa que mudanças no estado não necessariamente resultam em re-renderização de todos componentes.

O Zustand é basicamente um armazenamento externo único que interage com React através de hooks. Um hook pode ser utilizado em qualquer lugar, e quando um estado atualiza, os componentes que recebem esse estado irão re-renderizar. Isso acontece porque o Zustand detecta mudanças por equidade estrita (===) por padrão. Isso é eficiente para proposta de `atomic state pick` (escolha de estado atômico)

```typescript
const cartItems = useCart(state => state.cartItems);
```

A flexibilidade do Zustand permite construir um objeto a partir de múltiplos estados informando o Zustand para fazer uma equidade rasa (shallow).

```typescript
import shallow from "zustand/shallow";

// re-renderiza o componente se qualquer um dos dois valores atualizar
const { cartItems, totalPrice } = useCart(
  state => ({ cartItem: state.cartItem, totalPrice: state.totalPrice }),
  shallow
);
```

### Fatiando uma Store

Quando a aplicação cresce, a complexidade tende a acompanhar. O Zustand oferece a possibilidade de dividir (_slice_) a store para melhorar o gerenciamento.

```typescript
import create from "zustand";

const FETCH_REMOTE_REPOSITORIES = `https://api.github.com/repos/twbs/bootstrap`;

const localRepositories = set => ({
  repositories: [],
  addRepository: repository =>
    set(state => ({ repositories: [...state.repositories, repository] })),
  removeRepository: id =>
    set(state => ({
      repositories: state.repositories.filter(
        repository => repository.id !== id
      )
    })),
  removeAllTodos: () => set({ repositories: [] })
});

const asyncRemoteRepositories = set => ({
  asyncRepositories: [],
  loading: true,
  fetchRepositories: async () => {
    const response = await fetch(FETCH_REMOTE_REPOSITORIES);
    set({ asyncRepositories: await response.json(), loading: false });
  }
});

const repositories = set => ({
  ...localRepositories(set),
  ...asyncRemoteRepositories(set)
});

export const useStore = create(repositories);
```

### Métodos assíncronos

No exemplo acima podemos perceber que podemos ter métodos assíncronos dentro da nossa store sem nenhuma configuração adicional, basta definir o método como assíncrono e , simples assim.

```typescript
const POSTS_API = "https://jsonplaceholder.typicode.com/posts";

const usePostsStore = create(set => ({
  posts: [],
  fetch: async () => {
    const response = await fetch(POSTS_API);
    set({ posts: await response.json() });
  }
}));
```

### Middlewares

Podemos compor as stores da forma que quisermos, adicionando funcionalidades através de Middlewares customizados ou oferecidos pelo próprio Zustand.

**Middleware customizado**

```typescript
// Exemplo direto da documentação
// console.log para cada alteracao no estado
const log = config => (set, get, api) =>
  config(
    (...args) => {
      console.log("applying", args);
      set(...args);
      console.log("new state", get());
    },
    get,
    api
  );

const useBeeStore = create(
  log(set => ({
    bees: false,
    setBees: input => set({ bees: input })
  }))
);
```

**Persist Middleware**

Para persistir dados de uma store basta importar o middleware `persist`

```typescript
// Exemplo direto da documentação
import create from "zustand";
import { persist } from "zustand/middleware";

const useFishStore = create(
  persist(
    (set, get) => ({
      fishes: 0,
      addAFish: () => set({ fishes: get().fishes + 1 })
    }),
    {
      name: "food-storage", // unique name
      getStorage: () => sessionStorage // (optional) by default, 'localStorage' is used
    }
  )
);
```

Se você olhou com atenção percebeu o método `get()` . Ele é utilizado quando queremos acessar outro estado dentro de uma ação específica.

**Devtools Middleware**

O Zustand possui suporte com o Reduz devtools e sua visualização é muito simples, basta envolver a store no middleware `devtools`

```typescript
import { devtools } from "zustand/middleware";

const useBeeStore = create(
  devtools(set => ({
    bees: false,
    setBees: input => set({ bees: input })
  }))
);
```

Existem outros middleware nativos, caso queira adicionar imutabilidade ao estado é possível utilizar o middleware `immer` , ou então utilizar reducers e dispatch como no Redux, basta chamar utilizar o middleware `redux` . As possibilidades com middlewares são diversas, podendo inclusive combiná-los de acordo com a sua necessidade.

### Zustand para além do React

Se observarmos bem o exemplo acima, podemos notar que instanciamos nossa store de uma forma diferente, sem utilizar dos hooks. Isso abre a possibilidade de utilizar o Zustand fora de componentes e do ambiente React. Apesar de ter sido construído para o React, o Zustand não utiliza as APIs do React para construção da lib. Podemos utilizar o Zustand com outros frameworks e até com Javascript puro. Uma das possibilidades abertas por essa facilidade é a utilização do Zustand como gerenciamento de estado de micro-frontends

```typescript
import create from 'zustand/vanilla'

const store = create(() => ({ ... }))
const { getState, setState, subscribe, destroy } = store
```

### Conclusão

O gerenciamento de estado global pode ser bastante complicado, por isso é importante ter ferramentas simples que facilitam esse trabalho. Não precisamos iniciar nossos projetos com uma engenharia excessiva. O Zustand, bem como nenhuma outra alternativa, não é a _bala de prata_ que resolve todos os problemas, mas certamente é uma opção amigável na escolha de bibliotecas de gerenciamento de estado.

O beneficio de usar Zustand está na simplicidade que vence o excesso de engenharia. A forma flexível e extensível como ele trata todo o estado global , tanto em leitura como em escrita, torna a biblioteca acessível desde projetos simples para pessoas com pouca experiência, até aplicações complexas com múltiplos estados. Um ponto negativo do Zustand é a falta de material, principalmente em português. De documentação oficial temos disponível apenas o Read.me do projeto no Github com detalhes e informações bem enxutos. Felizmente a biblioteca vem sendo cada vez mais adotada, e logo com a sua difusão na comunidade podemos esperar no futuro mais conteúdos como esse.

---

### Referências

- [GitHub - pmndrs/zustand: 🐻 Bear necessities for state management in React](https://github.com/pmndrs/zustand)
- [How to Manage State in Your React Apps (freecodecamp.org)](https://www.freecodecamp.org/news/how-to-manage-state-in-your-react-apps/#:~:text=Local%20state%20is%20perhaps%20the,including%20primitive%20and%20object%20values.)
- [React Context API vs Zustand State Manager | by Vimukthi Jayasinghe | Medium](https://medium.com/@viraj.vimu/react-context-api-vs-zustand-state-manager-98ca9ac76904)
- [How to use Zustand which is react state management library | by Kyosuke Ito | Dev Genius](https://blog.devgenius.io/how-to-use-zustand-which-is-react-state-management-library-648f55a0455f)
- [Introduction to Zustand - John Raptis](https://www.johnraptis.dev/introduction-to-zustand/)
- [Zustand for State Management - This Dot Labs](https://www.thisdot.co/blog/zustand-for-state-management)
- [Zustand: simple, modern state management for React (openreplay.com)](https://blog.openreplay.com/zustand-simple-modern-state-management-for-react)
- [Zustand, a lovely state manager in React that got it all right | For Web Designers And Developers (adyog.com)](https://journal.adyog.com/2020/12/15/zustand-a-lovely-state-manager/)
