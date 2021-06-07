<template>
  <div>
   <div class="d-flex flex-column justify-content-center align-items-center home-page-top">
      <div class="custom-box">
        <div class="head">
          <h2 class="valorant-font">Aim Side</h2>
        </div>
      </div>
   </div>
  </div>
</template>

<style scoped>
.home-page-top {
  padding-top: 100px;
}
.custom-box {
  width: 500px;
  min-height:700px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 15px;
  background-image: radial-gradient(73% 147%, #EADFDF 59%, #ECE2DF 100%), radial-gradient(91% 146%, rgba(255,255,255,0.50) 47%, rgba(0,0,0,0.50) 100%);
  background-blend-mode: screen;
  color: #191919;
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

</style>
