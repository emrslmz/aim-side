<template>
  <div
      v-if="difficultyType >= functionNumber"
      class="ballon1"
      :style="{ left: [coordinateX + 'px'], top: [coordinateY + 'px']}"
      @click="clickItem(functionNumber)"
  ></div>
</template>

<script>
export default {
  name: 'Item',
  props: ['difficultyType', 'coordinateX', 'coordinateY', 'functionNumber', 'clickItem'],
};
</script>


<style scoped>
.ballon1 {
  position: absolute;
  /*background-image: linear-gradient(to top, #f77062 0%, #fe5196 100%);*/
  background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);
  border-radius: 100px;
  width: 100px;
  height: 100px;
}

.ballon1:hover {
  border: 2px solid red;
}
</style>
