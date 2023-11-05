<script setup>
  const { data: posts } = await useAsyncData("latest-posts", () =>
    queryContent("/blog").sort({ data: 1 }).limit(3).find()
  );
</script>
<template>
  <section class="flex flex-col gap-4">
    <h2 class="text-2xl text-gray-900">Últimas Postagens</h2>
    <div class="grid md:grid-cols-3 pt-8 gap-10">
      <Post :posts="posts" />
    </div>
  </section>
</template>
