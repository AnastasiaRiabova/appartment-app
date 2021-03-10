<template>
  <div class="star-rating">
    <span
      class="star star-outline "
      v-for="index in starLimit"
      :key="index"
    ></span>
    <div class="star-rating__fulfield" :style="ratingWidth">
      <span
        class="star star-colored "
        v-for="index in starLimit"
        :key="index"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StarRating',
  props: {
    rating: {
      type: Number,
      default: 0
    },
    starLimit: {
      type: Number,
      default: 5
    }
  },
  computed: {
    ratingWidth () {
      const width = (this.rating / this.starLimit) * 100

      return `width:${width}%`
    }
  }
}
</script>

<style lang="scss" scoped>
.star-rating {
  position: relative;
  display: inline-flex;
  &__fulfield {
    display: inline-flex;
    position: absolute;
    width: 0;
    height: 100%;
    left: 0;
    top: 0;
    overflow: hidden;
  }
}
.star {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin: 0 3px;
  flex-shrink: 0;
  &-colored {
    background: url("../../assets/images/Star.svg") center no-repeat;
  }
  &-outline {
    background: url("../../assets/images/Star2.svg") center no-repeat;
  }
}
</style>
