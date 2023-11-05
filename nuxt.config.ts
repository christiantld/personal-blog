// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxtjs/google-fonts', '@nuxt/content'],
  tailwindcss: {
    exposeConfig: true,
  },
  googleFonts: {
    display: "swap",
    families: {
      Poppins: [400, 500, 600, 700],
      Agbalumo: [400],
    }
  },
  content: {
    highlight: {
      theme: 'github-dark',
      preload: ['ts', 'js', 'json', 'html', 'css', 'vue', 'vue-html', 'jsx', 'tsx', 'bash', 'shell']
    }
  }
})
