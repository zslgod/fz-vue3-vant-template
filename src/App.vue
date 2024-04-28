<template>
  <VanConfigProvider :theme="mode">
    <NavBar/>
    <router-view v-slot="{ Component, route }">
      <transition :name="routeTransitionName">
        <div :key="route.path">
          <keep-alive :include="keepAliveRouteNames">
            <component :is="Component" :key="route.name"/>
          </keep-alive>
        </div>
      </transition>
    </router-view>
    <TabBar/>
  </VanConfigProvider>
</template>
<script setup>
import {storeToRefs} from 'pinia'
import useAppStore from '@/stores/modules/app'
import useRouteCache from '@/stores/modules/routeCache'
import useRouteTransitionNameStore from '@/stores/modules/routeTransitionName'
import useAutoThemeSwitcher from '@/hooks/useAutoThemeSwitcher'
import {useHead} from '@unhead/vue'
import {isDark, preferredDark} from "@/composables/dark.js";
import NavBar from "@/components/NavBar.vue";
import TabBar from "@/components/TabBar.vue";

useHead({
  title: 'fz-vue3-vant-template',
  meta: [
    {
      name: 'description',
      content: 'Vue + Vite H5 Starter Template',
    },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#00aba9' : '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg',
    },
  ],
})

const appStore = useAppStore()
const {mode} = storeToRefs(appStore)

const routeTransitionNameStore = useRouteTransitionNameStore()
const {routeTransitionName} = storeToRefs(routeTransitionNameStore)
const {initializeThemeSwitcher} = useAutoThemeSwitcher(appStore)

const keepAliveRouteNames = computed(() => {
  return useRouteCache().routeCaches
})

onMounted(() => {
  initializeThemeSwitcher()
})
</script>
<style scoped>
</style>
