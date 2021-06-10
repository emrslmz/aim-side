<template>
  <div>
   <div class="select-gun-frame text-center">
     <h4 class="pt-2">Choose your weapon and start</h4>
     <div class="d-flex justify-content-center">
       <div class="custom-hr"></div>
     </div>
     <div class="d-flex justify-content-center align-items-center row">
       <div class="d-sm-flex flex-column justify-content-center align-items-between text-dark"  v-for="(gun, index) in gunSounds" :key="index">
         <img class="gun-picture" :src="'/assets/images/img/gun/' + gun.gunPic" @click="ready(gun)" :alt="gun.name" :title="gun.name" />
         <small>{{ gun.name }}</small>
       </div>
     </div>
     <small>You can change your weapon from the top right.</small>
   </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('Sounds', ['gunSounds']),
    ...mapState('Play', ['playData']),
  },
  methods: {
    ...mapActions('Sounds', ['selectGun']),
    ...mapActions('Play', ['beforeStartTimer', 'nowStartTimer']),
    ready(gun) {
      this.playData.beforeStart.startStatus = true;
      this.selectGun(gun);
      this.beforeStartTimer(this.playData);
      this.nowStartTimer(this.playData);
    }
  },
};
</script>

<style scoped>
.select-gun-frame {
  margin: 50px 30px 0 30px;
  max-width: 800px;
  min-height: 300px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 15px;
  background-image: radial-gradient(73% 147%, #EADFDF 59%, #ECE2DF 100%), radial-gradient(91% 146%, rgba(255,255,255,0.50) 47%, rgba(0,0,0,0.50) 100%);
  background-blend-mode: screen;
  color: #191919;
}

.select-gun-frame small {
  font-weight: bold;
  font-size: 12px;
}

.custom-hr {
  padding: 5px 0 5px 0;
  max-width: 120px;
  opacity: 0.3;
  border-top: 1px solid #191919;
  border-right: none;
  border-left: none;
  border-bottom: none;
}

.gun-picture {
  margin: 10px;
  cursor: pointer;
  width: auto;
  height: 50px;
  opacity: 0.7;
  transition: 0.5s;
}

@media screen and (max-width: 770px) {
  .gun-picture {
    height: 30px;
  }
}

.gun-picture:hover {
  opacity: 1;
  transition: 0.3s;
  height: 55px;
}



</style>
