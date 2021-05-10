import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

// Axios
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8088/api'

const PetHomeApp = createApp(App)

PetHomeApp.config.globalProperties.$axios = axios

PetHomeApp.use(ElementPlus)
PetHomeApp.use(store)
PetHomeApp.use(router)
PetHomeApp.mount('#app')
