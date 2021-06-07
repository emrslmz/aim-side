<template>
  <div class="not-found">
    <div class="container text-center">
      <div class="not-found-content">
        <div class="d-flex align-items-center">
          <div class="col-md-12 text-minecraft text-center">
            <h1>404</h1>
            <h4><i class="fas fa-terminal"></i>Not Found</h4>
            <small>We couldn't find the Page you are Looking for :(</small>
          </div>
        </div>

        <div class="d-flex justify-content-center">
          <div class="green-success-button">
            <router-link to="/">
               <button class="btn btn-sm w-50">Main Page</button>
            </router-link>
          </div>
        </div>
        <small>/Aim Side</small>

      </div>
      <div class="load-area">
        <h1><i class="fas fa-circle-notch fa-spin"></i></h1>
      </div>
    </div>
  </div>
</template>


<style scoped>
.not-found {
  height: 100vh;
  background-color: #e9e9e9;
}

.not-found-content {
  padding: 200px 0 0 0;
}


.not-found-content h1 {
  font-size: 120px;
}

.not-found-content h4 {
  font-style: italic;
}

.not-found-content i {
  font-size: 16px;
}

.green-success-button button {
  margin-top: 30px;
  border-radius: 10px;
  background-color: #20D489;
  color: white;
  font-weight: bold;
  min-width: 120px;
}

.green-success-button button:hover {
  background-color: #28ffa7;
  font-weight: bold;
  color: white;
}

.load-area i {
  font-size: 18px;
  color: green;
  animation: colorful 5s infinite alternate;
}

@keyframes colorful {

  0%{
    color: #4682b4;
    transform:rotate(0deg);
  }
  25%{
    color:  #2a52be;
  }
  50%{
    color:  #ff4040;
  }
  75%{
    color: #084c9e;
  }
  100%{
    color: #ce9c63;
    transform:rotate(360deg);
  }

}

</style>
