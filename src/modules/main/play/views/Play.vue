<template>
  <div>
      <div class="d-flex justify-content-center align-items-center play-container">
        <button class="btn">
          <span class="button-valorant-inner">
            <span class="button-valorant-slide"></span>
            <span class="button-valorant-content">Start</span>
          </span>
        </button>
      </div>
  </div>
</template>

<style scoped>
.play-container{
  min-height: 70vh;
}




.btn {
  /* Clean style */
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: none;
  background: none;
  color: var(--button-text-color);
  cursor: pointer;
  /* Clean style */

  --button-text-color: var(--background-color);
  --button-text-color-hover: var(--button-background-color);
  --border-color: #7D8082;
  --button-background-color: #ece8e1;
  --highlight-color: #ff4655;
  --button-valorant-inner-border-color: transparent;
  --button-bits-color: var(--background-color);
  --button-bits-color-hover: var(--button-background-color);

  position: relative;
  padding: 8px;
  width: 400px;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  transition: all .15s ease;
}

.btn::before,
.btn::after {
  content: '';
  display: block;
  position: absolute;
  right: 0; left: 0;
  height: calc(50% - 5px);
  border: 1px solid var(--border-color);
  transition: all .15s ease;
}

.btn::before {
  top: 0;
  border-bottom-width: 0;
}

.btn::after {
  bottom: 0;
  border-top-width: 0;
}

.btn:active,
.btn:focus {
  outline: none;
}

.btn:active::before,
.btn:active::after {
  right: 3px;
  left: 3px;
}

.btn:active::before {
  top: 3px;
}

.btn:active::after {
  bottom: 3px;
}

.button-valorant-inner {
  position: relative;
  display: block;
  padding: 20px 30px;
  background-color: var(--button-background-color);
  overflow: hidden;
  box-shadow: inset 0px 0px 0px 1px var(--button-valorant-inner-border-color);
}

.button-valorant-inner::before {
  content: '';
  display: block;
  position: absolute;
  top: 0; left: 0;
  width: 2px;
  height: 2px;
  background-color: var(--button-bits-color);
}

.button-valorant-inner::after {
  content: '';
  display: block;
  position: absolute;
  right: 0; bottom: 0;
  width: 4px;
  height: 4px;
  background-color: var(--button-bits-color);
  transition: all .2s ease;
}

.button-valorant-slide {
  display: block;
  position: absolute;
  top: 0; bottom: -1px; left: -8px;
  width: 0;
  background-color: var(--highlight-color);
  transform: skew(-15deg);
  transition: all .2s ease;
}

.button-valorant-content {
  position: relative;
}

.btn:hover {
  color: var(--button-text-color-hover);
}

.btn:hover .button-valorant-slide {
  width: calc(100% + 15px);
}

.btn:hover .button-valorant-inner::after {
  background-color: var(--button-bits-color-hover);
}



.button-valorant-inner-light {
  --button-background-color: var(--background-color);
  --button-text-color: var(--highlight-color);
  --button-inner-border-color: var(--highlight-color);
  --button-text-color-hover: #ece8e1;
  --button-bits-color-hover: #ece8e1;
}

</style>
