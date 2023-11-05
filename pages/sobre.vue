<template>
  <h1 class="text-3xl my-8">Sobre mim</h1>
  <section class="flex flex-col sm:flex-row gap-8 justify-between max-w-7xl">
    <div class="space-y-6 text-lg text-gray-700">
      <p>
        Olá, meu nome é
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
      <p>
        Hoje em dia estou focado em aprender e aplicar conceitos comuns em
        desenvolvimento de software como
        <span class="text-cyan-600"
          >Clean Code, SOLID, Design Patterns, TDD, DDD, CI/CD, DevOps,
          Serverless, Microservices, etc.</span
        >
      </p>
      <p>
        Eu gosto de me manter atualizado sobre as novas tecnologias e
        tendências, por isso estou sempre estudando algo novo. Este blog é uma
        forma de de fixar o conhecimento e também de compartilhar com outras
        pessoas.
      </p>

      <h2 class="text-2xl text-gray-900">Um pouco mais sobre mim...</h2>

      <p>
        Eu gosto de passar meu tempo livre com minha família e amigos, conhecer
        lugares novos, assistir filmes e séries e ouvir música. Sobre esse
        último ponto, eu realmente sou apaixonado por música, quase sempre estou
        de fones de ouvido. Aprendi a tocar violão, guitarra e baixo sozinho e
        já toquei em algumas bandas com amigos. Se eu não fosse desenvolvedor
        com certeza teria seguido o caminho da música.
      </p>
    </div>
    <img
      src="/images/profile.png"
      class="rounded-full w-64 h-64 mx-auto"
      alt="Foto do Christian"
      width="256"
      height="256"
    />
  </section>
</template>
<script setup>
  useHead({
    title: "Sobre mim - Christian Toledo"
  });
</script>
