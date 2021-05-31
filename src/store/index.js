import Vue from 'vue';
import Vuex from 'vuex';


import Play from '@/modules/main/play/store/play';
import Shot from '@/modules/main/play/store/shot';
import KillSound from '@/modules/main/play/store/killSound';
import GunSound from '@/modules/main/play/store/gunSound';


Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,
    modules: {
        Play,
        Shot,
        KillSound,
        GunSound,
    },
});
