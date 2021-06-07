<template>
  <div>
    <div class="play-home-frame">
      <game />
    </div>
  </div>
</template>

<script>

export default {
  name: 'PlayHome',
  components: {
    Game: () => import('@/modules/main/play/components/Game.vue'),
  },
};
</script>

