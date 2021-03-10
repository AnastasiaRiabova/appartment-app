<template>
  <div>
    <div class="all-reviews-block">
      <h3>All Reviews</h3>
      <StarRating :rating="toGetFlatInfo.rating" />
    </div>
    <div class="block-view">
      <div v-if="toShowReview && toShowReview.length === 0" class="no-review">
        There are no reviews yet for this apartment. <br />
        Please add your review
      </div>
      <div
        v-for="{ id, author, content } in toShowReview"
        :key="id"
        class="review-info"
      >
        <span class="author-block">
          <img
            src="../assets/images/User.svg"
            alt="logo"
            width="20px"
            height="20px"
          />
          <p class="logo-style">{{ author }}:</p></span
        >
        <p>"{{ content }}"</p>
      </div>
    </div>
    <div class="button-position">
      <Button @click.native="openModal">add Review</Button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import StarRating from './shared/StarRating'
import Button from './shared/Button'
export default {
  name: 'ReviewsInfo',
  components: {
    StarRating,
    Button
  },
  computed: {
    ...mapGetters(['toGetFlatInfo']),
    toShowReview () {
      return this.toGetFlatInfo.reviews
    }
  },
  methods: {
    ...mapActions(['toggleModalWindow']),
    openModal () {
      this.toggleModalWindow('ReviewsForm')
    }
  }
}
</script>

<style lang="scss" scoped>
.no-review {
  font-size: 18px;
  margin: 170px 20px;
}
.button-position {
  width: 100%;
  text-align: center;
  margin-top: 30px;
}
.block-view {
  position: relative;

  height: 600px;
  overflow-y: scroll;
  border-bottom: 1px solid #e1efff;
  border-left: 1px solid #e1efff;
}
.all-reviews-block {
  padding: 20px;
  background-color: #e1efff;
}
.review-info {
  padding: 20px;

  border-bottom: 1px solid #e1efff;
  border-left: 1px solid #e1efff;
  border-right: 1px solid #e1efff;
}
.logo-style {
  margin: 20px;
}
.author-block {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
