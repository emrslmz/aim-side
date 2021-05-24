<template>
  <div>
    <home-page v-if="$route.name === 'HomePageDashboard'" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  components: {
    HomePage: () => import('@/modules/main/home/components/HomePage.vue'),
  }
};
</script>

