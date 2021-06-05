
const mutations = {
    SELECT_DIFFICULTY(state, difficultyId) {
        state.playData.selectedDifficulty = state.playData.difficulty.find(d => d.type === difficultyId);
    },
    ADD_COORDINATE(state, difficultyType) {

        for (let a = 0; a < difficultyType; a++) {

            const coordinateId = state.playData.itemData.id = a;

            const itemWidth = state.playData.itemData.itemWidth;
            const itemHeight = state.playData.itemData.itemHeight;
            const coordinatesX = state.playData.itemData.coordinateX = Math.floor(Math.random() * 1700);
            const coordinatesY = state.playData.itemData.coordinateY = Math.floor(Math.random() * 750);
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

