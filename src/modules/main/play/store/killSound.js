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
};


const mutations = {
    FETCH_SOUND(state, click) {

        const number = parseInt(click.toString().substring(click.toString().length-1));

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
        // console.log(parseInt(click.toString().substring(click.toString().length-1)));

    },
};

const actions = {
     playSound({ commit, state }, {click, gunData}) {

        commit('FETCH_SOUND', click);

        const audio = new Audio('/assets/sound/'+ state.selectedSoundData.soundFolder);
        audio.play();
        audio.volume = 0.1;

        const gunSound = new Audio('/assets/sound/gun/' + gunData.gunFolder);
         gunSound.play();
         gunSound.volume = 0.2;

   },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
