<template>
  <div>
    <app-header></app-header>
    <main class="main">
      <links></links>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
.main {
  height: 100vh;
  background-color: #333;
}
</style>
