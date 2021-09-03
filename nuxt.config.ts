export default {
  head: {
    title: 'Keisuke Sasaki',
    meta: [
      { charset: 'utf-8' }
    ]
  },
  buildModules: ['@nuxt/typescript-build'],
  components: [
    {
      path: '@/components',
      pathPrefix: false,
    },
  ],
}