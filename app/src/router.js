import { createRouter, createWebHistory } from 'vue-router';

/* importing page components */
import Create from './pages/Create.vue';
import Detail from './pages/Detail.vue';
import Index from './pages/Index.vue';

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
    }
];

export default createRouter({
    history: createWebHistory('#'),
    routes
});
