const state = {
    selectedSight: {},
    sights: [
        {
            name: 'None',
            id: 0,
            mode: 1, // 1= default 2= picture,
            folderName: 'pointer',
        },
        {
            name: 'Blue Cross',
            id: 1,
            mode: 2,
            folderName: 'blue_cross.png',
        },
        {
            name: 'Small Blue Cross',
            id: 2,
            mode: 2,
            folderName: 'small_blue_cross.png',
        },
        {
            name: 'Green Cross',
            id: 3,
            mode: 2,
            folderName: 'green_cross.png',
        },
        {
            name: 'Small Green Cross',
            id: 4,
            mode: 2,
            folderName: 'small_green_cross.png',
        },
        {
            name: 'Red Cross',
            id: 5,
            mode: 2,
            folderName: 'red_cross.png',
        },
        {
            name: 'Small Red Cross',
            id: 6,
            mode: 2,
            folderName: 'small_red_cross.png',
        },
    ]
};

const mutations = {
    SELECT_SIGHT(state, dataId) {
        state.selectedSight = state.sights.find(a => a.id === dataId);
    }
};

const actions = {
    selectSight({ commit }, dataId) {
        commit('SELECT_SIGHT', dataId);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
