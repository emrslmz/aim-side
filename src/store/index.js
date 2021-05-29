import Vue from 'vue';
import Vuex from 'vuex';


import Play from '@/modules/main/play/store/play';


Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,
    modules: {
        Play,

    },
});
