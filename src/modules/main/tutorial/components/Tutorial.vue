<template>
  <div>
    <div class="tutorial-home pt-5">
      <div class="text-center">
        <h2 class="valorant-font">Aim Side</h2>
        <h6 class="text-spacing5">Tutorial</h6>
      </div>

      <div class="d-md-flex flex-md-column justify-content-center align-items-center">

        <div class="d-flex flex-row align-items-center col-12 mt-5">
          <div class="text-md-right col-6">
            <h1><i class="fas fa-ghost"></i></h1>
          </div>
          <div class="text-left col-6">
            <h4>First step</h4>
            <p>Select the weapon you want to use.</p>
          </div>
        </div>

        <div class="d-flex flex-row align-items-end col-12 my-5">
          <div class="text-md-right col-6">
            <h4>Personalization step</h4>
            <p>You can change the crosshairs if you want.</p>
            <p>You can change the map if you want.</p>
            <p>You can change the target size if you want.</p>
            <p>You can change the target color if you want.</p>
            <p>You can change the number of targets/difficulty if you want.</p>
          </div>
          <div class="text-left col-6">
            <h1><i class="fas fa-crosshairs"></i></h1>
            <h1><i class="fas fa-compress-alt"></i></h1>
            <h1><i class="fas fa-palette"></i></h1>
            <h1><i class="fas fa-hat-wizard"></i></h1>
          </div>
        </div>

        <div class="d-flex flex-row align-items-end col-12 mb-5">
          <div class="text-md-right col-6">
            <h1><i class="far fa-smile-beam"></i></h1>
          </div>
          <div class="text-left col-6">
            <h4>Other steps</h4>
            <p>Have fun and evolve!</p>
          </div>
        </div>

        <div class="d-flex flex-column justify-content-center text-center align-items-center">
            <h4>Didn't find what you were looking for?</h4>
            <small>Watch our more detailed tutorial video.</small>

          <div>
            <iframe src="https://www.youtube.com/embed/tLFPMG1JJIA?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

          <div class="d-flex flex-column justify-content-center align-items-center">
            <div class="text-center" v-if="helpful === false">
              <b>Were the explanations helpful?</b>
              <button class="btn btn-success btn-sm w-100 mt-2" @click="helpful = true">Yes</button>
              <button class="btn btn-danger btn-sm w-100 my-2" @click="helpful = true">No</button>
            </div>
            <div class="my-5" v-else><b>Thanks for your return!</b></div>
          </div>
        </div>


      </div>
    </div>
  </div>
<!--  <div class="tutorial-picture" style="background-image: url('/assets/images/img/tutorial/select-gun.jpg')"></div>-->
</template>

<script>
export default {
  data() {
    return {
      helpful: false,
    };
  },
};
</script>

<style scoped>
.text-spacing5 {
  letter-spacing: 5px;
}

.tutorial-home  {
  min-height: 120vh;
}

.tutorial-picture {
  border-radius: 20px 20px 0 0;
  background-position: left;
  /*background-attachment: fixed;*/
  background-repeat: no-repeat;
  background-size: 200px;
  min-width: 300px;
  height: 100px;
}

iframe {
  border-radius: 20px;
  max-width: 560px;
  max-height: 315px;
}

@media screen and (min-width:560px) {

  iframe {
    width: 560px;
    height: 315px;
  }

}
</style>
