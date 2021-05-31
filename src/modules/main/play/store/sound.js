const state = {
    whichSound: null,
    selectedSoundData: {},
    sounds: [
        {
            name: 'Kill1',
            id: 1,
            soundName: 'sound_valorant_dead_1.mp3',
        },
        {
            name: 'Kill2',
            id: 2,
            soundName: 'sound_valorant_dead_2.mp3',
        },
        {
            name: 'Kill3',
            id: 3,
            soundName: 'sound_valorant_dead_3.mp3',
        },
        {
            name: 'Kill4',
            id: 4,
            soundName: 'sound_valorant_dead_4.mp3',
        },
        {
            name: 'Kill5',
            id: 5,
            soundName: 'sound_valorant_dead_5.mp3',
        },
    ],
};


const mutations = {
    FETCH_SOUND(state, click) {

        const number = parseInt(click.toString().substring(click.toString().length-1));

        if (number === 6) {
            state.whichSound = 1;
        } else if (number === 7) {
            state.whichSound = 2;
        } else if (number === 8) {
            state.whichSound = 3;
        } else if (number === 9) {
            state.whichSound = 4;
        } else if (number === 0) {
            state.whichSound = 5;
        } else {
           state.whichSound = number;
        }

        state.selectedSoundData = state.sounds.find(a => a.id === state.whichSound);
        console.log(parseInt(click.toString().substring(click.toString().length-1)));

    },
};

const actions = {
     playSound({ commit, state }, click) {

        commit('FETCH_SOUND', click);

        const audio = new Audio('/assets/sound/'+ state.selectedSoundData.soundName);
        audio.play();
        audio.volume = 0.2;
        // console.log(state.selectedSoundData);

         //  state.sounds.find(a => a.id === click.toString(substring(click.toString().length-1).parseInt);
         //  state.sounds.find(a => a.id === click.toString().substring(click.toString().length-1).parseInt);
   },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
