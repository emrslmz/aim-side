export default [{
    path: '/how-it-works',
    name: 'HowItWorksHome',
    component: () => import('@/modules/main/tutorial/views/HowItWorksHome.vue'),
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
