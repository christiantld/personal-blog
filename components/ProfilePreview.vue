<template>
  <section class="flex flex-col max-w-4xl">
    <h2 class="text-2xl text-gray-900 mb-4">Quem sou eu?</h2>
    <div
      class="space-y-6 text-lg bg-gradient-to-b from-gray-700 to-transparent text-transparent bg-clip-text"
    >
      <p>
        Eu sou o
        <span class="text-rose-600 font-special">Christian</span>, diretamente
        de Brasília - DF. Estou sempre buscando conhecer algo novo pois acredito
        que o aprendizado é a chave da constante evolução. Sou formado em
        Análise e Desenvolvimento de Sistemas e estou me especializando em
        Arquitetura de Soluções.
      </p>
      <p>
        Atualmente trabalho como Desenvolvedor Frontend. No dia a dia utilizo
        tecnologias como
        <span class="text-cyan-600"
          >Vue.js, Nuxt.js, React.JS, Next.JS TailwindCSS, GraphQL, Node.js, AWS
          e muito mais.</span
        >
        Percebi cedo que tecnologias são apenas ferramentas e que o mais
        importante é entender o problema e utilizar a ferramenta certa para
        resolvê-lo.
      </p>
    </div>
    <NuxtLink
      to="/sobre"
      class="border-2 w-fit border-rose-600 text-rose-600 hover:border-cyan-600 hover:text-cyan-600 transition-colors duration-300 py-2 px-4 rounded float-right mb-8 self-end"
      >Ver mais
    </NuxtLink>
  </section>
</template>
