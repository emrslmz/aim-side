<template>
  <div>
    <condition />
  </div>
</template>

<script>
export default {
  name: 'ConditionHome',
  components: {
    Condition: () => import('@/modules/main/conditions/components/Condition.vue'),
  },
};
</script>
