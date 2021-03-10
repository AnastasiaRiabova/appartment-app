<template>
  <Container>
    <div class="wrapping">
      <article class="apartment-main-info">
        <div class="apartment-main-info__heading">
          <h1 class="apartment-main-info__title">{{ toGetFlatInfo.title }}</h1>
          <StarRating
            :rating="toGetFlatInfo.rating"
            class="apartment-main-info__rating"
          />
        </div>
        <img
          :src="toGetFlatInfo.imgUrl"
          alt=""
          class="apartment-main-info__photo"
        />
        <p class="apartment-main-info__description">
          {{ toGetFlatInfo.descr }}
        </p>
        <div class="apartment-main-info__btn">
          <Button @click.native="openModal">Book apartment</Button>
        </div>
      </article>
      <OwnerInfo />
    </div>
  </Container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Button from '../components/shared/Button'
import Container from '../components/shared/Container'
import StarRating from '../components/shared/StarRating'
import OwnerInfo from '../components/OwnerInfo'

export default {
  name: 'OneFlat',
  components: { StarRating, OwnerInfo, Container, Button },
  async created () {
    try {
      await this.fetchOneFlatInfo(this.$route.params.id)
    } catch (error) {
      this.$notify({
        group: 'foo',
        title: 'Something went wrong',
        text: error,
        type: 'error'
      })
    }
  },
  computed: {
    ...mapGetters(['toGetFlatInfo'])
  },
  methods: {
    ...mapActions(['fetchOneFlatInfo', 'toggleModalWindow']),
    openModal () {
      this.toggleModalWindow('BookApartmentForm')
    }
  }
}
</script>

<style lang="scss" scoped>
.apartment-main-info {
  width: 70%;
  padding: 20px;
     @media (max-width: 1125px) {
 width: 100%;
}
  &__heading {
    display: flex;
    align-items: center;
         @media (max-width: 1125px) {
display: block;
}
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
   width: 100%;
                 @media (max-width: 1125px) {
width: 100%;

}
  }
  &__description {
    line-height: 1.3;
    margin-top: 30px;
    overflow: hidden;
    padding: 20px;
  }
  &__btn {
    margin: 20px 0;
    text-align: center;
  }
}
.wrapping {
  display: flex;
  justify-content: space-between;
     @media (max-width: 1125px) {
display: block;
}
}
</style>
