import { createApp } from 'vue'
import '@/styles/app.less'
import App from '@/App.vue'
import router from '@/router'
import pinia from '@/stores'
// Vant 桌面端适配
import '@vant/touch-emulator'

/* --------------------------------
Vant 中有个别组件是以函数的形式提供的，
包括 Toast，Dialog，Notify 和 ImagePreview 组件。
在使用函数组件时，unplugin-vue-components
无法自动引入对应的样式，因此需要手动引入样式。
------------------------------------- */
import 'vant/es/toast/style'
import 'vant/es/dialog/style'
import 'vant/es/notify/style'
import 'vant/es/image-preview/style'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
//todo 接口请求封装