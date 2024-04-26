<template>
  <Container :padding-x="0">
    首页
    <router-link to="/info">详情</router-link>
  </Container>
</template>
<script setup>
import Container from "@/components/Container.vue";
import {useRouter} from "vue-router";

const router = useRouter()
</script>
<style scoped lang="less">

</style>