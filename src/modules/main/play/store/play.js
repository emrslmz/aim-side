const state = {
   playData: {
       beforeStart: {
           startStatus: false,
           time: 1,
       },
       playing: false,
       target: {
           x: 0,
           y: 0,
       },
       nowStart: {
           playingTime: 120,  //2minutes
       },
       point: 0,
       kill: 0,
       click: 0,
       coordinates: {
           firstCoordinateX: 0,
           firstCoordinateY: 0,
           secondCoordinateX: null,
           secondCoordinateY: null,
       },
       selectedDifficulty: {},
       difficulty: [
           {
               type: 1,
               name: 'Easy',
               icon: 'fas fa-battery-quarter',
           },
           {
               type: 2,
               name: 'Normal',
               icon: 'fas fa-battery-half',
           },
       ],
   },
};

const mutations = {
    SELECTED_DIFFICULTY(state, dataId) {
       state.playData.selectedDifficulty = state.playData.difficulty.find(a => a.type === dataId);
        // console.log(state.playData.selectedDifficulty);
    },
    FIRST_TIME_CREATE_COORDINATE(state) {
        const coordinate = state.playData.coordinates;
       if (state.playData.selectedDifficulty.type === 1) {
           coordinate.firstCoordinateX = Math.floor(Math.random() * 1700);
           coordinate.firstCoordinateY = Math.floor(Math.random() * 750);
           coordinate.secondCoordinateX = null;
           coordinate.secondCoordinateY = null;
           console.log(coordinate);
       } else if (state.playData.selectedDifficulty.type === 2) {
           coordinate.firstCoordinateX = Math.floor(Math.random() * 1700);
           coordinate.firstCoordinateY = Math.floor(Math.random() * 750);
           coordinate.secondCoordinateX = Math.floor(Math.random() * 1700);
           coordinate.secondCoordinateY = Math.floor(Math.random() * 750);
           console.log(coordinate);
        }
    },
    CREATE_COORDINATE(state, clickItemId) {
        if (clickItemId === 1) {
            state.playData.coordinates.firstCoordinateX = Math.floor(Math.random() * 1700);
            state.playData.coordinates.firstCoordinateY = Math.floor(Math.random() * 750);
        } else if (clickItemId === 2) {
            state.playData.coordinates.secondCoordinateX = Math.floor(Math.random() * 1700);
            state.playData.coordinates.secondCoordinateY = Math.floor(Math.random() * 750);
        }

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
    firstTimeCreateCoordinate({ commit }) {
        commit('FIRST_TIME_CREATE_COORDINATE');
        // data.target.firstCoordinateX = Math.floor(Math.random() * 1700);
        // data.target.firstCoordinateY = Math.floor(Math.random() * 750);
    },
    createCustomCoordinate({ commit }, clickItemId) {
      commit('CREATE_COORDINATE', clickItemId);
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
