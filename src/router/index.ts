import { createRouter, createWebHistory  } from 'vue-router'

import MainPage from '../modules/flip-game/pages/MainPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/', 
            name: 'Posts',
            component: MainPage
        },
    ]
})

export default router