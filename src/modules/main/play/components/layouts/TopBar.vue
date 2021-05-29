<template>
  <div>
    <div class="d-flex justify-content-between align-items-center top-bar-frame px-4">
        <h6>Puan: 50</h6>


      <div class="d-flex align-items-center header-button mb-2">
        <div class="dropdown mx-2 my-2">
          <small id="profileDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-cog"></i>
          </small>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="profileDropdown">

            <small>
              <span class="dropdown-item btn btn-sm"><i class="fas fa-crosshairs"></i> Change Cross</span>
            </small>

            <small>
              <span class="dropdown-item btn btn-sm"><i class="far fa-image"></i> Change Background</span>
            </small>


          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<style scoped>
.top-bar-frame {
  background-color: #191919;
  width: 300px;
  height: 40px;
  border-radius: 0 0 0 50px;
  position: absolute;
  right: 0;
  cursor: default;
}


.header-button {
  color: white;
  border-radius: 10px;
  transition: 0.4s;
  cursor: pointer;
  opacity: 0.5;
}

.header-button:hover {
  transition: 0.4s;
  opacity: 1;
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
</style>
