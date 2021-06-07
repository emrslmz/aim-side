<template>
  <div>
   <div class="d-flex justify-content-center align-items-center side-bar-top side-bar-top-button">

     <div>
       <router-link to="/">
         <small title="Home"><i class="fas fa-home"></i></small>
       </router-link>
     </div>

      <div>
        <router-link to="/play">
          <small title="Play"><i class="fas fa-play"></i></small>
        </router-link>
      </div>

     <div>
         <small title="Quick Menu"><i data-toggle="modal" data-target="#menu" class="fas fa-th-large"></i></small>
     </div>

     <!-- Modal -->
     <div class="modal fade text-dark" id="menu" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
       <div class="modal-dialog modal-dialog-centered" role="document">
         <div class="modal-content">
           <div class="modal-header">
             <h5 class="modal-title" id="exampleModalLongTitle">Quick menu</h5>
             <button type="button" class="btn close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">&times;</span>
             </button>
           </div>
           <div class="modal-body d-flex flex-row justify-content-around align-items-center">

              <div>
                <router-link to="/">
                  <div class="menu-box" data-dismiss="modal" aria-label="Close">
                    <i class="fas fa-home"></i>
                    <small title="Home">Home</small>
                  </div>
                </router-link>

                <router-link to="/play">
                  <div class="menu-box" data-dismiss="modal" aria-label="Close">
                    <i class="fas fa-play"></i>
                    <small title="Play">Play</small>
                  </div>
                </router-link>
              </div>

            <div>
              <router-link to="/how-it-works">
                <div class="menu-box" data-dismiss="modal" aria-label="Close">
                  <i class="fas fa-question"></i>
                  <small title="How it Works">Tutorial</small>
                </div>
              </router-link>

              <router-link to="/conditions">
                <div class="menu-box" data-dismiss="modal" aria-label="Close">
                  <i class="fas fa-file"></i>
                  <small title="Terms and Conditions">Terms & Conditions</small>
                </div>
              </router-link>
            </div>

            <div>
              <router-link to="/about">
                <div class="menu-box" data-dismiss="modal" aria-label="Close">
                  <i class="fas fa-atlas"></i>
                  <small title="About">About</small>
                </div>
              </router-link>
            </div>


           </div>

           <div class="modal-footer"></div>
         </div>
       </div>
     </div>
     <!-- /Modal -->

   </div>
  </div>
</template>

<style scoped>
.side-bar-top {
  margin-top: 5px;
  background-color: #191919;
  width: 100px;
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
  cursor: pointer;
  opacity: 0.5;
  transition: 0.4s;
  padding: 0 5px 0 5px;
}
.side-bar-top-button i:hover {
  opacity: 1;
  transition: 0.4s;
}

.menu-box {
  width: 100px;
  min-height: 100px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 15px;
  background-image: radial-gradient(73% 147%, #EADFDF 59%, #ECE2DF 100%), radial-gradient(91% 146%, rgba(255,255,255,0.50) 47%, rgba(0,0,0,0.50) 100%);
  background-blend-mode: screen;
  color: #191919;
  transition: 0.4s;
  margin: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}


.menu-box:hover {
  transition: 0.4s;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 5px -1px;
}

.menu-box i {
  font-size: 32px;
  opacity: 1;
  color: #ff4040;
}

.menu-box small {
  font-weight: bold;
  font-size: 10px;
}


a {
  color: white;
}

</style>
