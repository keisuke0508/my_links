<template>
  <div class="links">
    <a v-for="link in links" :key="link.name" :href="link.url" class="link" target="_blank" rel="noopener noreferrer">
      <span class="link_name">{{ link.name }}</span>
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

export type Link = {
  name: string,
  url: string,
}

@Component
export default class Links extends Vue {

  public links: Link[] = [
    { name: 'Twitter', url: 'https://twitter.com/keisukes0508' },
    { name: 'Instagram', url: 'https://www.instagram.com/keisukes0508/' },
    { name: 'ミクチャ', url: 'https://mixch.tv/u/16468754' },
    { name: 'SHOWROOM', url: 'https://www.showroom-live.com/3a3795253818' },
  ]

}
</script>

<style lang="scss" scoped>
.links {
  padding: 15px 0;
  text-align: center;
  .link {
    display: block;
    margin: 0 auto;
    width: 500px;
    border: 1px solid white;
    border-radius: 5px;
    margin-bottom: 15px;
    padding: 10px 0;
    .link_name {
      color: white;
      font-size: 16px;
    }
  }
}
</style>
