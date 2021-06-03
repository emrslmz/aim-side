import Vue from 'vue';
import Vuex from 'vuex';

import Play from '@/modules/main/play/store/play';
import Shot from '@/modules/main/play/store/shot';
import Sounds from '@/modules/main/play/store/sounds';
import Background from '@/modules/main/play/store/background';
import Sight from '@/modules/main/play/store/sight';


Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,
    modules: {
        Play,
        Shot,
        Sounds,
        Background,
        Sight,
    },
});
