import Home from '@/modules/main/home/router';

export default [
    {
        path: '/',
        component: () => import('@/core/App.vue'),
        children: [...Home],
    },
    {
        path: '*',
        component: () => import('@/modules/errors/views/NotFound.vue'),
    }
];

