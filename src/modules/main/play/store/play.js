const state = {
   playData: {
       beforeStart: {
           startStatus: false,
           time: 1,
       },
       playing: false,
       target: {
           itemCoordinateX: 0,
           itemCoordinateY: 0,
           x: 0,
           y: 0,
           secondCoordinateX: null,
           secondCoordinateY: null,
           thirdCoordinateX: null,
           thirdCoordinateY: null,
           fourthCoordinateX: null,
           fourthCoordinateY: null,
       },
       nowStart: {
           playingTime: 120,  //2minutes
       },
       point: 0,
       kill: 0,
       click: 0,
       selectedDifficulty: {},
       difficulty: [
           {
               type: 1,
               name: 'Easy',
               icon: 'fas fa-battery-quarter',
               coordinates: [],
           },
           {
               type: 2,
               name: 'Normal',
               icon: 'fas fa-battery-half',
               coordinates: [],
           },
           {
               type: 3,
               name: 'Hard',
               icon: 'fas fa-battery-three-quarters',
               coordinates: [],
           },
           {
               type: 4,
               name: 'Impossible',
               icon: 'fas fa-battery-full',
               coordinates: [],
           },

       ],
   },
};

const mutations = {
    SELECTED_DIFFICULTY(state, dataId) {
       state.playData.selectedDifficulty = state.playData.difficulty.find(a => a.type === dataId);
        console.log(state.playData.selectedDifficulty);
    }
};

const actions = {
    beforeStartTimer(context, data) {
        setInterval(() => {
            if (data.beforeStart.time > 0 && data.beforeStart.startStatus === true) {
                data.beforeStart.time--;
            } else if (data.beforeStart.time === 0) {
                data.playing = true;
            }
        }, 1000);
    },
    nowStartTimer(context, data) {
    setInterval(() => {
       if (data.nowStart.playingTime > 0) {
           data.nowStart.playingTime--;
       }
    }, 1000);
   },
    createCoordinate(context, data) {
        data.target.itemCoordinateX = Math.floor(Math.random() * 1700);
        data.target.itemCoordinateY = Math.floor(Math.random() * 750);
    },
    selectDifficulty({ commit }, dataId) {
        commit('SELECTED_DIFFICULTY', dataId);
    },
};


export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
