const state = {
   playData: {
       playTime: 3,
       play: false,
       balonCoordinateX: 0,
       balonCoordinateY: 0,
       point: 0,
       x: 0,
       y: 0,
   },
};


const mutations = {

};

const actions = {
    countPlayTime(context, data) {
        setInterval(() => {
            if (data.playTime > 0) {
                data.playTime--;
            } else {
                data.play = true;
            }
        }, 1000);
    },
    // updateCoordinates(event) {
    //     this.playData.x = event.clientX;  //yatay 1850
    //     this.playData.y = event.clientY;  //dikey  800
    // },
    createCoordinate() {
        this.playData.balonCoordinateX = Math.floor(Math.random() * 1700);
        this.playData.balonCoordinateY = Math.floor(Math.random() * 750);
    },
};


export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
