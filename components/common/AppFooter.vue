<template>
  <div class="footer">
    <div class="copy_right">© 2021- Keisuke Sasaki</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class AppHeader extends Vue {}
</script>

<style lang="scss" scoped>
.footer {
  width: 100vw;
  height: 60px;
  background-color: #888;
  text-align: center;
  .copy_right{
    padding-top: 15px;
    color: white;
  }
}
</style>
