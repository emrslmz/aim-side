<template>
  <div>
   <div class="d-flex justify-content-center align-items-center home-page">
     <div class="custom-box row">
       <div class="col-4 d-flex justify-content-center align-items-center home-left">
         <i class="fas fa-crosshairs"></i>
       </div>
       <div class="col-8 d-flex flex-column justify-content-center align-items-start pl-5  home-right">
         <p>Enhance your insignia in the browser.</p>
         <p><small>Completely free. <a href="#">*Conditions apply.</a></small></p>
           <div class="d-flex align-items-center mb-2">
             <router-link to="/play">
               <div class="custom-button mx-2 my-2">
                 <button class="btn btn-sm"><i class="far fa-play-circle"></i> Play</button>
               </div>
             </router-link>
         </div>
       </div>
     </div>
   </div>
  </div>
</template>

<style scoped>
.home-page {
  height: 60vh;
}

.custom-box {
  min-width: 800px;
  min-height: 400px;
  box-shadow: rgba(0, 0, 0, 0.05) 0 6px 24px 0, rgba(0, 0, 0, 0.08) 0 0 0 1px;
  border-radius: 15px;
}

.home-left i {
  font-size: 60px;
    transition: 0.5s;
}

.home-left i:hover {
  transition: 0.5s;
  transform: skewY(-2deg);
  color: #ff4040;
  cursor: pointer;
}

.custom-button button {
  background-color: #d42053;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
  min-width: 100px;
  text-decoration: none;
}

.custom-button button:hover {
  background-color: #99193d;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
}

</style>
