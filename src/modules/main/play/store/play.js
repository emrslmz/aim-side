const state = {
   playData: {
       beforeStart: {
           startStatus: false,
           time: 1,
       },
       nowStart: {
           playing: false,  // now start run
           playingTime: 120,  //2minutes
       },
       gameData: {
           point: 0,
           kill: 0,
           click: 0,
       },
       coordinates: {
           firstCoordinateX: 0,
           firstCoordinateY: 0,
           secondCoordinateX: null,
           secondCoordinateY: null,
           thirdCoordinateX: null,
           thirdCoordinateY: null,
           fourthCoordinateX: null,
           fourthCoordinateY: null,
           fifthCoordinateX: null,
           fifthCoordinateY: null,
           sixthCoordinateX: null,
           sixthCoordinateY: null,
           seventhCoordinateX: null,
           seventhCoordinateY: null,
       },
       selectedDifficulty: {},
       difficulty: [
           {
               type: 1,
               name: 'Extreme',  // 1 tane çıkcak
               icon: 'fas fa-dice',
           },
           {
               type: 2,
               name: 'Impossible', //2 tane çıkcak
               icon: 'fas fa-dice',

           },
           {
               type: 3,
               name: 'Hard', //3 tane çıkcak
               icon: 'fas fa-dice',
           },
           {
               type: 4,
               name: 'Medium', //4 tane çıkcak
               icon: 'fas fa-dice',
           },
           {
               type: 5,
               name: 'Easy',  //5 tane çıkcak
               icon: 'fas fa-dice',
           },
           {
               type: 6,
               name: 'Beginner',  //6 tane çıkcak
               icon: 'fas fa-dice',
           },
           {
               type: 7,
               name: 'Rookie',  //7 tane çıkcak
               icon: 'fas fa-dice',
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
           console.log(coordinate);
       } else if (state.playData.selectedDifficulty.type === 4) {
           coordinate.firstCoordinateX = Math.floor(Math.random() * 1700);
           coordinate.firstCoordinateY = Math.floor(Math.random() * 750);
           coordinate.secondCoordinateX = Math.floor(Math.random() * 1700);
           coordinate.secondCoordinateY = Math.floor(Math.random() * 750);
           coordinate.thirdCoordinateX = Math.floor(Math.random() * 1700);
           coordinate.thirdCoordinateY = Math.floor(Math.random() * 750);
           coordinate.fourthCoordinateX = Math.floor(Math.random() * 1700);
           coordinate.fourthCoordinateY = Math.floor(Math.random() * 750);
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
        } else if (clickItemId === 3) {
            state.playData.coordinates.thirdCoordinateX = Math.floor(Math.random() * 1700);
            state.playData.coordinates.thirdCoordinateY = Math.floor(Math.random() * 750);
        } else if (clickItemId === 4) {
            state.playData.coordinates.fourthCoordinateX = Math.floor(Math.random() * 1700);
            state.playData.coordinates.fourthCoordinateY = Math.floor(Math.random() * 750);
        }  else if (clickItemId === 5) {
            state.playData.coordinates.fifthCoordinateX = Math.floor(Math.random() * 1700);
            state.playData.coordinates.fifthCoordinateY = Math.floor(Math.random() * 750);
        } else if (clickItemId === 6) {
            state.playData.coordinates.sixthCoordinateX = Math.floor(Math.random() * 1700);
            state.playData.coordinates.sixthCoordinateY = Math.floor(Math.random() * 750);
        } else if (clickItemId === 7) {
            state.playData.coordinates.seventhCoordinateX = Math.floor(Math.random() * 1700);
            state.playData.coordinates.seventhCoordinateY = Math.floor(Math.random() * 750);
        }

    }
};

const actions = {
    beforeStartTimer(context, data) {
        setInterval(() => {
            if (data.beforeStart.time > 0 && data.beforeStart.startStatus === true) {
                data.beforeStart.time--;
            } else if (data.beforeStart.time === 0) {
                data.nowStart.playing = true;
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
