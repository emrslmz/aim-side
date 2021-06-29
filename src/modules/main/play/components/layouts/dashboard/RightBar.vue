<template>
  <div>
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
            <span class="dropdown-item btn btn-sm" :class="selectedGun.id === gun.id ? 'dropdown-button-active' : ''">
              {{ gun.name}}
             <img class="custom-picture" :src="'/assets/images/img/gun/' + gun.gunPic" @click="selectGun(gun)" :alt="gun.name" :title="gun.name" />
              </span>
          </small>

        </div>
      </div>
      <!--CROSSHAIR-->
      <div class="dropdown-button">
        <small class="dropdown-button-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-crosshairs"></i>
        </small>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="profileDropdown">

          <small v-for="(sight, index) in sights" :key="index">
              <span class="dropdown-item" v-if="sight.mode === 2" @click="selectSight(sight.id)" :class="selectedSight.id === sight.id ? 'dropdown-button-active' : ''">
                    {{ sight.name }}
                   <img class="custom-picture" :src="'/assets/images/img/crossairs/' + sight.folderName" :alt="sight.name" :title="sight.name"  />
              </span>

            <span class="dropdown-item" :style="{'background-image' : sight.style}" @click="selectSight(sight.id)" :class="selectedSight.id === sight.id ? 'dropdown-button-active' : ''" v-else>
                  {{ sight.name }} <i class="fas fa-mouse-pointer"></i>
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
              <span class="dropdown-item" v-if="img.mode === 1" @click="selectBackground(img.id)" :class="selectedBackground.id === img.id ? 'dropdown-button-active' : ''">
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
      <!--ITEM COLOR-->
      <div class="dropdown-button">
        <small class="dropdown-button-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-palette"></i>
        </small>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="profileDropdown">

          <small>
            <span class="dropdown-item" v-for="(color, index) in playData.itemColors" :key="index"  :class="playData.selectedItemColor.id === color.id ? 'dropdown-button-active' : ''" @click="selectItemColor(color.id)">
             {{ color.name }} <i :style="color.style" class="fas fa-fill-drip"></i>
            </span>
          </small>

        </div>
      </div>
      <!--ITEM SIZE-->
      <div class="dropdown-button">
        <small class="dropdown-button-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-compress-alt"></i>
        </small>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="profileDropdown">

          <small>
            <span class="dropdown-item" v-for="(size, index) in playData.itemSizes" :key="index"  :class="playData.selectedItemSize.type === size.type ? 'dropdown-button-active' : ''" @click="selectItemSize(size.type)">
              {{ size.name }}
            </span>
          </small>

        </div>
      </div>
      <!--DIFFICULTY-->
      <div class="dropdown-button">
        <small class="dropdown-button-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-hat-wizard"></i>
        </small>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="profileDropdown">

          <small>
            <span class="dropdown-item" v-for="(difficulty, index) in playData.difficulty" :key="index"  :class="playData.selectedDifficulty.id === difficulty.id ? 'dropdown-button-active' : ''" @click="postDifficulty(difficulty.id)">
              {{ difficulty.name }}
              <!--              <i :class="difficulty.icon"></i>-->
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
  name: 'RightBar',
  computed: {
    ...mapState('Play', ['playData']),
    ...mapState('Sounds', ['gunSounds', 'gunSoundMute', 'killSoundMute', 'selectedGun']),
    ...mapState('Background', ['backgrounds', 'selectedBackground']),
    ...mapState('Sight', ['sights', 'selectedSight']),
  },
  methods: {
    ...mapActions('Play', ['selectDifficulty', 'selectItemSize', 'selectItemColor']),
    ...mapActions('Sounds', ['selectGun', 'changeVolumeKillSound', 'changeVolumeGunSound']),
    ...mapActions('Background', ['selectBackground']),
    ...mapActions('Sight', ['selectSight']),
    postDifficulty(difficultyId) {
      this.selectDifficulty(difficultyId);
    }
  },
  created() {
    this.selectItemColor(1);
    this.selectItemSize(2);
    this.selectDifficulty(4);
  },
};
</script>


<style scoped>
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
  display: none;

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

.dropdown-button-active {
  background-color: #28ffa7;
}

.dropdown-item {
  opacity: 1;
  font-weight: bold;
}

.dropdown-item:hover {
  background-color: #3ac089;
}

.custom-picture {
  cursor: pointer;
  width: auto;
  height: 15px;
  opacity: 0.7;
  transition: 0.5s;
}
</style>
