const state = {
    selectedBackground: {},
    backgrounds: [
        {
            name: 'Default',
            id: 0,
            mode: 2,  // 1= picture, 2= gardient
            style: 'background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%)',  // 1= picture, 2= gardient
        },
        {
            name: 'Ascent 1',
            id: 1,
            mode: 1,  // 1= picture, 2= gardient
            style: 'ascent_1.png',  // 1= picture, 2= gardient
        },
        {
            name: 'Ascent 2',
            id: 2,
            mode: 1,
            style: 'ascent_2.jpg',
        },
        {
            name: 'Split 1',
            id: 3,
            mode: 1,
            style: 'split_1.jpg',
        },
        {
            name: 'Split 2',
            id: 4,
            mode: 1,
            style: 'split_2.jpg',
        },
        {
            name: 'Gardient',
            id: 5,
            mode: 2,
            style: 'background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
        },
        {
            name: 'Icebox 1',
            id: 6,
            mode: 1,
            style: 'icebox_1.jpg',
        },
        {
            name: 'Icebox 2',
            id: 7,
            mode: 1,
            style: 'icebox_2.jpg',
        },
        {
            name: 'Bind 1',
            id: 8,
            mode: 1,
            style: 'bind_1.jpg',
        },
        {
            name: 'Bind 2',
            id: 9,
            mode: 1,
            style: 'bind_2.jpg',
        },
        {
            name: 'Breeze 1',
            id: 10,
            mode: 1,
            style: 'breeze_1.png',
        },
        {
            name: 'Breeze 2',
            id: 11,
            mode: 1,
            style: 'breeze_2.jpg',
        },

    ]
};

const mutations = {
    SELECT_BACKGROUND(state, dataId) {
        state.selectedBackground = state.backgrounds.find(a => a.id === dataId);

    }
};

const actions = {
    selectBackground({ commit }, dataId) {
        commit('SELECT_BACKGROUND', dataId);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
