import {defineStore} from 'pinia'

const useRouteTransitionNameStore = defineStore('route-transition-name', () => {
    const routeTransitionName = ref('')

    const setName = (name) => {
        routeTransitionName.value = name
    }

    return {
        routeTransitionName,
        setName,
    }
})

export default useRouteTransitionNameStore