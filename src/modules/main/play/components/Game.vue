<template>
 <div>
   <div >
     <top-bar />
   </div>
    <div
        class="d-flex flex-column justify-content-center game-frame align-items-center text-white"
        @mousemove="updateCoordinates"
        @click="clickCounter"
        :style="[selectedBackground.mode === 1 ? { 'background-image': 'url(/assets/images/img/backgrounds/' + selectedBackground.style } :  { 'background-image' : selectedBackground.style} , selectedCrossair.mode === 2 ? { 'cursor' : 'url(/assets/images/img/crossairs/'+ selectedCrossair.folderName + '), auto'} : 'cursor: pointer;']"
    >

      <div v-if="playData.beforeStart.startStatus === false">
        <select-gun />
      </div>

      <div v-else>

        <div class="text-center" v-if="playData.playing === false">
          <h1 v-if="playData.beforeStart.time > -1"> {{ playData.beforeStart.time }}</h1>
          <div>
            <h5 class="starting-text" v-if="playData.beforeStart.time > 0">Will start soon!</h5>
            <h5 class="good-luck-text" v-else>Good Luck!</h5>
          </div>
        </div>



        <div v-else>
          <div
              class="ballon1"
              :style="{ left: [playData.coordinates.firstCoordinateX + 'px'], top: [playData.coordinates.firstCoordinateY + 'px']}"
              @click="clickItem(1)"
          ></div>
          <div v-if="playData.selectedDifficulty.type === 2"
              class="ballon1"
              :style="{ left: [playData.coordinates.secondCoordinateX + 'px'], top: [playData.coordinates.secondCoordinateY + 'px']}"
              @click="clickItem(2)"
          ></div>
        </div>
      </div>


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
    SelectGun: () => import('@/modules/main/play/components/SelectGun.vue'),
    TopBar: () => import('@/modules/main/play/components/layouts/TopBar.vue'),
    DeadBar: () => import('@/modules/main/play/components/layouts/DeadBar.vue'),
  },
  computed: {
    ...mapState('Play', ['playData']),
    ...mapState('Sounds', ['selectedGun', 'gunSoundMute']),
    ...mapState('Background', ['selectedBackground']),
    ...mapState('CrossAir', ['selectedCrossair']),
  },
  methods: {
    ...mapActions('Play', ['beforeStartTimer', 'firstTimeCreateCoordinate', 'nowStartTimer', 'selectDifficulty', 'createCustomCoordinate']),
    ...mapActions('Shot', ['selectSpray']),
    ...mapActions('Sounds', ['playSound']),
    ...mapActions('Background', ['selectBackground']),
    ...mapActions('CrossAir', ['selectCrossair']),

    updateCoordinates(event) {
      this.playData.target.x = event.clientX;  //yatay 1850
      this.playData.target.y = event.clientY;  //dikey  800
    },
    clickItem(itemId) {
      const randomPoint = Math.floor(Math.random() * 10);
      this.playData.point += randomPoint;
      this.playData.kill += 1;
      this.createCustomCoordinate(itemId);
      this.selectSpray();
      this.playSound({kill: this.playData.kill, gunData: this.selectedGun});
    },
    clickCounter() {
      if (this.playData.playing === true) {
        this.playData.click++;
      }
    }
  },
  created() {
      const number = parseInt(localStorage.getItem("backgroundDataId"));
      this.selectBackground(number);
      this.selectCrossair(0);
      this.selectDifficulty(1);

      if (!localStorage.getItem("backgroundDataId")) {
        localStorage.setItem("backgroundDataId", '5');
      }

  },
};

</script>

<style scoped>
.game-frame {
  min-height: 90vh;
  width: 100%;
  background-position: center;
  /*background-attachment: fixed;*/
  background-repeat: no-repeat;
}

.ballon1 {
  position: absolute;
  /*background-image: linear-gradient(to top, #f77062 0%, #fe5196 100%);*/
  background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);
  border-radius: 100px;
  width: 100px;
  height: 100px;
}

.ballon2 {
  position: absolute;
  /*background-image: linear-gradient(to top, #f77062 0%, #fe5196 100%);*/
  background-image: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);
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

.ready-button {
  min-width: 600px;
  min-height: 200px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 15px;
  background-image: radial-gradient(73% 147%, #EADFDF 59%, #ECE2DF 100%), radial-gradient(91% 146%, rgba(255,255,255,0.50) 47%, rgba(0,0,0,0.50) 100%);
  background-blend-mode: screen;
}

.ready-button h6 {
  font-size: 12px;
  padding: 0 5px 0 5px;
}






.btn {
  /* Clean style */
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: none;
  background: none;
  color: #ff4655;
  cursor: pointer;
  min-width: 300px;
  /* Clean style */

  --button-text-color: var(--background-color);
  --button-text-color-hover: var(--button-background-color);
  --border-color: #7D8082;
  --button-background-color: #ece8e1;
  --highlight-color: #ff4655;
  --button-inner-border-color: transparent;
  --button-bits-color: var(--background-color);
  --button-bits-color-hover: var(--button-background-color);

  position: relative;
  padding: 8px;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  transition: all .15s ease;
}

.btn::before,
.btn::after {
  content: '';
  display: block;
  position: absolute;
  right: 0; left: 0;
  height: calc(50% - 5px);
  border: 1px solid var(--border-color);
  transition: all .15s ease;
}

.btn::before {
  top: 0;
  border-bottom-width: 0;
}

.btn::after {
  bottom: 0;
  border-top-width: 0;
}

.btn:active,
.btn:focus {
  outline: none;
}

.btn:active::before,
.btn:active::after {
  right: 3px;
  left: 3px;
}

.btn:active::before {
  top: 3px;
}

.btn:active::after {
  bottom: 3px;
}

.valorant-button-inner {
  position: relative;
  display: block;
  padding: 20px 30px;
  background-color: var(--button-background-color);
  overflow: hidden;
  box-shadow: inset 0px 0px 0px 1px var(--button-inner-border-color);
}

.valorant-button-inner::before {
  content: '';
  display: block;
  position: absolute;
  top: 0; left: 0;
  width: 2px;
  height: 2px;
  background-color: var(--button-bits-color);
}

.valorant-button-inner::after {
  content: '';
  display: block;
  position: absolute;
  right: 0; bottom: 0;
  width: 4px;
  height: 4px;
  background-color: var(--button-bits-color);
  transition: all .2s ease;
}

.valorant-button-slide {
  display: block;
  position: absolute;
  top: 0; bottom: -1px; left: -8px;
  width: 0;
  background-color: var(--highlight-color);
  transform: skew(-15deg);
  transition: all .2s ease;
}

.valorant-button-content {
  position: relative;
}

.btn:hover {
  color: var(--button-text-color-hover);
}

.btn:hover .valorant-button-slide {
  width: calc(100% + 15px);
}

.btn:hover .valorant-button-inner::after {
  background-color: var(--button-bits-color-hover);
}

.valorant-button-light {
  --button-background-color: var(--background-color);
  --button-text-color: var(--highlight-color);
  --button-inner-border-color: var(--highlight-color);
  --button-text-color-hover: #ece8e1;
  --button-bits-color-hover: #ece8e1;
}
</style>
