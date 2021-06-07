<template>
  <div>
    <tutorial />
  </div>
</template>

<script>
export default {
  name: 'HowItWorksHome',
  components: {
    Tutorial: () => import('@/modules/main/tutorial/components/Tutorial.vue'),
  },
};
</script>
