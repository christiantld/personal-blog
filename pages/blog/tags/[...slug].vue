<script setup>
  const route = useRoute();

  const tag = route.params.slug[0].split("-");
  const capitalizedTag = tag
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const { data: posts } = await useAsyncData("posts", () =>
    queryContent("/blog").find()
  );
</script>

<template>
  <h1 class="text-3xl my-8">Postagens sobre: {{ capitalizedTag }}</h1>
  <h2 v-if="!posts.length">Nenhuma postagem encontrada</h2>
  <section v-else class="grid md:grid-cols-3 mt-8 gap-10">
    <Post
      :posts="posts.filter(post => post.tags.includes(route.params.slug[0]))"
    />
  </section>
</template>
