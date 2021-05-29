<template>
 <div class="game-frame text-white" @mousemove="updateCoordinates">
   <div align="right">
     <top-bar />
   </div>
    <div class="d-flex flex-column justify-content-center align-items-center">
<!--     <h1 v-if="playTime > 0"> {{ playTime }}</h1>-->
<!--      <h5>{{ play }}</h5>-->

      <h5>Puan: {{ point }}</h5>
      <div
          class="ballon"
          :style="{ left: [this.balonCoordinateX + 'px'], top: [this.balonCoordinateY + 'px']}"
          @click="clickBall()"
      ></div>
      <p>Coordinates: {{ x }} / {{ y }}</p>
      <p>Balon coordinate: {{ balonCoordinateX }} / {{ balonCoordinateY }}</p>


      <div class="gezgin"></div>


    </div>

 </div>
</template>

<script>
export default {
  name: 'Game',
  components: {
    TopBar: () => import('@/modules/main/play/components/layouts/TopBar.vue'),
  },
  data() {
    return {
      playTime: 3,
      play: false,
      x: 0,
      y: 0,
      balonCoordinateX: 0,
      balonCoordinateY: 0,
      point: 0,
    };
  },
  methods: {
    countPlayTime() {
       setInterval(() => {
         if (this.playTime > 0) {
           this.playTime--;
         } else {
           this.play = true;
         }
       }, 1000);
    },
    updateCoordinates(event) {
      this.x = event.clientX;  //yatay 1850
      this.y = event.clientY;  //dikey  800
    },
    createCoordinate() {
      this.balonCoordinateX = Math.floor(Math.random() * 1850);
      this.balonCoordinateY = Math.floor(Math.random() * 800);
    },
    clickBall() {
      const randomPoint = Math.floor(Math.random() * 10);
      console.log(randomPoint);
      this.point += randomPoint;
      this.createCoordinate();
    }
  },
  created() {
      this.countPlayTime();
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

</style>
