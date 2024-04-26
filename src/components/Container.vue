<template>
  <main
      class="container"
      :style="`padding-left: ${paddingX}px; padding-right: ${paddingX}px;padding-top: ${paddingTop}; padding-bottom: ${paddingBottom}`"
  >
    <slot/>
  </main>
</template>
<script setup>
import {useRoute} from "vue-router";

defineProps({
  paddingX: {
    type: Number,
    default: 16,
  }
})
const route = useRoute()
const paddingTop = computed(() => {
  return route.meta.navbar ? 'var(--van-nav-bar-height)' : 0
})
const paddingBottom = computed(() => {
  return route.meta.level == 1 ? 'var(--van-tabbar-height)' : 0
})
</script>
<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  position: absolute;
  padding: var(--van-nav-bar-height) 0 var(--van-tabbar-height);
  overflow-y: auto;
}
</style>