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
    PLAY_SOUND(state, click) {
        if (click % 1 === 0) {
            state.whichSound = 1;
        } else if (click % 2 === 0) {
            state.whichSound = 2;
        } else if (click % 3 === 0) {
            state.whichSound = 3;
        } else if (click % 4 === 0) {
            state.whichSound = 4;
        } else if (click % 5 === 0) {
            state.whichSound = 5;
        }
        state.selectedSoundData = state.sounds.find(a => a.id === state.whichSound);
    }
};

const actions = {
      playSound({ commit }, click) { //click = kill sayısı

        commit('PLAY_SOUND', click);

        const number = click.toString().substring(click.toString().length-1);
        console.log(number);
        const audio = new Audio('/assets/sound/'+ state.selectedSoundData.soundName);
        audio.play().then(() => {
            state.selectedSoundData = {}
        });
    },
};
// var kelime = metin.substring(0, 6);

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
