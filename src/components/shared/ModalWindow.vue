<template>
     <div class="backdrop">
    <div class="modal">
      <Reviews/>
    </div>
  </div>
</template>

<script>
import Reviews from '../Reviews'
export default {
  name: 'ModalWindow',
  components: { Reviews }
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
.modal {
    position: absolute;
    top: 25%;
    left:35%;

}
</style>
