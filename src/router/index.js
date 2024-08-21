import { createWebHistory, createRouter } from 'vue-router';
import TrtMain from '../views/TrtMain.vue';
import MainList from '../views/MainList.vue';

const routes = [
    {
        path: '',
        component: TrtMain
    },
    {
        path: '/list',
        component: MainList
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;