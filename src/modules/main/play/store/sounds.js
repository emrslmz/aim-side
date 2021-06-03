const state = {
    whichKillSound: null,
    killSoundMute: false,
    killSounds: [
        {
            name: 'Kill1',
            id: 1,
            soundFolder: 'dead_valorant_1.mp3',
        },
        {
            name: 'Kill2',
            id: 2,
            soundFolder: 'dead_valorant_2.mp3',
        },
        {
            name: 'Kill3',
            id: 3,
            soundFolder: 'dead_valorant_3.mp3',
        },
        {
            name: 'Kill4',
            id: 4,
            soundFolder: 'dead_valorant_4.mp3',
        },
        {
            name: 'Kill5',
            id: 5,
            soundFolder: 'dead_valorant_5.mp3',
        },
    ],
    //gunSound
    selectedGun: {},
    gunSoundMute: false,
    gunSounds: [   //csgo: 1 valorant: 2
        {
            name: 'Ak47',
            id: 1,
            typeId: 1,
            gunFolder: 'ak47.wav',
            gunPic: 'ak47.png',
        },
        {
            name: 'AUG',
            id: 2,
            typeId: 1,
            gunFolder: 'aug.wav',
            gunPic: 'aug.png',
        },
        {
            name: 'AWP',
            id: 3,
            typeId: 1,
            gunFolder: 'awp.wav',
            gunPic: 'awp.png',
        },
        {
            name: 'Bucky',
            id: 4,
            typeId: 2,
            gunFolder: 'bucky.mp3',
            gunPic: 'bucky.png',
        },
        {
            name: 'Classic',
            id: 5,
            typeId: 2,
            gunFolder: 'classic.mp3',
            gunPic: 'classic.png',
        },
        {
            name: 'Deagle',
            id: 6,
            typeId: 1,
            gunFolder: 'deagle.wav',
            gunPic: 'deagle.png',
        },
        {
            name: 'Five Seven',
            id: 7,
            typeId: 1,
            gunFolder: 'fiveseven.wav',
            gunPic: 'fiveseven.png',
        },
        {
            name: 'Ghost',
            id: 8,
            typeId: 2,
            gunFolder: 'ghost.mp3',
            gunPic: 'ghost.png',
        },
        {
            name: 'Glock-18',
            id: 9,
            typeId: 1,
            gunFolder: 'glock.wav',
            gunPic: 'glock.png',
        },
        {
            name: 'Guardian',
            id: 10,
            typeId: 2,
            gunFolder: 'guardian.mp3',
            gunPic: 'guardian.png',
        },
        {
            name: 'Judge',
            id: 11,
            typeId: 2,
            gunFolder: 'judge.mp3',
            gunPic: 'judge.png',
        },
        {
            name: 'M4A1-S',
            id: 12,
            typeId: 1,
            gunFolder: 'm4a1s.wav',
            gunPic: 'm4a1s.png',
        },
        {
            name: 'Operator',
            id: 13,
            typeId: 2,
            gunFolder: 'operator.mp3',
            gunPic: 'operator.png',
        },
        {
            name: 'Sheriff',
            id: 14,
            typeId: 2,
            gunFolder: 'sheriff.mp3',
            gunPic: 'sheriff.png',
        },
        {
            name: 'Shorty',
            id: 15,
            typeId: 2,
            gunFolder: 'shorty.mp3',
            gunPic: 'shorty.png',
        },
        {
            name: 'USP-S',
            id: 16,
            typeId: 1,
            gunFolder: 'usps.wav',
            gunPic: 'usps.png',
        },
    ]
};


const mutations = {
    FETCH_SOUND(state, kill) {

        const number = parseInt(kill.toString().substring(kill.toString().length-1));

        if (number === 6) {
            state.whichKillSound = 1;
        } else if (number === 7) {
            state.whichKillSound = 2;
        } else if (number === 8) {
            state.whichKillSound = 3;
        } else if (number === 9) {
            state.whichKillSound = 4;
        } else if (number === 0) {
            state.whichKillSound = 5;
        } else {
           state.whichKillSound = number;
        }
        state.selectedSoundData = state.killSounds.find(a => a.id === state.whichKillSound);
        // console.log(parseInt(kill.toString().substring(kill.toString().length-1)));
    },
    SELECTED_GUN(state, data) {
        state.selectedGun = data;
    },
    CHANGE_VOLUME_KILL_SOUND(state) {
        state.killSoundMute = !state.killSoundMute;
    },
    CHANGE_VOLUME_GUN_SOUND(state) {
        state.gunSoundMute = !state.gunSoundMute;
    }
};

const actions = {
     playSound({ commit, state }, {kill, gunData}) {

        commit('FETCH_SOUND', kill);

        const audio = new Audio('/assets/sound/'+ state.selectedSoundData.soundFolder);
         audio.play();
         if (state.gunSoundMute === true) {
             audio.volume = 0;
         } else {
             audio.volume = 0.1;
         }

        const gunSound = new Audio('/assets/sound/gun/' + gunData.gunFolder);
        gunSound.play();
        if (state.killSoundMute === true) {
            gunSound.volume = 0;
        } else {
            gunSound.volume = 0.2;
        }
   },
    selectGun({ commit }, data) {
        commit('SELECTED_GUN', data);
    },
    changeVolumeKillSound({ commit}) {
         commit('CHANGE_VOLUME_KILL_SOUND');
    },
    changeVolumeGunSound({ commit }) {
         commit('CHANGE_VOLUME_GUN_SOUND');
    }

};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
