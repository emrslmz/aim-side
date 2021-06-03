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
       coordinateData: {
         id: null,
         coordinateX: 0,
         coordinateY: 0,
         itemWidth: 100,
         itemHeight: 100,
         itemColor: {},
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
               name: 'Random',
               icon: '',
           },
           {
               type: 4,
               name: 'Big',
               icon: '',
           },
       ],
       selectedItemColor: {},
       itemColors: [
           {
               name: 'Default',
               id: 1,
               style: 'linear-gradient(to top, #4481eb 0%, #04befe 100%)',
           },
           {
               name: 'Yellow',
               id: 2,
               style: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
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

            const coordinateId = state.playData.coordinateData.id = a;

            const itemWidth = state.playData.coordinateData.itemWidth;
            const itemHeight = state.playData.coordinateData.itemHeight;
            const coordinatesX = state.playData.coordinateData.coordinateX = Math.floor(Math.random() * 1700);
            const coordinatesY = state.playData.coordinateData.coordinateY = Math.floor(Math.random() * 750);
            const itemColorData = state.playData.selectedItemColor;
            state.playData.selectedDifficulty.coordinate.push({coordinatesX, coordinatesY, coordinateId, itemWidth, itemHeight, itemColorData});
        }
        console.log(state.playData.selectedDifficulty);
    },
    CHANGE_ITEM_SIZE(state, sizeType) {
       state.playData.selectedItemSize = state.playData.itemSize.find(i => i.type === sizeType);
    },
    CHANGE_COORDINATE_AND_SIZE(state, itemId) {
      const changeCoordinateStyle = state.playData.selectedDifficulty.coordinate.find(c => c.coordinateId === itemId);
        changeCoordinateStyle.coordinatesX = Math.floor(Math.random() * 1700);
        changeCoordinateStyle.coordinatesY = Math.floor(Math.random() * 750);


        if (state.playData.selectedItemSize.type === 1) {
            changeCoordinateStyle.itemWidth = 70;
            changeCoordinateStyle.itemHeight = 70
        } else if (state.playData.selectedItemSize.type === 2) {
            changeCoordinateStyle.itemWidth = 100;
            changeCoordinateStyle.itemHeight = 100
        } else if (state.playData.selectedItemSize.type === 3) { //random
            const coordinateSize = Math.floor(Math.random() * 50) + 50;
            changeCoordinateStyle.itemWidth = coordinateSize
            changeCoordinateStyle.itemHeight = coordinateSize
        } else if (state.playData.selectedItemSize.type === 4) {
            changeCoordinateStyle.itemWidth = 150;
            changeCoordinateStyle.itemHeight = 150;
        }
    },
    CHANGE_ITEM_COLOR(state, colorId) {
        state.playData.selectedItemColor = state.playData.itemColors.find(s => s.id === colorId);
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
    selectDifficulty({ commit }, difficultyType) {
        commit('SELECT_DIFFICULTY', difficultyType);
    },
    addCoordinate({ commit }, difficultyType) {
        commit('ADD_COORDINATE', difficultyType);
    },
    changeCoordinateAndStyle({ commit }, itemId) {
        commit('CHANGE_COORDINATE_AND_SIZE', itemId);
    },
    changeItemSize({ commit }, sizeType) {
        commit('CHANGE_ITEM_SIZE', sizeType);
    },
    changeItemColor({ commit }, colorId) {
        commit('CHANGE_ITEM_COLOR', colorId);
    },
};


export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
