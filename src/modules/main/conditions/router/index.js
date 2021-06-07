export default [{
    path: '/conditions',
    name: 'ConditionHome',
    component: () => import('@/modules/main/conditions/views/ConditionHome.vue'),
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
