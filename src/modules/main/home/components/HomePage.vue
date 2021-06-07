<template>
  <div>
    <div class="d-md-flex  justify-content-center align-items-center home-page-top">
      <div class="d-md-flex flex-row">
        <div class="col-md-8 col-12 text-md-left text-center">
          <h1 class="valorant-font"><small><i class="fas fa-crosshairs aim-side-logo"></i></small> Aim Side</h1>
          <h6 class="text-spacing5">Improve your Aim</h6>
        </div>


        <div class="col-md-4 col-12 text-md-right text-center">
          <router-link to="play">
            <button class="btn game-button"><i class="fas fa-play"></i> PLAY</button>
          </router-link>
        </div>
      </div>

    </div>

    <div class="d-sm-flex flex-column  text-center pt-5">
      <div class="col-sm-12 d-sm-flex justify-content-around align-items-center px-sm-5">

        <div class="development flex-column">
          <h1><i class="fas fa-sort-amount-up"></i></h1>
          <small>Improve every day</small>
        </div>
        <div class="development flex-column">
          <h1><i class="far fa-eye"></i></h1>
          <small>Improve your reflex</small>
        </div>
        <div class="development flex-column">
          <h1><i class="fas fa-grip-horizontal"></i></h1>
          <small>10+ different weapon mods</small>
        </div>
        <div class="development flex-column px-2">
          <h1>
            <i class="fab fa-chrome" v-if="browserData === 1"></i>
            <i class="fab fa-safari" v-else-if="browserData === 2"></i>
            <i class="fab fa-opera" v-else-if="browserData === 3"></i>
            <i class="fab fa-firefox" v-else-if="browserData === 4"></i>
            <i class="fab fa-edge" v-else-if="browserData === 5"></i>
            <i class="fas fa-mobile" v-else-if="browserData === 6"></i>
            <i class="fas fa-tablet" v-else-if="browserData === 7"></i>
          </h1>
          <small class="mx-1"  v-if="browserData === 6 || browserData === 7"> Play in different devices!</small>
          <small v-else>Play in different browsers!</small>
        </div>
        <div class="development flex-column">
          <h1><i class="fas fa-file-import"></i></h1>
          <small>Without downloading!</small>
        </div>
        <div class="development flex-column">
          <h1><i class="fas fa-crosshairs aim-side-logo"></i></h1>
          <small>Select the crosshairs!</small>
        </div>
        <div class="development flex-column">
          <h1><i class="far fa-map"></i></h1>
          <small>Play on different maps!</small>
        </div>
        <div class="development flex-column">
          <h1><i class="fas fa-hourglass-start"></i></h1>
          <small>Against time</small>
        </div>

      </div>
      <small class="text-center py-5 mt-5"><router-link to="conditions">Terms and conditions apply.*</router-link></small>

    </div>

  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      browserData: 1,
    };
  },
  created() {
    setInterval(() => {
      if (this.browserData === 1) {
        this.browserData = 2;
      } else if (this.browserData === 2) {
        this.browserData = 3;
      } else if (this.browserData === 3) {
        this.browserData = 4;
      } else if (this.browserData === 4) {
        this.browserData = 5;
      } else if (this.browserData === 5) {
        this.browserData = 6;
      } else if (this.browserData === 6) {  //6 = phone 7 = tablet
        this.browserData = 7;
      } else if (this.browserData === 7) {
        this.browserData = 1;
      }
    }, 1500);
  }
};
</script>

<style scoped>
.home-page-top {
  padding-top: 300px;
}

.text-spacing5 {
  letter-spacing: 5px;
}

.home-page-box {
  width: 500px;
  min-height:700px;
  box-shadow: 0 0 10px 2px #cecece;
  border-radius: 15px;
  background-color: white;
  background-blend-mode: screen;
  color: #191919;
}

.home-left i {
  font-size: 60px;
    transition: 0.5s;
}

.home-left i:hover {
  transition: 0.5s;
  transform: skewY(-2deg);
  color: #ff4040;
  cursor: pointer;
}


.development {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: 0.9s;
}

.development small {
  font-weight: bold;
}

.aim-side-logo {
  transition: 0.5s;
}

.aim-side-logo:hover {
  transition: 0.5s;
  transform: skewY(-2deg);
  color: #ff4040;

}

.game-button{
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
.game-button:active {
  box-shadow: none;
  position: relative;
  top: .2em;
}

.game-button:hover {
  box-shadow: none;
  position: relative;
  top: .2em;
  color: #ff4040;
}











</style>
