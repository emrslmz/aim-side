const state = {
   playData: {
       beforeStart: {
           startStatus: false,
           time: 3,
       },
       nowStart: {
           playing: false,  // now start run
           playingTime: 124,  //2minutes
       },
       gameData: {
           point: 0,
           kill: 0,
           click: 0,
       },
       selectedDifficulty: {},
       difficulty: [
           {
               id: 1,
               name: 'Extreme',  // 1 tane çıkcak
               icon: 'fas fa-apple-alt color-blue',
               itemNumber: 1,
               items: [],
           },
           {
               id: 2,
               name: 'Impossible', //2 tane çıkcak
               icon: 'fas fa-apple-alt color-pruple',
               itemNumber: 2,
               items: [],
           },
           {
               id: 3,
               name: 'Hard', //3 tane çıkcak
               icon: 'fas fa-apple-alt color-red',
               itemNumber: 3,
               items: [],
           },
           {
               id: 4,
               name: 'Medium', //4 tane çıkcak
               icon: 'fas fa-apple-alt color-orange',
               itemNumber: 4,
               items: [],
           },
           {
               id: 5,
               name: 'Easy',  //5 tane çıkcak
               icon: 'fas fa-apple-alt color-yellow',
               itemNumber: 5,
               items: [],
           },
           {
               id: 6,
               name: 'Beginner',  //6 tane çıkcak
               icon: 'fas fa-apple-alt color-green',
               itemNumber: 6,
               items: [],
           },
           {
               id: 7,
               name: 'Rookie',  //7 tane çıkcak
               icon: 'fas fa-apple-alt color-lightgreen',
               itemNumber: 7,
               items: [],
           },
       ],
       selectedItemSize: {},
       itemSizes: [
           {
               type: 1,
               name: 'Small',
               icon: '',
               width: 50,
               height: 50,
           },
           {
               type: 2,
               name: 'Default',
               icon: '',
               width: 100,
               height: 100,
           },
           {
               type: 3,
               name: 'Random',
               icon: '',
               width: 50,
               height: 50,
           },
           {
               type: 4,
               name: 'Big',
               icon: '',
               width: 120,
               height: 120,
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
           {
               name: 'Dark',
               id: 3,
               style: 'linear-gradient(to right, #434343 0%, black 100%)',
           },
           {
               name: 'White',
               id: 4,
               style: 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)',
           },
       ]
   },
};
const mutations = {
    SELECT_DIFFICULTY(state, difficultyId) {
      const difficultyData = state.playData.selectedDifficulty = state.playData.difficulty.find(a => a.id === difficultyId);
        const selectedItemSizeType = state.playData.selectedItemSize;
        const selectedItemColor = state.playData.selectedItemColor;

        state.playData.selectedDifficulty.items = [];
      for (let a = 0; a < difficultyData.itemNumber; a++) {

          const itemId = a;
          const coordinateX = Math.floor(Math.random() * 1700);
          const coordinateY = Math.floor(Math.random() * 750);

          const itemWidth = selectedItemSizeType.width;
          const itemHeight = selectedItemSizeType.height;

          if (selectedItemSizeType.type === 3 ) {
              const RandomSize = Math.floor(Math.random() * 50) + 50;
              selectedItemSizeType.width = RandomSize;
              selectedItemSizeType.height = RandomSize;
          }

          const itemColor = selectedItemColor.style;
          state.playData.selectedDifficulty.items.push({ itemId, coordinateX, coordinateY, itemWidth, itemHeight,itemColor });
      }
        console.log(difficultyData);
    },
    SELECT_ITEM_SIZE(state, itemSizeType) {
      state.playData.selectedItemSize = state.playData.itemSizes.find(s => s.type === itemSizeType);
    },
    CHANGE_ITEM_POSITION(state, itemId) {
      const item = state.playData.selectedDifficulty.items.find(i => i.itemId === itemId);

      item.coordinateX = Math.floor(Math.random() * 1700);
      item.coordinateY = Math.floor(Math.random() * 750);
      item.itemColor = state.playData.selectedItemColor.style;

      if (state.playData.selectedItemSize.type === 3 ) {
          const RandomSize = Math.floor(Math.random() * 50) + 50;
          item.itemWidth = RandomSize;
          item.itemHeight = RandomSize;
      } else {
          item.itemWidth = state.playData.selectedItemSize.width;
          item.itemHeight = state.playData.selectedItemSize.height;
      }
    },
    SELECT_ITEM_COLOR(state, itemColorId) {
        state.playData.selectedItemColor = state.playData.itemColors.find(c => c.id === itemColorId);
        console.log(state.playData.selectedItemColor);
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
    selectDifficulty({ commit }, difficultyId) {
        commit('SELECT_DIFFICULTY', difficultyId);
    },
    selectItemSize({ commit }, itemSizeType) {
        commit('SELECT_ITEM_SIZE', itemSizeType);
    },
    changeItemPosition({ commit }, itemId) {
        commit('CHANGE_ITEM_POSITION', itemId);
    },
    selectItemColor({ commit }, itemColorId) {
        commit('SELECT_ITEM_COLOR', itemColorId);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
