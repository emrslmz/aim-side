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
       },
       nowStart: {
           playingTime: 120,  //2minutes
       },
       point: 0,
       click: 0,
   },
};


const mutations = {

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

};


export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
