<template>
  <div>
    <div class="d-flex flex-column justify-content-center align-items-center top-bar-frame-center px-4">
      <h6>Puan: {{ playData.point }}</h6>
      <h6><small>Kill: {{ playData.click }}</small></h6>
      <small><i class="far fa-clock"></i> <i>{{ playData.nowStart.playingTime }}</i></small>
    </div>

    <div class="d-flex justify-content-end align-items-center top-bar-frame-right px-4">



      <div class="d-flex align-items-center header-button mb-2">
        <div class="dropdown mx-2 my-2">
          <small id="gunChange" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-ghost"></i>
          </small>
          <div class="dropdown-menu dropdown-menu-right text-left" aria-labelledby="profileDropdown">

            <small v-for="(gun, index) in gunSounds" :key="index" @click="selectGun(gun)">
              <span class="dropdown-item btn btn-sm">
                {{ gun.name}}
               <img class="gun-picture" :src="'/assets/images/img/gun/' + gun.gunPic" @click="selectGun(gun)" :alt="gun.name" :title="gun.name" />
                </span>
            </small>

          </div>
        </div>
      </div>

      <div class="d-flex align-items-center header-button mb-2">
        <div class="dropdown mx-2 my-2">
          <small id="crossairChange" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-crosshairs"></i>
          </small>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="profileDropdown">

            <small>
              <span class="dropdown-item btn btn-sm"><i class="fas fa-crosshairs"></i> Green Big cross</span>
            </small>

          </div>
        </div>
      </div>

      <div class="d-flex align-items-center header-button mb-2">
        <div class="dropdown mx-2 my-2">
          <small id="backgroundChange" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="far fa-image"></i>
          </small>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="profileDropdown">

            <small>
              <span class="dropdown-item btn btn-sm"><i class="fas fa-crosshairs"></i> Ascent 1</span>
            </small>


          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'TopBar',
  computed: {
    ...mapState('Play', ['playData']),
    ...mapState('GunSound', ['gunSounds']),
  },
  methods: {
    ...mapActions('GunSound', ['selectGun']),
  },
};
</script>

<style scoped>
.top-bar-frame-center {
  background-color: #191919;
  width: 200px;
  height: 75px;
  border-radius: 0 0 50px 50px;
  position: absolute;
  left: 45%;
  cursor: default;
  color: white;
}

.top-bar-frame-right {
  background-color: #191919;
  min-width: 100px;
  height: 40px;
  border-radius: 0 0 0 50px;
  position: absolute;
  right: 0;
  cursor: default;
  color: white;
}

.gun-picture {
  width: auto;
  height: 20px;
}

.header-button {
  color: white;
  border-radius: 10px;
  transition: 0.4s;
  cursor: pointer;
  opacity: 0.5;
}

.header-button:hover {
  transition: 0.4s;
  opacity: 1;
}

.header-button span {
  background-color: white;
  color: #343A40;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
  min-width: 100px;
  text-decoration: none;
}

.header-button a {
  text-decoration: none;
}

.header-button span:hover {
  background-color: #d42053;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
  text-decoration: none;
}
</style>
