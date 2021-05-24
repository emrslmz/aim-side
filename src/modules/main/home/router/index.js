import Play from '@/modules/main/play/router';

export default [{
    path: '/',
    name: 'HomePage',
    component: () => import('@/modules/main/home/views/Home.vue'),
    children: [...Play],
}];
