<template>
  <div class="backdrop">
    <div class="loader">
      <div class="loader-small"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style lang="scss" scoped>
.backdrop{
    width: 100%;
    height: 100%;
    background-color: rgba(23, 21, 21, 0.502);
    position: absolute;
    z-index: 999;
}
.loader {
position: absolute;
top: 50%;
left:50%;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background-color: rgba(255, 89, 0, 0.451);
  display: flex;

    &-small {

    margin: auto;
    width: 50px;
    height: 50px;
    border-radius: 50%;
     background-color: rgb(255, 111, 0);
}
}
@keyframes pulse {
  0% {
    transform: scale(0.1);
  }
  50% {
    transform: scale(2);
  }
  100% {
    transform: scale(0.1);
  }
}

.loader-small {
  animation: pulse 2500ms ease-in-out infinite alternate;
  color: rgb(255, 255, 255);
}
</style>
