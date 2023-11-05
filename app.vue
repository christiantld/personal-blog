<template>
  <div class="flex flex-col min-h-screen bg-stone-50">
    <NavBar />
    <main class="mx-auto max-w-7xl px-6 lg:px-8 py-6 grow w-full items-start">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>
<script setup lang="ts">
  useSeoMeta({
    ogTitle: "Christian Toledo",
    description:
      "Minha página pessoal onde eu posto sobre tecnologia e desenvolvimento web. Você pode acompanhar meus projetos e entrar em contato comigo por aqui.",
    ogDescription:
      "Minha página pessoal onde eu posto sobre tecnologia e desenvolvimento web. Você pode acompanhar meus projetos e entrar em contato comigo por aqui.",
    ogImage: "graphism.webp"
  });
</script>
