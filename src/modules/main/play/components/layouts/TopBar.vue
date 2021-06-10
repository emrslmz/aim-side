<template>
  <div class="d-flex justify-content-between">
    <div>
      <center-bar />
    </div>

    <div>
      <right-bar />
    </div>

  </div>
</template>

<script>
export default {
  name: 'TopBar',
  components: {
    CenterBar: () => import('@/modules/main/play/components/layouts/dashboard/CenterBar.vue'),
    RightBar: () => import('@/modules/main/play/components/layouts/dashboard/RightBar.vue'),
  },
};
</script>

<style scoped>

</style>
