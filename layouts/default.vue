<template>
  <nuxt />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Default extends Vue {}
</script>

<style lang="scss">
body {
  width: 100vw;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
