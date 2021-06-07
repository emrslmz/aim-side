export default [{
    path: '/about',
    name: 'AboutHome',
    component: () => import('@/modules/main/about/views/AboutHome.vue'),
    children: [
        // {
        //     path: '/profiles',
        //     meta: {
        //         title: 'Profile',
        //     },
        //     component: () => import('@/modules/main/profiles/components/Profiles.vue'),
        // },
    ]
}];
