const state = {
    whichGun: null,
    selectedGun: {},
    gunSounds: [   //csgo: 1 valorant: 2
        {
            name: 'Ak47',
            typeId: 1,
            gunFolder: 'ak47.wav',
            gunPic: 'ak47.png',
        },
        {
            name: 'AUG',
            typeId: 1,
            gunFolder: 'aug.wav',
            gunPic: 'aug.png',
        },
        {
            name: 'AWP',
            typeId: 1,
            gunFolder: 'awp.wav',
            gunPic: 'awp.png',
        },
        {
            name: 'Bucky',
            typeId: 2,
            gunFolder: 'bucky.mp3',
            gunPic: 'bucky.png',
        },
        {
            name: 'Classic',
            typeId: 2,
            gunFolder: 'classic.mp3',
            gunPic: 'classic.png',
        },
        {
            name: 'Deagle',
            typeId: 1,
            gunFolder: 'deagle.wav',
            gunPic: 'deagle.png',
        },
        {
            name: 'Five Seven',
            typeId: 1,
            gunFolder: 'fiveseven.wav',
            gunPic: 'fiveseven.png',
        },
        {
            name: 'Ghost',
            typeId: 2,
            gunFolder: 'ghost.mp3',
            gunPic: 'ghost.png',
        },
        {
            name: 'Glock-18',
            typeId: 1,
            gunFolder: 'glock.wav',
            gunPic: 'glock.png',
        },
        {
            name: 'Guardian',
            typeId: 2,
            gunFolder: 'guardian.mp3',
            gunPic: 'guardian.png',
        },
        {
            name: 'Judge',
            typeId: 2,
            gunFolder: 'judge.mp3',
            gunPic: 'judge.png',
        },
        {
            name: 'M4A1-S',
            typeId: 1,
            gunFolder: 'm4a1s.wav',
            gunPic: 'm4a1s.png',
        },
        {
            name: 'Operator',
            typeId: 2,
            gunFolder: 'operator.mp3',
            gunPic: 'operator.png',
        },
        {
            name: 'Sheriff',
            typeId: 2,
            gunFolder: 'sheriff.mp3',
            gunPic: 'sheriff.png',
        },
        {
            name: 'Shorty',
            typeId: 2,
            gunFolder: 'shorty.mp3',
            gunPic: 'shorty.png',
        },
        {
            name: 'USP-S',
            typeId: 1,
            gunFolder: 'usps.wav',
            gunPic: 'usps.png',
        },
    ]
};

const mutations = {
    SELECTE_GUN(state, data) {
        state.selectedGun = data;
    },
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
