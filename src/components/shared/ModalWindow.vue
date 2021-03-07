<template>
     <div class="backdrop">
    <div class="modal">
      <ReviewsForm/>
    </div>
  </div>
</template>

<script>
import ReviewsForm from '../ReviewsForm'
export default {
  name: 'ModalWindow',
  components: { ReviewsForm }
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
