import {createRouter, createWebHashHistory} from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import useRouteTransitionNameStore from '@/stores/modules/routeTransitionName'
import useRouteCacheStore from '@/stores/modules/routeCache'

NProgress.configure({ showSpinner: true, parent: '#app' })

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/pages/index/index.vue'),
            meta: {
                title: '首页',
                level: 1,
                keepAlive: true,
                navbar: true,
            }
        },
        {
            path: '/info',
            component: () => import('@/pages/info/info.vue'),
            meta: {
                title: '详情',
                level: 2,
                keepAlive: false,
                navbar: false,
            }
        },
    ],
})

router.beforeEach((to, from, next) => {
    NProgress.start()

    const routeCacheStore = useRouteCacheStore()
    const routeTransitionNameStore = useRouteTransitionNameStore()

    // Route cache
    routeCacheStore.addRoute(to)

    if (to.meta.level > from.meta.level)
        routeTransitionNameStore.setName('slide-fadein-left')

    else if (to.meta.level < from.meta.level)
        routeTransitionNameStore.setName('slide-fadein-right')

    else
        routeTransitionNameStore.setName('')

    next()
})
router.afterEach(() => {
    NProgress.done()
})


export default router