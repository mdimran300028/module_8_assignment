import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/', name: 'home',
        component:()=>import('../views/Home.vue')
    },{
        path: '/task', name: 'task',
        component:()=>import('../views/Task.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
