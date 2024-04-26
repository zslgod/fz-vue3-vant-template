<template>
  <VanNavBar
      v-show="title"
      :title="title"
      :fixed="true"
      clickable :left-arrow="isLeftArrow"
      @click-left="onBack"
  />
</template>
<script setup>
const route = useRoute()
const router = useRouter()

function onBack() {
  if (window.history.state.back)
    history.back()
  else
    router.replace('/')
}

const title = computed(() => {
  if (!route.meta)
    return ''

  return route.meta.title || ''
})
const isLeftArrow = computed(() => {
  return !(route.meta.level && route.meta.level !== 2);
})
</script>
<style scoped lang="less">

</style>