<template>
 <div>
   <div class="body">
     <side-bar-top />
     <the-header />
     <home-page v-if="$route.name === 'HomePageDashboard'" />
     <router-view />
   </div>
   <the-footer />
 </div>
</template>

<script>
export default {
  name: 'MainPage',
  components: {
    HomePage: () => import('@/modules/main/home/components/HomePage.vue'),
    TheHeader: () => import('@/modules/main/home/layouts/TheHeader.vue'),
    TheFooter: () => import('@/modules/main/home/layouts/TheFooter.vue'),
    SideBarTop: () => import('@/modules/main/home/layouts/SideBarTop.vue'),
  },
};
</script>


<style>
.body {
  background-color: #E9E9E9;
  min-height: 93vh;
  width: 100%;
}

::-webkit-scrollbar {
  width: 5px;
  border-radius: 20px;
  background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb {
  border-radius: 20px;
  background-color: #000000;
}

</style>

