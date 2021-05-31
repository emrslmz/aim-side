<template>
  <div class="dead-bar-frame">
    <div>
        <img v-if="selectedSpray.url"  class="spray-picture" :src="'/assets/images/img/sprays/' + this.selectedSpray.url + '.' + this.selectedSpray.extension"  />
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'DeadBar',
  computed: {
    ...mapState('Shot', ['valoSprays', 'selectedSpray']),
  },
};
</script>

<style scoped>
.dead-bar-frame {
  position: absolute;
  bottom: 0;
  padding-bottom: 20px;
}

.spray-picture {
  width: 100px;
  height: 100px;
  animation: shake 5s infinite;
  transition: 0.8s;
}

@keyframes shake {
  0% { -webkit-transform: translate(2px, 1px) rotate(0deg); }
  10% { -webkit-transform: translate(-1px, -2px) rotate(-1deg); }
  20% { -webkit-transform: translate(-3px, 0px) rotate(1deg); }
  30% { -webkit-transform: translate(0px, 2px) rotate(0deg); }
  40% { -webkit-transform: translate(1px, -1px) rotate(1deg); }
  50% { -webkit-transform: translate(-1px, 2px) rotate(-1deg); }
  60% { -webkit-transform: translate(-3px, 1px) rotate(0deg); }
  70% { -webkit-transform: translate(2px, 1px) rotate(-1deg); }
  80% { -webkit-transform: translate(-1px, -1px) rotate(1deg); }
  90% { -webkit-transform: translate(2px, 2px) rotate(0deg); }
  100% { -webkit-transform: translate(1px, -2px) rotate(-1deg); }
}
</style>
