import {defineStore} from 'pinia'


const useRouteTransitionNameStore = defineStore('route-transition-name', {
    state: () => {
        return {
            routeTransitionName: ''
        }
    },
    actions: {
        setName(name) {
            this.routeTransitionName = name
        }
    }
})


export default useRouteTransitionNameStore