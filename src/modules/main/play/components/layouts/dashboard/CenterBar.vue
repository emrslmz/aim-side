<template>
  <div>
    <div class="d-flex flex-column justify-content-center align-items-center top-bar-frame-center px-4">
      <h6>Point: {{ playData.gameData.point }}</h6>
      <i><h6><small><span style="font-size: 12px;">Kill/Bullet:</span> {{ playData.gameData.kill }}/ <span class="text-primary">{{ playData.gameData.click }}</span></small></h6></i>
      <h6>
        <span style="font-size: 12px">Miss: {{ playData.gameData.click - playData.gameData.kill }} </span>
        <small><i class="far fa-clock pl-2"></i><i> {{ playData.nowStart.playingTime }}</i></small>
      </h6>

    </div>
  </div>
</template>


<script>
import { mapState } from 'vuex';

export default {
  name: 'CenterBar',
  computed: {
    ...mapState('Play', ['playData']),
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
  cursor: default;
  color: white;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;
  display: none;
}


@media screen and (max-width: 560px) {
  .top-bar-frame-center {
    width: 200px;
  }
}


</style>
