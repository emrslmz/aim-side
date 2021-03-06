import Play from '@/modules/main/play/router';
import Condition from '@/modules/main/conditions/router';
import About from '@/modules/main/about/router';
import Tutorial from '@/modules/main/tutorial/router';

export default [{
    path: '/',
    name: 'HomePageDashboard',
    component: () => import('@/modules/main/home/views/Home.vue'),
    children: [...Play, ...Condition, ...About, ...Tutorial],
}];
