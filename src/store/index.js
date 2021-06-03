import Vue from 'vue';
import Vuex from 'vuex';

import Play from '@/modules/main/play/store/play';
import Shot from '@/modules/main/play/store/shot';
import Sounds from '@/modules/main/play/store/sounds';
import Background from '@/modules/main/play/store/background';
import CrossAir from '@/modules/main/play/store/crossair';


Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,
    modules: {
        Play,
        Shot,
        Sounds,
        Background,
        CrossAir,
    },
});
