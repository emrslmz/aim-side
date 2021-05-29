<template>
  <div>
    <header>
      <div class="top-bar">
        <nav class="navbar navbar-expand-lg navbar-light">
          <h5 class="pl-5"><i class="fas fa-crosshairs"></i> Aim Side</h5>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse px-3" id="navbarSupportedContent">
            <div class="navbar-nav mr-auto"></div>
            <div class="d-md-flex justify-content-between align-items-center">

              <div class="d-flex align-items-center mb-2">
                <router-link to="/">
                  <div class="header-button mx-2 my-2 show">
                    <button class="btn btn-sm"><i class="fas fa-home"></i></button>
                  </div>
                </router-link>
              </div>

              <div class="d-flex align-items-center mb-2">
                <router-link to="/play">
                  <div class="header-button mx-2 my-2">
                    <button class="btn btn-sm"><i class="far fa-play-circle"></i> Play</button>
                  </div>
                </router-link>
              </div>



              <div class="custom-vertical-hr" ></div>

              <div class="d-flex align-items-center mb-2">
                <div class="dropdown header-button mx-2 my-2">
                  <button class="btn btn-sm dropdown-toggle" type="button" id="profileDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Extras
                  </button>
                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="profileDropdown">

                    <a href="https://guess-what-rank.herokuapp.com" target="_blank">
                      <span class="dropdown-item btn btn-sm"><i class="far fa-user-circle"></i> Guess Rank</span>
                    </a>

                    <a href="https://sound-air.herokuapp.com" target="_blank">
                      <span class="dropdown-item btn btn-sm"><i class="fab fa-soundcloud fa-flip-horizontal"></i> Sound AIR</span>
                    </a>

                    <a href="https://oyuncudefteri.com" target="_blank">
                      <span class="dropdown-item btn btn-sm"><i class="fas fa-gamepad"></i> Oyuncu Defteri</span>
                    </a>

                    <router-link to="/FAQ" >
                      <span class="dropdown-item btn btn-sm" type="button"><i class="far fa-comments"></i> FAQ</span>
                    </router-link>

                    <router-link to="/feedback" >
                      <span class="dropdown-item btn btn-sm" type="button"><i class="far fa-comment fa-flip-horizontal"></i> FAQ</span>
                    </router-link>

                  </div>
                </div>
              </div>
              <div class=" px-5"></div>

            </div>
          </div>
        </nav>
      </div>
    </header>

  </div>
</template>

<style scoped>
.top-bar {
  border-top: 5px solid #d42053;
  border-right: none;
  border-bottom: none;
  border-left: none;
}

.header-button button {
  background-color: white;
  color: #343A40;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
  min-width: 100px;
  text-decoration: none;
}

.header-button button:hover {
  background-color: #d42053;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
}

.header-button span {
  background-color: white;
  color: #343A40;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
  min-width: 100px;
  text-decoration: none;
}

.header-button a {
  text-decoration: none;
}

.header-button span:hover {
  background-color: #d42053;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
  text-decoration: none;
}

.show button {
  background-color: #d42053;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
}

.show button:after {
  background-color: #d42053;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
}

.router-link-active span button {
  background-color: #d42053;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
  text-decoration: none;
}

.router-link-active button {
  background-color: #d42053;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
  text-decoration: none;
}


.router-link-active span {
  background-color: #d42053;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
  text-decoration: none;
}

.custom-vertical-hr {
  border-left: 1px solid #cbcaca;
  border-top: none;
  border-bottom: none;
  border-right: none;
  height: 20px
}
</style>
