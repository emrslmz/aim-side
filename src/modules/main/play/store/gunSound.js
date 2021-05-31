const state = {
    whichGun: null,
    selectedGun: {},
    gunSounds: [
        {
            name: 'Ghost',
            id: 1,
            gunFolder: 'ghost.mp3',
        },
        {
            name: 'Sheriff',
            id: 1,
            gunFolder: 'sheriff.mp3',
        },
    ]
};

const mutations = {
    SELECTE_GUN(state, data) {
        state.selectedGun = data;
    }
};

const actions = {
    selectGun({ commit }, data) {
       commit('SELECTE_GUN', data);
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
