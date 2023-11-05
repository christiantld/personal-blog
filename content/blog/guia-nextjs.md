---
title: Guia Next Js
description: Um guia breve de como iniciar os estudos em NextJs
cover: nextjs.webp
date: 2023-11-05
tags:
  - nextjs
  - reactjs
  - javascript
  - frontend
---

# Guia Next Js

O NextJS é um meta-framework para React mantido pela empresa Vercel. O que isso quer dizer? O React por si só é um framework(ou biblioteca segundo certas definições) para javascript com principal objetivo de construir interfaces reativas e reutilizáveis de forma simples. O NextJs é um framework construído sobre o React, ou seja, é um framework para um framework.

Bom, o conceito de um framework é ser um facilitador no desenvolvimento de aplicações, trazendo um conjunto de bibliotecas, recursos e funcionalidades opinados e empacotados.

O NextJs tem como proposta oferecer a melhor experiencia de desenvolvimento com todos os recursos necessários para a aplicação em produção. Algumas funcionalidades que tornam o NextJs uma opção viável ao iniciar um projeto React:

- Suporte ao Typescript
- Renderização estática (SSG)
- Renderização pelo lado do servidor (SSR)
- Roteamento por sistema de arquivos
- Otimização de imagens
- Suporte para CSS modules, SASS e CSS in JS
- Internacionalização
- Parte do ecossistema Vercel, com ferramentas próprias de build e deploy.

# Básico

O Javascript é um pré-requisito para o NextJs, logo vou considerar que você já possui familiaridade com a linguagem. O que considero básico nesse guia é o conhecimento em React, especialmente os conceitos de Estado, Propriedades, Ciclo de Vida, e Componentes.

Tutorial de introdução ao React em texto

- <https://pt-br.reactjs.org/tutorial/tutorial.html>

Playlist de fundamentos do React

- <https://app.rocketseat.com.br/discover/course/especializar-react>

Playlist de React (ingles)

- <https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d>

[\[https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d\]](https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d)

## Desejável

As aplicações em React e NextJs podem ser escritas tanto em Javascript como em Typescript. As aplicações modernas do frontend e as bibliotecas seguem a tendência de utilizar o Typescript para adicionar tipagem ao Javascript. Se você se interessa por essa abordagem, abaixo deixo alguns links para estudo

- [TypeScript: The starting point for learning TypeScript ](https://www.typescriptlang.org/docs/handbook/)[  
  ](https://www.youtube.com/watch?v=u7K1sdnCv5Y&list=PLb2HQ45KP0Wsk-p_0c6ImqBAEFEY-LU9H&ab_channel=GlauciaLemos)
- [ Everything you need to learn TypeScript in just 4 minutes ](https://levelup.gitconnected.com/everything-you-need-to-learn-typescript-in-just-4-minutes-396bebbb6c76)
- [TypeScript - Zero to Hero | \[PLAYLIST DE VIDEO\]](https://www.youtube.com/watch?v=u7K1sdnCv5Y&list=PLb2HQ45KP0Wsk-p_0c6ImqBAEFEY-LU9H&ab_channel=GlauciaLemos)

[\[https://www.youtube.com/watch?v=u7K1sdnCv5Y&list=PLb2HQ45KP0Wsk-p_0c6ImqBAEFEY-LU9H&ab_channel=GlauciaLemos\]](https://www.youtube.com/watch?v=u7K1sdnCv5Y&list=PLb2HQ45KP0Wsk-p_0c6ImqBAEFEY-LU9H&ab_channel=GlauciaLemos)

# O NextJs

A documentação oficial do Next possui um tutorial passo a passo para ensinar os principais conceitos do framework e explicar como ele funciona.

- <https://nextjs.org/learn/foundations/about-nextjs>

Caso prefira acompanhar por video tem duas playlists abaixo que também passam pelos conceitos principais do NextJs aplicados na construção de uma aplicação

- <https://www.youtube.com/watch?v=9P8mASSREYM&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH>
- <https://www.youtube.com/watch?v=A63UxsQsEbU&list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw>

Ao terminar qualquer um dos dois tutoriais, você será capaz de entender conceitos como

- Navegação
- Importação de estilos e assets
- Renderização SPA, SSR, e SSG
- Data fetching
- Rotas de API
- SEO
- Deploy de uma aplicação NextJs

# Boas práticas de SEO utilizando o NextJs

O NextJs tem como um dos seus principais pontos auxiliar na indexação da página pelo motor de busca e melhorar o SEO, melhorando o ranqueamento do site.

O NextJS faz isso através de diversas estratégias, sendo as mais conhecidas e aplicadas: **Server-side rendering (SSR)** e **Static Site Generation (SSG)**.

## Mais o que é SEO?

Antes de falarmos como utilizar o SEO com NextJs, precisamos entender o que é o SEO.

Podemos entender o SEO como uma "otimização para motores de busca" com um conjunto de técnicas que tem o objetivo de melhorar a posição do seu produto em alguns sistemas de busca como Google ou youtube por exemplo.

## Server Side Rendering (SSR)

<https://nextjs.org/docs/basic-features/pages#server-side-rendering>

O **SSR,** surge como uma ótima estratégia para realizar a otimização de sites. A partir da pré-renderização dos componentes HTML da página, o buscador consegue visualizar e entender do que aquele site fala sem precisar do arquivo Javascript.

## Static Site Generation (SSG)

<https://nextjs.org/docs/basic-features/pages#static-generation-recommended>

Em português, geração de site estático, o **SSG **surge como uma ótima estratégia para realizar a otimização de sites pequenos, ou de páginas específicas que não possuem mudanças constantes.

Enquanto o SSR é realizado no momento da requisição, o SSG acontece em tempo de compilação. Ou seja, isso afeta o tempo de carregamento da página, tornando o método útil apenas para situações específicas.

## Outras formas de métodos para melhorar o SEO

Além das formas de geração e renderização do site, o Next disponibiliza outras técnicas para melhorar ainda mais a otimização da página, como veremos a seguir.

- Utilizando e configurando o cabeçalho por pagina,
  - Com o método \_head \_podemos configurar o cabeçalho para otimizar ranqueamento do produto `import Head from "next/head"`
- Criando o \_document
  - Com o \_document, podemos inserir definições padrões do nosso arquivo HTML, como a linguagem padrão (inglês, português, etc). Para isso, vamos criar ele dentro da pages. `import document from "next/document"`
- Otimizando _imagens _
  - Por fim, vamos falar um pouco sobre a otimização de imagens! Ao invés de utilizar a tag `img` disponibilizada pelo HTML padrão, o NextJS disponibiliza uma tag customizada para exibir imagens em nossa página. s. `import document from "next/image"`
  - Lembre-se: ao utilizar imagens, sempre dê preferência por arquivos `**svg**`\*\* **. Isso porque são mais fáceis de serem manipulados. E não se esqueça de passar o tamanho da imagem no **CSS\*\*!

Aplicando essas estratégias, além de seu código ficar mais organizado, estará melhorando o SEO e, consequentemente, o posicionamento das suas páginas no motor de busca.

# Referências

- <https://nextjs.org>
- <https://github.com/vercel/next.js>
- <https://www.alura.com.br/artigos/next-js-vantagens>
- <https://blog.geekhunter.com.br/o-que-e-next-js/>
