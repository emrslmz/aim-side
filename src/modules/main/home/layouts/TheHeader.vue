<template>
  <div>
    <header>
<!--      <div class="top-bar">-->
<!--        <nav class="navbar navbar-expand-lg navbar-light text-white">-->
<!--          <h5 class="pl-5 valorant-font"><i class="fas fa-crosshairs"></i> Aim Side</h5>-->
<!--          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">-->
<!--            <span class="navbar-toggler-icon"></span>-->
<!--          </button>-->

<!--          <div class="collapse navbar-collapse px-3" id="navbarSupportedContent">-->
<!--            <div class="navbar-nav mr-auto"></div>-->
<!--            <div class="d-flex justify-content-between align-items-center">-->

<!--              <div class="d-flex align-items-center">-->
<!--                <router-link to="/">-->
<!--                  <div class="header-button mx-2">-->
<!--                    <button class="btn btn-sm"><i class="fas fa-home"></i></button>-->
<!--                  </div>-->
<!--                </router-link>-->
<!--              </div>-->

<!--              <div class="d-flex align-items-center">-->
<!--                <router-link to="/play">-->
<!--                  <div class="header-button mx-2">-->
<!--                    <button class="btn btn-sm"><i class="fas fa-play"></i> Play</button>-->
<!--                  </div>-->
<!--                </router-link>-->
<!--              </div>-->

<!--              <div class="d-flex align-items-center">-->
<!--                <router-link to="/conditions">-->
<!--                  <div class="header-button mx-2">-->
<!--                    <button class="btn btn-sm"><i class="fas fa-mail-bulk"></i></button>-->
<!--                  </div>-->
<!--                </router-link>-->
<!--              </div>-->

<!--            </div>-->
<!--          </div>-->
<!--        </nav>-->
<!--      </div>-->
      <div class="top-bar"></div>
    </header>
  </div>
</template>

<style scoped>
nav {
  background-color: #191919;
}
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
</style>
