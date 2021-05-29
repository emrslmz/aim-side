export default [{
    path: '/play',
    name: 'PlayHome',
    component: () => import('@/modules/main/play/views/PlayHome.vue'),
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
