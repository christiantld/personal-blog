<script setup>
  const props = defineProps(["posts"]);
</script>

<template>
  <div
    v-for="post in props.posts"
    :key="post.slug"
    class="bg-white rounded-lg shadow-md overflow-hidden hover:opacity-75"
  >
    <NuxtLink :to="post._path">
      <img
        :src="`/images/blog/${post.cover}`"
        alt="Blog Post Cover Image"
        class="w-full h-48 object-cover"
        width="192"
        height="128"
      />
    </NuxtLink>
    <div class="p-6">
      <div>
        <h2 class="text-xl font-bold mb-2 text-gray-900">{{ post.title }}</h2>
        <p class="text-gray-500 mb-4">{{ post.description }}</p>
      </div>
      <NuxtLink
        :to="post._path"
        class="inline-block border-2 w-fit border-rose-600 text-rose-600 hover:border-cyan-600 hover:text-cyan-600 transition-colors duration-300 py-2 px-4 rounded float-right mb-8"
        >Ler mais
      </NuxtLink>
    </div>
  </div>
</template>
