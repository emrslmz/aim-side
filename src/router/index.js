import Vue from 'vue';
import VueRouter from 'vue-router';

import DashboardRoutes from './dashboard';

Vue.use(VueRouter);

const routes = [];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes.concat(DashboardRoutes),
});

export default router;
