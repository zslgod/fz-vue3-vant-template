import {defineStore} from 'pinia'

const useUserStore = defineStore('user', {
    state:()=>{
        return{
            token:'',
        }
    },
    persist: true,
})

export default useUserStore