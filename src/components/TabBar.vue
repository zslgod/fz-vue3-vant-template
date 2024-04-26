<template>
  <van-tabbar v-show="display" v-model="active" route>
    <van-tabbar-item replace to="/">
      首页
      <template #icon>
        <div class="i-carbon:home"/>
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/profile">
     其他
      <template #icon>
        <div class="i-carbon:user"/>
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>
<script setup>
const active = ref(0)
const route = useRoute()

const display = computed(() => {
  return !!(route.meta.level && route.meta.level !== 2);

})
</script>
<style scoped lang="less">

</style>