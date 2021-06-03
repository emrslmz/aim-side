<template>
  <div>
    <div class="d-flex flex-column justify-content-center align-items-center top-bar-frame-center px-4">
      <h6>Puan: {{ playData.gameData.point }}</h6>
      <h6><small><span style="font-size: 12px;">Kill/Bullet:</span> {{ playData.gameData.kill }}/ <span class="text-info">{{ playData.gameData.click }}</span></small></h6>
      <h6>
        <span style="font-size: 12px; color: #ff4040">Miss: {{ playData.gameData.click - playData.gameData.kill }} </span>
        <small><i class="far fa-clock pl-2"></i><i> {{ playData.nowStart.playingTime }}</i></small>
      </h6>

    </div>

    <div class="d-flex justify-content-end align-items-center top-bar-frame-right px-4">

      <!--SETTINGS-->
      <div class="dropdown-button">
        <small class="dropdown-button-icon" id="settings" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-cog"></i>
        </small>
        <div class="dropdown-menu dropdown-menu-right text-left" aria-labelledby="profileDropdown">


            <span class="dropdown-item btn btn-sm" @click="changeVolumeKillSound()">
              <span v-if="killSoundMute === false"><i class="fas fa-volume-mute"></i> <b>Mute</b> Gun Sound</span>
              <span v-else><i class="fas fa-volume-up text-danger"></i> <b class="text-danger">Muted</b> Kill Sound</span>
            </span>

            <span class="dropdown-item btn btn-sm" @click="changeVolumeGunSound()">
              <span v-if="gunSoundMute === false"><i class="fas fa-volume-mute"></i> <b>Mute</b> Kill Sound</span>
              <span v-else><i class="fas fa-volume-up text-danger"></i> <b class="text-danger">Muted</b> Gun Sound</span>
            </span>

        </div>
      </div>
      <!--CHANGE GUN-->
      <div class="dropdown-button">
        <small class="dropdown-button-icon" id="gunChange" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-ghost"></i>
        </small>
        <div class="dropdown-menu dropdown-menu-right text-left" aria-labelledby="profileDropdown">

          <small v-for="(gun, index) in gunSounds" :key="index" @click="selectGun(gun)">
            <span class="dropdown-item btn btn-sm">
              {{ gun.name}}
             <img class="custom-picture" :src="'/assets/images/img/gun/' + gun.gunPic" @click="selectGun(gun)" :alt="gun.name" :title="gun.name" />
              </span>
          </small>

        </div>
      </div>
      <!--CROSSAIR-->
      <div class="dropdown-button">
        <small class="dropdown-button-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-crosshairs"></i>
        </small>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="profileDropdown">

          <small v-for="(cross, index) in crossairs" :key="index">
              <span class="dropdown-item" v-if="cross.mode === 2" @click="selectCrossair(cross.id)">
                    {{ cross.name }}
                   <img class="custom-picture" :src="'/assets/images/img/crossairs/' + cross.folderName" :alt="cross.name" :title="cross.name"  />
              </span>

            <span class="dropdown-item" :style="{'background-image' : cross.style}" @click="selectCrossair(cross.id)" v-else>
                  {{ cross.name }} <i class="fas fa-mouse-pointer"></i>
              </span>
          </small>

        </div>
      </div>
      <!--BACKGROUNDS-->
      <div class="dropdown-button">
          <small class="dropdown-button-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="far fa-image"></i>
          </small>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="profileDropdown">

            <small v-for="(img, index) in backgrounds" :key="index">
              <span class="dropdown-item" v-if="img.mode === 1" @click="selectBackground(img.id)">
                    {{ img.name }}
                   <img class="custom-picture" :src="'/assets/images/img/backgrounds/' + img.style" :alt="img.name" :title="img.name"  />
              </span>

              <span class="dropdown-item" :style="img.style" @click="selectBackground(img.id)" v-else>
                  {{ img.name }}
              </span>
            </small>

          </div>
      </div>

    </div>

    <div class="d-flex justify-content-end align-items-center top-bar-frame-right-difficulty">
      <!--ITEM SIZE-->
      <div class="dropdown-button">
        <small class="dropdown-button-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-compress-alt"></i>
        </small>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="profileDropdown">

          <small>
            <span class="dropdown-item" v-for="(size, index) in playData.itemSize" :key="index">
              {{ size.name }}
            </span>
          </small>

        </div>
      </div>
      <!--DIFFICULTY-->

      <div class="dropdown-button">
        <small class="dropdown-button-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-circle"></i>
        </small>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="profileDropdown">

          <small>
            <span class="dropdown-item" v-for="(difficulty, index) in playData.difficulty" :key="index" @click="postDifficulty(difficulty.type)">
              {{ difficulty.name }} <i :class="difficulty.icon"></i>
            </span>
          </small>

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
    ...mapState('Sounds', ['gunSounds', 'gunSoundMute', 'killSoundMute']),
    ...mapState('Background', ['backgrounds']),
    ...mapState('CrossAir', ['crossairs']),
  },
  methods: {
    ...mapActions('Sounds', ['selectGun', 'changeVolumeKillSound', 'changeVolumeGunSound']),
    ...mapActions('Background', ['selectBackground']),
    ...mapActions('CrossAir', ['selectCrossair']),
    ...mapActions('Play', ['selectDifficulty', 'addCoordinate']),
    postDifficulty(difficultyType) {
      this.selectDifficulty(difficultyType);
      this.addCoordinate(difficultyType);
    }
  },
  created() {
    this.selectDifficulty(4);
    this.addCoordinate(4);
  },
};
</script>

<style scoped>
.top-bar-frame-center {
  background-color: #191919;
  width: 300px;
  min-height: 85px;
  border-radius: 0 0 50px 50px;
  position: absolute;
  left: 42%;
  cursor: default;
  color: white;
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;
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
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;
}

.top-bar-frame-right-difficulty {
  background-color: #191919;
  min-width: 100px;
  height: 40px;
  border-radius: 0 0 0 50px;
  position: absolute;
  right: 0;
  margin-top: 40px;
  cursor: default;
  color: white;
}

.custom-picture {
  width: 20px;
  height: auto;
}

.dropdown-button {
  margin: 0 5px 0 5px;
  cursor: pointer;
  color: white;
  opacity: 0.5;
  transition: 0.4s;
  z-index: +1;
}
.dropdown-button:hover {
  opacity: 1;
  transition: 0.4s;
}

.dropdown-item {
  font-weight: bold;
}

.dropdown-item:hover {
  background-color: #e9e9e9;
}

.color-blue {
  color: blue;
}
.color-pruple {
  color: purple;
}
.color-red {
  color: red;
}
.color-orange {
  color: orange;
}
.color-yellow {
  color: yellow;
}
.color-green {
  color: green;
}
.color-lightgreen {
  color: #28ffa7;
}
</style>
