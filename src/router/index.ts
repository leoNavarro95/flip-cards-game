import { createRouter, createWebHistory  } from 'vue-router'

import Posts from '../modules/flip-game/pages/Posts.vue'
import Tests from '../modules/flip-game/pages/Tests.vue'
import SinglePostView from '../modules/flip-game/pages/SinglePostPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/', 
            name: 'Posts',
            component: Posts
        },
        {
            path:'/authors', 
            name: 'Authors',
            //this is lazy loaded
            component: () => import('../modules/flip-game/pages/Authors.vue')
        },
        {
            path:'/author/:username', 
            name: 'SingleAuthor',
            //this is lazy loaded
            component: () => import('../modules/flip-game/views/SingleAuthorView.vue')
        },
        {
            path:'/tests', 
            name: 'Tests',
            component: Tests
        },
        {
            path: '/post/:id',
            name: 'SinglePost',
            component: SinglePostView,
            props: ( route ) =>{
                const postId = Number( route.params.id)
                return isNaN( postId ) ? { postId: 1} : { postId }
            }
        }
    ]
})

export default router