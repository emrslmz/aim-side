const state = {
    selectedSpray: {},
    valoSprays: [
        {
            name: 'zeroo',
            id: 0,
            url: 'spray0',
            extension: 'png',
        },
        {
            name: 'ok',
            id: 1,
            url: 'spray1',
            extension: 'png',
        },
        {
            name: 'ok',
            id: 2,
            url: 'spray2',
            extension: 'png',
        },
    ]
};

const mutations = {
    ADD_SELECTED_SPRAY(state, sprayId) {
        state.selectedSpray = state.valoSprays.find(a => a.id === sprayId);
    }
};

const actions = {
    selectSpray({ commit }) {
        const sprayId = Math.floor(Math.random() * 3);   // yazılan sayı çıkmaz
        commit('ADD_SELECTED_SPRAY', sprayId);
        // console.log(sprayId);
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
