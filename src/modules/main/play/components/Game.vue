<template>
 <div>
   <div >
     <top-bar />
   </div>

   <div
        class="d-flex flex-column justify-content-center game-frame align-items-center text-white"
        @click="clickCounter"
        :style="[selectedBackground.mode === 1 ? { 'background-image': 'url(/assets/images/img/backgrounds/' + selectedBackground.style } :  { 'background-image' : selectedBackground.style.substring(17)} , selectedSight.mode === 2 ? { 'cursor' : 'url(/assets/images/img/crossairs/'+ selectedSight.folderName + '), auto'} : 'cursor: pointer;']">

      <div v-if="playData.beforeStart.startStatus === false">
        <transition name="bounce">
          <select-gun />
        </transition>
      </div>

      <div v-else>
        <div class="text-center" v-if="playData.nowStart.playing === false">
          <h1 v-if="playData.beforeStart.time > -1"><i>{{ playData.beforeStart.time }}</i></h1>
          <div>
            <h5 class="starting-text" v-if="playData.beforeStart.time > 0">Will start soon!</h5>
            <h5 class="good-luck-text" v-else>Good Luck!</h5>
          </div>
        </div>



        <div v-else>
          <div v-for="(item, index) in playData.selectedDifficulty.items" :key="index">
            <div
                class="itemStyle"
                :style="[{ left: [item.coordinateX + 'px'], top: [item.coordinateY + 'px']}, { width: [item.itemWidth + 'px']}, { height: [item.itemHeight + 'px' ]}, { 'background-image' : [item.itemColor] }]"
                @click="clickItem(item.itemId)"
            ></div>
          </div>
        </div>
      </div>

      <!-- Modal -->
     <transition name="bounce">
        <finish-modal v-if="playData.finishGame.finished === true" />
     </transition>
      <!-- /Modal -->

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
    FinishModal: () => import('@/modules/main/play/components/FinishModal.vue'),
  },
  computed: {
    ...mapState('Play', ['playData']),
    ...mapState('Sounds', ['selectedGun', 'gunSoundMute']),
    ...mapState('Background', ['selectedBackground']),
    ...mapState('Sight', ['selectedSight']),
  },
  methods: {
    ...mapActions('Play', ['beforeStartTimer', 'nowStartTimer', 'changeItemPosition']),
    ...mapActions('Shot', ['selectSpray']),
    ...mapActions('Sounds', ['playSound']),
    ...mapActions('Background', ['selectBackground']),
    ...mapActions('Sight', ['selectSight']),

    clickItem(itemId) {
      const randomPoint = Math.floor(Math.random() * 10);
      this.playData.gameData.point += randomPoint;
      this.playData.gameData.kill += 1;

      this.playSound({kill: this.playData.gameData.kill, gunData: this.selectedGun});

      this.changeItemPosition(itemId);
    },
    clickCounter() {
      if (this.playData.nowStart.playing === true && this.playData.finishGame.finished === false) {
        this.playData.gameData.click++;
      }
    }
  },
  created() {
      if (localStorage.getItem("backgroundDataId") === null) {
        localStorage.setItem("backgroundDataId", '14');
      }

      if (localStorage.getItem("sightId") === null) {
        localStorage.setItem("sightId", '0');
      }

      const backgroundDataId = parseInt(localStorage.getItem("backgroundDataId"));
      const sightId = parseInt(localStorage.getItem("sightId"));
      this.selectBackground(backgroundDataId);
      this.selectSight(sightId);


      this.playData.screenSize.screenX = screen.width;
      this.playData.screenSize.screenY = screen.height;

      console.log(this.playData.screenSize);
  },
};

</script>

<style scoped>
.game-frame {
  min-height: 93vh;
  width: 100%;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
}

.itemStyle {
  position: absolute;
  border-radius: 100px;
}

.itemStyle:hover {
  border: 1px solid red;
}

.starting-text {
  display: block;
  font-size: 40px;
  color: #f1ebe5;
  text-shadow: 1px 1px 10px rgb(21, 31, 81);
}

.good-luck-text {
  display: block;
  font-size: 40px;
  color: #f1ebe5;
  text-shadow: 1px 1px 10px rgb(243, 8, 98);
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

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}


</style>
