import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/letter/:letter',
        name: 'byLetter',
        component: import('../views/MealList.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;