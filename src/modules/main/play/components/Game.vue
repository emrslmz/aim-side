<template>
 <div>
   <div >
     <top-bar />
   </div>
    <div class="d-flex flex-column justify-content-center game-frame align-items-center text-white" @mousemove="updateCoordinates">

      <div class="text-center" v-if="playData.play === false">
        <h1 v-if="playData.playTime > -1"> {{ playData.playTime }}</h1>
       <div>
         <h5 class="starting-text" v-if="playData.playTime > 0">Will start soon!</h5>
         <h5 class="good-luck-text" v-else>Good Luck!</h5>
       </div>
      </div>



      <div
          class="ballon"
          :style="{ left: [playData.balonCoordinateX + 'px'], top: [playData.balonCoordinateY + 'px']}"
          @click="clickBall()"
          v-else
      ></div>
<!--      <p>Coordinates: {{ playData.x }} / {{ playData.y }}</p>-->
<!--      <p>Balon coordinate: {{ playData.balonCoordinateX }} / {{ playData.balonCoordinateY }}</p>-->

    </div>
   <div class="d-flex justify-content-center">
    <dead-bar />
   </div>

 </div>
</template>

<script>
import { mapState,mapActions } from 'vuex';

export default {
  name: 'Game',
  components: {
    TopBar: () => import('@/modules/main/play/components/layouts/TopBar.vue'),
    DeadBar: () => import('@/modules/main/play/components/layouts/DeadBar.vue'),
  },
  computed: {
    ...mapState('Play', ['playData']),
  },
  methods: {
    ...mapActions('Play', ['countPlayTime']),


    clickBall() {
      const randomPoint = Math.floor(Math.random() * 10);
      console.log(randomPoint);
      this.playData.point += randomPoint;
      this.createCoordinate();
    }
  },
  created() {
      this.countPlayTime(this.playData);
      this.createCoordinate();
  },
};



</script>

<style scoped>
.game-frame {
  min-height: 90vh;
  width: 100%;
  cursor: url('/assets/images/img/small_red_cross.png'), auto;
  background-image: url('/assets/images/img/backgrounds/split_2.jpg');
  background-size: 100%;
  background-repeat: no-repeat;
}

.ballon {
  position: absolute;
  /*background-image: linear-gradient(to top, #f77062 0%, #fe5196 100%);*/
  background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);
  border-radius: 100px;
  width: 100px;
  height: 100px;
}


.starting-text {
  display: block;
  font-size: 40px;
  color: #f1ebe5;
  text-shadow: 10px 10px 25px rgb(81,67,21),
  -10px 10px 25px rgb(81,67,21),
  -10px -10px 25px rgb(81,67,21),
  10px -10px 25px rgb(81,67,21);
}

.good-luck-text {
  display: block;
  font-size: 40px;
  color: #f1ebe5;
  text-shadow: 10px 10px 25px rgb(243, 8, 98),
  -10px 10px 25px rgb(81, 21, 65),
  -10px -10px 25px rgb(81, 21, 36),
  10px -10px 25px rgb(81, 21, 31);
}

</style>
