<template>
  <div class="backdrop">
    <div class="modal">
      <div class="modal-item"></div>
      <button @click="toCloseModal" class="button-style">
        <img src="../../assets/images/close.svg" alt="close" />
      </button>
      <ReviewsForm v-if="getModalWindow === 'ReviewsForm'" />
      <BookApartmentForm v-if="getModalWindow === 'BookApartmentForm'" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ReviewsForm from '../ReviewsForm'
import BookApartmentForm from '../BookApartmentForm'
export default {
  name: 'ModalWindow',
  components: { ReviewsForm, BookApartmentForm },
  methods: {
    ...mapActions(['toggleModalWindow']),
    toCloseModal (event) {
      if (event.key === 'Alt' || event.type === 'click') {
        this.toggleModalWindow(false)
      }
    }
  },
  computed: {
    ...mapGetters(['getModalWindow'])
  },
  mounted () {
    window.addEventListener('keyup', this.toCloseModal)
  },
  destroyed () {
    window.removeEventListener('keyup', this.toCloseModal)
  }
}
</script>

<style lang="scss" scoped>
.backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(23, 21, 21, 0.502);
  position: absolute;
  z-index: 999;
}
.modal {
  position: absolute;
  box-shadow: 13px 11px 22px 1px rgba(0, 0, 0, 0.6);
  top: 25%;
  left: 35%;
  width: 50%;
  height: 50%;
  background-color: #fff;
}
.button-style {
  position: absolute;
  z-index: 99;
  top: 20px;
  right: 20px;
  border: none;
  margin: 0;
  padding: 3px;
  width: auto;
  overflow: visible;
  cursor: pointer;
  background: transparent;
}
</style>
