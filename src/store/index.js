import Vue from 'vue';
import Vuex from 'vuex';


import Play from '@/modules/main/play/store/play';
import Shot from '@/modules/main/play/store/shot';
import Sound from '@/modules/main/play/store/sound';


Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,
    modules: {
        Play,
        Shot,
        Sound,
    },
});
