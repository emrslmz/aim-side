export default [{
    path: '/play',
    name: 'Play',
    component: () => import('@/modules/main/play/views/Play.vue'),
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
