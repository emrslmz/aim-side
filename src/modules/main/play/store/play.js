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
         id: null,
         coordinateX: 0,
         coordinateY: 0,
         itemStyle: {
             itemWidth: 100,
             itemHeight: 100,
         },
       },
       selectedDifficulty: {},
       difficulty: [
           {
               type: 1,
               name: 'Extreme',  // 1 tane çıkcak
               icon: 'fas fa-apple-alt color-blue',
               coordinate: [],
           },
           {
               type: 2,
               name: 'Impossible', //2 tane çıkcak
               icon: 'fas fa-apple-alt color-pruple',
               coordinate: [],
           },
           {
               type: 3,
               name: 'Hard', //3 tane çıkcak
               icon: 'fas fa-apple-alt color-red',
               coordinate: [],
           },
           {
               type: 4,
               name: 'Medium', //4 tane çıkcak
               icon: 'fas fa-apple-alt color-orange',
               coordinate: [],
           },
           {
               type: 5,
               name: 'Easy',  //5 tane çıkcak
               icon: 'fas fa-apple-alt color-yellow',
               coordinate: [],
           },
           {
               type: 6,
               name: 'Beginner',  //6 tane çıkcak
               icon: 'fas fa-apple-alt color-green',
               coordinate: [],
           },
           {
               type: 7,
               name: 'Rookie',  //7 tane çıkcak
               icon: 'fas fa-apple-alt color-lightgreen',
               coordinate: [],
           },
       ],
       selectedItemSize: {},
       itemSize: [
           {
               type: 1,
               name: 'Small',
               icon: '',
           },
           {
               type: 2,
               name: 'Default',
               icon: '',
           },
           {
               type: 3,
               name: 'Big',
               icon: '',
           },
       ]

   },
};

const mutations = {
    SELECT_DIFFICULTY(state, difficultyId) {
        state.playData.selectedDifficulty = state.playData.difficulty.find(d => d.type === difficultyId);
    },
    ADD_COORDINATE(state, difficultyType) {

        for (let a = 0; a < difficultyType; a++) {

            const coordinateId = state.playData.coordinates.id = a;
            const itemWidth = state.playData.coordinates.itemStyle.itemWidth;
            const itemHeight = state.playData.coordinates.itemStyle.itemHeight;
            const coordinatesX = state.playData.coordinates.coordinateX = Math.floor(Math.random() * 1700);
            const coordinatesY = state.playData.coordinates.coordinateY = Math.floor(Math.random() * 750);
            state.playData.selectedDifficulty.coordinate.push({coordinatesX, coordinatesY, coordinateId, itemWidth, itemHeight});

        }
        console.log(state.playData.selectedDifficulty);

    },
    CHANGE_COORDINATE(state, itemId) {
      const changeCoordinate = state.playData.selectedDifficulty.coordinate.find(i => i.coordinateId === itemId);
      changeCoordinate.coordinatesX = Math.floor(Math.random() * 1700);
      changeCoordinate.coordinatesY = Math.floor(Math.random() * 750);
    },
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
    selectDifficulty({ commit }, difficultyType) {
        commit('SELECT_DIFFICULTY', difficultyType);
    },
    addCoordinate({ commit }, difficultyType) {
        commit('ADD_COORDINATE', difficultyType);
    },
    changeCoordinate({ commit }, itemId) {
        commit('CHANGE_COORDINATE', itemId);
    },
};


export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
