<template>
  <footer class="bg-white border-t-2 border-t-black/5 p-4">
    <div class="flex flex-col items-center gap-2">
      <p class="text-gray-500">
        Você pode me encontrar online em um desses links 👇
      </p>
      <div class="flex space-x-4">
        <a
          v-for="item in links"
          :href="item.href"
          target="_blank"
          class="text-gray-500 hover:text-rose-600 transition-colors duration-300"
          :aria-label="`Link para ${item.name}`"
          ><Icon :name="item.icon" class="w-6 h-6" size="1.5rem" />
        </a>
      </div>
    </div>
  </footer>
</template>
<script setup>
  const links = [
    {
      name: "Github",
      icon: "entypo-social:github",
      href: "https://github.com/christiantld"
    },
    {
      name: "Linkedin",
      icon: "entypo-social:linkedin",
      href: "https://www.linkedin.com/in/christiantld"
    },
    {
      name: "Discord",
      icon: "ic:baseline-discord",
      href: "https://www.discord.com/users/199285913153437696"
    },
    {
      name: "Email",
      icon: "entypo:mail",
      href: "mailto:christian.odt@gmail.com"
    }
  ];
</script>
