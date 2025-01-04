import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import '@/assets/css/variable.scss'
import '@/assets/css/basic.scss'
import '@/assets/css/style.scss'
import { registerSW } from 'virtual:pwa-register'


const updateSW = registerSW({
  onNeedRefresh () {},
  onOfflineReady () {}
})

updateSW()

createApp(App).use(router).mount('#app')
