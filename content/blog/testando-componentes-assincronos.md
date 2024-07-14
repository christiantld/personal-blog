---
title: Testando componentes assíncronos no Next.JS
description: Entenda como escrever testes para componentes assíncronos no frontend, especialmente com server components no Next.js 13.
cover: testsjs.webp
date: 2024-07-14
tags:
  - frontend
  - react
  - tests
  - typescript
---

# Testando componentes assíncronos no Next.JS

Quando decidimos escrever testes para nossos componentes no frontend, é uma boa prática, e até uma forma de facilitar nossa escrita de testes, separar o que é lógica do que é apresentação. Dessa forma, podemos ter testes separados para cada uma das responsabilidades.

Porém, em alguns casos, um componente não é apenas responsável pela apresentação dos dados, mas também pela busca desses dados.

A partir da versão 13 do Next.js, com o uso do diretório `app`, todos os componentes criados são `server components`, o que significa que a renderização ocorre do lado do servidor. Isso abre várias possibilidades, como por exemplo, fazer chamadas de API assíncronas na definição do componente, aguardar a resposta e utilizar os dados dessa resposta na renderização do componente.

Como exemplo, podemos definir nosso componente como uma função assíncrona:

```tsx
async function MyAsyncComponent() { 
	const data = await fetchData(); 
	return <div data-testid="painted-content">{data}</div>; 
}
```
Em um componente marcado como `async`, podemos utilizar o `await` para aguardar. Não precisamos, nem devemos, utilizar hooks como `useState` ou `useEffect`.

Escrevendo o nosso teste da seguinte forma, com a sintaxe familiar da React Testing Library, ele falhará:
```tsx
describe('Test My Async Component', () => {
	it('should render the component', () => {
		render(<MyAsyncComponent />)
		const sut = screen.getByTestId('painted-content')
		expect(sut.textContent).toBe('async content')
	})
})
```

O erro retornado é algo como `Objects are not valid as a React child (found: [object Promise]). If you meant to render a collection of children, use an array instead.`, ou seja, o componente não está retornando um elemento JSX para ser renderizado.

## Como resolver esse problema?

Partindo do princípio de que um componente nada mais é do que uma função assíncrona que recebe parâmetros para renderizar seu conteúdo, podemos escrever nosso teste da seguinte forma:
```tsx
describe('Test My Async Component', () => {
	it('should render the component', async () => {
		const jsx = await MyAsyncComponent()
		render(jsx)
		const sut = screen.getByTestId('painted-content')
		expect(sut.textContent).toBe('async content')
	})
})
```

O que fizemos no exemplo acima foi transformar nosso teste anterior em um teste assíncrono, aguardando a função do componente resolver, armazenando seu JSX em uma constante, e passando essa constante com JSX para o método `render`. Ao inspecionar o tipo do retorno do nosso componente, temos o tipo `JSX.Element`, exatamente o mesmo tipo de dado que a função `render` aceita. Dessa forma, o teste agora roda e passa com sucesso.

## Refatorando

É bem provável que você vá renderizar o componente em diversos casos de testes. Para isso, podemos abstrair para uma função própria:
```ts
async function renderComponent() {
	const jsx = await MyAsyncComponent()
	return render(jsx)
}

describe('Test My Async Component', () => {
	it('should render the component', async () => {
		await renderComponent()
		const sut = screen.getByTestId('painted-content')
		expect(sut.textContent).toBe('async content')
	})
})
```


Dessa forma, evitamos reescrever em todos os casos de teste a chamada assíncrona do nosso componente e a renderização do JSX. Porém, podemos ir além. Em uma aplicação real, é comum termos diversos componentes assíncronos que precisam ser testados. Inclusive, alguns deles, diferente dos nossos exemplos até aqui, podem receber `props`. Para isso, podemos utilizar os genéricos do TypeScript para facilitar ainda mais a renderização:

```ts
async function renderAsync<T>(
	asyncComponent: (props: T) => Promise<JSX.Element>,
	props: T = {} as T
) {
	const jsx = await asyncComponent(props);
	render(jsx);
}
```


Utilização:
```tsx
describe('Test My Async Component', () => {
	it('should render the component without params', async () => {
		await renderAsync(MyAsyncComponent)
		const sut = screen.getByTestId('painted-content')
		expect(sut.textContent).toBe('async content')
	})
})

describe('Test My Async Component with props', () => {
	it('should render the component with params', async () => {
		const props = { params: 'with my example param' }
		await renderAsync(MyAsyncComponentWithProps, props)
		const sut = screen.getByTestId('painted-content')
		expect(sut.textContent).toBe('async content with my example param')
	})
})
```

## Conclusão

Ao escrever testes para componentes assíncronos no frontend, é essencial compreender a diferença entre componentes de apresentação e componentes que também lidam com a lógica de busca de dados. Com a introdução dos `server components` no Next.js 13, novas oportunidades surgem para otimizar a renderização no servidor e simplificar o manuseio de dados assíncronos.

Ao transformar nossos testes em assíncronos e refatorar a lógica de renderização, conseguimos garantir que nossos componentes sejam testados de forma eficaz e eficiente. Além disso, utilizando genéricos do TypeScript, podemos criar funções de renderização reutilizáveis que tornam nossos testes mais limpos e mantêm nosso código mais organizado.

Com essas práticas, podemos melhorar a confiabilidade e a mantenibilidade dos testes em nossos projetos de frontend, garantindo que nossos componentes funcionem conforme esperado em diferentes cenários.

---
### Referências
- https://www.marcusoft.net/2022/11/nextjs-testing-async-react-components.html