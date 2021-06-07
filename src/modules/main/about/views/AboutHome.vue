<template>
  <div>
    <about />
  </div>
</template>

<script>
export default {
  name: 'ConditionHome',
  components: {
    About: () => import('@/modules/main/about/components/About.vue'),
  },
};
</script>
