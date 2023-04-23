import {createRouter, createWebHistory} from 'vue-router'
import MainPage from '../views/main-page.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'main-page',
            component: MainPage
        },
        {
            path: '/randomizer',
            name: 'randomizer-page',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/randomizer-page.vue')
        },
        {
            path: '/game',
            name: 'game-page',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/game-page.vue')
        },
        {
            path: '/game-over',
            name: 'end-screen',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/game-over-page.vue')
        }
    ]
})

export default router
