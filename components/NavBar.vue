<template>
  <Disclosure
    as="nav"
    class="bg-white sm:border-b-2 border-b-black/5"
    v-slot="{ open }"
  >
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-rose-600 hover:text-rose-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-200"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Abrir menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>

        <div
          class="flex flex-1 items-center justify-center sm:justify-start gap-2"
        >
          <h2
            v-show="route.name !== 'index'"
            class="font-special text-rose-600"
          >
            @christiantld
          </h2>
          <div class="hidden sm:block">
            <div class="flex space-x-4">
              <span v-for="item in navigation" :key="item.name + item.href">
                <a
                  :href="item.href"
                  :class="[
                    item.current
                      ? ' text-rose-600'
                      : 'text-gray-500  hover:text-cyan-600',
                    'rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300'
                  ]"
                  :aria-current="item.current ? 'page' : undefined"
                  >{{ item.name }}</a
                >
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current
              ? ' text-rose-600'
              : 'text-gray-500  hover:text-cyan-600',
            'block rounded-md px-3 py-2 text-base font-medium transition-colors duration-300'
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
  import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel
  } from "@headlessui/vue";
  import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

  const route = useRoute();

  const navigation = computed(() => [
    { name: "Início", href: "/", current: route.name === "index" },
    {
      name: "Blog",
      href: "/blog",
      current: route.name.includes("blog")
    },
    {
      name: "Sobre mim",
      href: "/sobre",
      current: route.name === "sobre"
    }
  ]);
</script>
