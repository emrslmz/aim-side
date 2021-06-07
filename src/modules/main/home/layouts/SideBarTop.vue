<template>
  <div>
   <div class="d-flex justify-content-around align-items-center side-bar-top side-bar-top-button">

     <div>
       <router-link to="/">
         <small><i class="fas fa-home"></i></small>
       </router-link>
     </div>

      <div>
        <router-link to="/play">
          <small><i class="fas fa-play"></i></small>
        </router-link>
      </div>

     <div>
       <router-link to="/how-it-works">
         <small><i class="fas fa-th-large"></i></small>
       </router-link>
     </div>


   </div>
  </div>
</template>

<style scoped>
.side-bar-top {
  margin-top: 5px;
  background-color: #191919;
  min-width: 100px;
  height: 40px;
  border-radius: 0 0 50px 0;
  position: absolute;
  color: white;
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;
}

.side-bar-top-button i {
  opacity: 0.5;
  transition: 0.4s;
}
.side-bar-top-button i:hover {
  opacity: 1;
  transition: 0.4s;
}

a {
  color: white;
}
</style>
