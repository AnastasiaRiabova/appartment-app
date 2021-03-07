<template>
<Container>
<div class="wrapping">
  <article class="apartment-main-info">
    <div class="apartment-main-info__heading">
      <h1 class="apartment-main-info__title">{{ toGetFlatInfo.title }}</h1>
      <StarRating :rating='toGetFlatInfo.rating' class="apartment-main-info__rating"/>
    </div>
    <img :src="toGetFlatInfo.imgUrl" alt="" class="apartment-main-info__photo" width='1000px' height="650px" />
    <p class="apartment-main-info__description">{{ toGetFlatInfo.descr }}</p>
    <div class="apartment-main-info__btn">
      <!-- <Button @click="handleApartmentsBooking" :loading="isLoading">
        Забронировать
      </Button> -->
    </div>
  </article>
    <OwnerInfo/>
    </div>
<!-- <button @click="openModal"> open Modal
  </button> -->
  <!-- <ModalWindow  v-if="toShowModal"></ModalWindow> -->
    </Container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
// import ModalWindow from '../components/shared/ModalWindow'
import Container from '../components/shared/Container'
import StarRating from '../components/shared/StarRating'
import OwnerInfo from '../components/OwnerInfo'
export default {
  name: 'OneFlat',
  components: { StarRating, OwnerInfo, Container },
  // data: () => ({
  //   toShowModal: false
  // }),
  async created () {
    await this.fetchOneFlatInfo(this.$route.params.id)
  },
  computed: {
    ...mapGetters(['toGetFlatInfo'])
  },
  methods: {
    ...mapActions(['fetchOneFlatInfo'])
    // openModal () {
    //   this.toggleModalWindow(true)
    // }
  }

}
</script>

<style lang="scss" scoped>
.apartment-main-info {
  width: 70%;
padding: 20px;
  &__heading {
    display: flex;
    align-items: center;
  }
  &__title {
    font-size: 20px;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 20px;
    margin-right: 20px;
    margin-left: 20px;
  }
  &__photo {
    max-width: 100%;
  }
  &__description {
    line-height: 1.3;
    margin-top: 30px;
    overflow: hidden;
    padding: 20px;
  }
  &__btn {
    margin-top: 20px;
    text-align: center;
  }

}
.wrapping{
  display: flex;
  justify-content: space-between;

}
</style>
