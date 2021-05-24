export default [{
    path: '/not-found',
    name: 'NotFoundPage',
    component: () => import('@/modules/errors/views/NotFound.vue'),
    // children: [
    //     {
    //         path: '/admin/shop/items',
    //         meta: {
    //             title: 'Added Items',
    //         },
    //         component: () => import('@/modules/admin/shop/components/AddedItems.vue'),
    //     },
    // ]
}];
