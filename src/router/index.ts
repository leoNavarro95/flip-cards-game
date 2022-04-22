import { createRouter, createWebHistory  } from 'vue-router'

import Posts from '../modules/flip-game/pages/Posts.vue'
import Authors from '../modules/flip-game/pages/Authors.vue'
import Tests from '../modules/flip-game/pages/Tests.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', name: 'Posts' ,component: Posts},
        {path:'/Authors', name: 'Authors' ,component: Authors},
        {path:'/Tests', name: 'Tests' ,component: Tests},
    ]
})

export default router