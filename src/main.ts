import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

import './index.css'
import router from './router'



createApp(App)
    .use(createPinia())
    .use(router)
    .mount('#app')
