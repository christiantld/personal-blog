<template>
  <ContentRenderer
    :value="data"
    class="prose text-gray-700 mx-auto max-w-7xl"
  />
  <div class="my-8">
    <a
      v-for="tag in data.tags"
      :key="tag"
      :href="`/blog/tags/${tag}`"
      class="text-sm font-special inline-block py-2 px-4 rounded-lg text-gray-500 underline last:mr-0"
    >
      <Icon name="pajamas:label" size="1.25rem" class="text-rose-600" />
      {{ tag }}
    </a>
  </div>
</template>

<script setup>
  const { path } = useRoute();

  const { data } = await useAsyncData(`content-${path}`, () => {
    return queryContent().where({ _path: path }).findOne();
  });
</script>
