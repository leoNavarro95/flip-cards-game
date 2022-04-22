import { createRouter, createWebHistory  } from 'vue-router'

import Home from '../modules/flip-game/components/Home.vue'
import About from '../modules/flip-game/components/About.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', name: 'Home' ,component: Home},
        {path:'/about', name: 'About' ,component: About},
    ]
})

export default router