const state = {
    selectedSpray: {},
    valoSprays: [
        {
            name: 'dead',
            id: 1,
            url: 'spray1',
            extension: '.png',
        },
        {
            name: 'ok',
            id: 2,
            url: 'spray2',
            extension: '.png',
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
        const sprayId = Math.floor(Math.random() * 3);
        commit('ADD_SELECTED_SPRAY', sprayId);
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
