import { defineStore } from 'pinia'


const useRouteCacheStore = defineStore('route-cache', {
    state: () => {
        return {
            routeCaches: []
        }
    },
    actions: {
        addRoute(route) {
            if (this.routeCaches.includes(route.name))
                return
            if (route?.meta?.keepAlive)
                this.routeCaches.push(route.name)
        }
    }
})
export default useRouteCacheStore