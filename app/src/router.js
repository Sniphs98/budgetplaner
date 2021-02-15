import { createRouter, createWebHistory } from 'vue-router';

/* importing page components */
import Create from './pages/Create.vue';
import Detail from './pages/Detail.vue';
import Index from './pages/Index.vue';
import UserCreate from './pages/UserCreate.vue';

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '/create',
        name: 'create',
        component: Create
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: Detail
    },
    {
        path: '/user/create',
        name: 'user.create',
        component: UserCreate
    }
];

export default createRouter({
    history: createWebHistory('#'),
    routes
});
