import path from 'node:path'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import {VantResolver} from '@vant/auto-import-resolver';
import viewport from 'postcss-mobile-forever'
import autoprefixer from 'autoprefixer'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            imports: ["vue", "vue-router"],
            resolvers: [VantResolver()],
        }),
        Components({
            resolvers: [VantResolver()],
        }),
    ],
    server: {
        proxy: {
            '/api': {
                target: '',
                ws: false,
                changeOrigin: true,
            },
        },
    },
    resolve: {
        alias: {
            '~@': path.join(__dirname, './src'),
            '@': path.join(__dirname, './src'),
            '~': path.join(__dirname, './src/assets'),
        },
    },
    css: {
        postcss: {
            plugins: [
                autoprefixer(),
                // https://github.com/wswmsword/postcss-mobile-forever
                viewport({
                    appSelector: '#app',
                    viewportWidth: 375,
                    maxDisplayWidth: 600,
                    mobileUnit: 'vw',
                    rootContainingBlockSelectorList: [
                        'van-tabbar',
                        'van-popup',
                    ],
                }),
            ],
        },
        preprocessorOptions: {
            less: {
                // modifyVars: {
                //     hack: 'true; @import "@/assets/less.less"'
                // },
                javascriptEnabled: true
            }
        }
    },
})
