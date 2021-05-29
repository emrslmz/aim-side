<template>
 <div>
   <div class="body">
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
  }
};
</script>


<style>
.body {
  background-color: #F7F7F7;
  min-height: 95vh;
  width: 100%;
  background-image: linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%);
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

