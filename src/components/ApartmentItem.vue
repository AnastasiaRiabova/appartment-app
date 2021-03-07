<template>
 <router-link  class="apartments-item" :to="{name:'apartment', params: { id }}">
  <div>
    <div class="apartments-item__inner">
      <img :src="imgUrl" alt="flatView"  class="apartments-item__photo">
      <div class="apartments-item__content">
        <p class="apartments-item__description">{{ descr }}</p>
        <div class="apartments-item__rating">
          <StarRating :rating="rating" />
        </div>
        <div class="apartments-item__price">{{ price.toLocaleString('de-DE',{
        style: "currency",
        currency: "EUR"
      }) }}</div>
      </div>
    </div>
  </div>
  </router-link>
</template>

<script>
import StarRating from '../components/shared/StarRating'
export default {
  name: 'ApartmentsItem',
  components: {
    StarRating
  },

  props: {
    descr: {
      type: String
    },
    rating: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      require: true
    },
    imgUrl: {
      type: String,
      require: true
    },
    id: {
      type: String,
      require: true
    }
  }

}
</script>

<style lang="scss" scoped>
.apartments-item {
  position: relative;
  max-width: 350px;
  padding: 0 20px;
margin: 0px;
  &__content {
    position: relative;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.4s;
    background: rgba(#2f353a58, 0.7);
    min-height: 200px;
    color: #fff;
    text-align: left;
    line-height: 1.4;
    cursor: pointer;
    z-index: 1;
    &:hover {
      opacity: 1;
    }
  }
  &__inner {
    position: relative;
  }
  &__rating{
    margin-bottom: 20px;
  }
  &__description {

   max-height: calc(1em * 1.4 * 3);
   overflow: hidden;
   margin-bottom: 20px;
  }
  &__price {
    font-size: 20px;
    font-weight: 600;
  }
  &__photo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
