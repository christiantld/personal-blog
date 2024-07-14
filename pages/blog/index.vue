<script setup>
  const { data: posts } = await useAsyncData("posts", () =>
    queryContent("/blog").sort({date: -1}).find()
  );

  useHead({
    title: "Blog - Christian Toledo"
  });
</script>

<template>
  <h1 class="text-3xl my-8">Postagens</h1>

  <div class="text-gray-900 space-y-4">
    <p>
      Eu escrevo sobre o que eu aprendo, como uma forma de fixar o conhecimento
      e também de compartilhar com outras pessoas. Os temas pelos quais eu me
      interesso são: desenvolvimento web, programação, tecnologia, produtividade
      e experimentações.
    </p>

    <p>Aqui estão lista de postagens que eu já escrevi.</p>
  </div>

  <section class="grid md:grid-cols-3 mt-8 gap-10">
    <Post :posts="posts" />
  </section>
</template>
