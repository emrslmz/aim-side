<template>
  <div>
    <div class="modal-card d-flex flex-column justify-content-center align-items-center">
     <div>
       <h4 class="congratulations-text valorant-font">Congratulations !</h4>
     </div>

      <div class="text-dark">
        <h6 class="score-text">YOUR SCORE!
          <span class="valorant-font">{{ playData.gameData.point}}</span>

          <span style="font-size: 12px; writing-mode: tb-rl;">
            <small class="c-bad" v-if="playData.gameData.point <= 50">Bad</small>
            <small class="c-so-so" v-if="playData.gameData.point > 50 && playData.gameData.point <= 85">Meh</small>
            <small class="c-success" v-else-if="playData.gameData.point > 85">SUPER</small>
          </span>

        </h6>
        <div class="d-flex justify-content-around align-items-center">
          <b>Kill: <span class="valorant-font">{{ playData.gameData.kill }}</span></b>
          <b>Miss: <span class="valorant-font">{{ playData.gameData.click - playData.gameData.kill }}</span></b>
        </div>
      </div>

      <div class="d-flex justify-content-around align-items-center text-dark">
        <div>
            <button class="btn custom-button custom-button-green mx-2" @click="reloadPage"><i class="fas fa-play"></i> PLAY</button>
        </div>
        <div>
          <router-link to="/">
            <button class="btn custom-button custom-button-blue mx-2"><i class="fas fa-play"></i> Home</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('Play', ['playData']),
  },
  methods: {
    reloadPage() {
      location.reload();
    }
  },
  created() {
    this.$confetti.start();
  }
}
</script>

<style scoped>
.modal-card {
  background-color: white;
  width: 600px;
  height: 300px;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;

  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;
}

.congratulations-text {
  font-weight: bold;
  font-size: 36px;
  color: green;
  text-shadow: 0 1px #808d93, -1px 0 #cdd2d5, -1px 2px #808d93, -2px 1px #cdd2d5, -2px 3px #808d93, -3px 2px #cdd2d5, -3px 4px #808d93, -4px 3px #cdd2d5, -4px 5px #808d93, -5px 4px #cdd2d5, -5px 6px #808d93, -6px 5px #cdd2d5, -6px 7px #808d93, -7px 6px #cdd2d5, -7px 8px #808d93, -8px 7px #cdd2d5;

  animation: shake 0.5s;
  /* When the animation is finished, start again */
  animation-iteration-count: infinite;
  transition: 0.5s;
}

.c-success {
  color: #358d0d;
}

.c-so-so {
  color: orange;
}

.c-bad {
  color: #ff4040;
}


@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  20% { transform: translate(-1px, 0px) rotate(1deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  60% { transform: translate(-1px, 1px) rotate(0deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
}

.score-text {
  font-size: 32px;
}


.custom-button{
  font-weight: bold;
  background-color: lightgray;
  width: 200px;
  height: 50px;
  text-shadow: -1px -1px black, 1px 1px white;
  color: gray;
  font-size: 20px;
  border-radius: 7px;
  box-shadow: 0 .2em gray;
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;

}
.custom-button:active {
  box-shadow: none;
  position: relative;
  top: .2em;
}

.custom-button:hover {
  box-shadow: none;
  position: relative;
  top: .2em;
}

.custom-button-green:hover {
  box-shadow: none;
  position: relative;
  top: .2em;
  color: #28A745;
}

.custom-button-blue:hover {
  box-shadow: none;
  position: relative;
  top: .2em;
  color: #007BFF;
}

</style>

