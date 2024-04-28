import {defineStore} from 'pinia'

const prefersDark
    = window.matchMedia
    && window.matchMedia('(prefers-color-scheme: dark)').matches
const theme = prefersDark ? 'dark' : 'light'

const useAppStore = defineStore('app', {
    state: () => {
        return{
            mode: theme,
        }
    },
    persist: true,
    actions: {
        swithMode(val) {
            this.mode = val
        }
    }
})
export default useAppStore