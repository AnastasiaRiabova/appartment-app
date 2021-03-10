<template>
  <section class="apartments-owner">
    <div class="owner-wrapping">
      <h2 class="apartments-owner__title">Owner Infomation:</h2>
      <p class="apartments-owner__info">Name: {{ getOwnerInfo.name }}</p>
      <p class="apartments-owner__info">Tel: {{ getOwnerInfo.phone }}</p>
      <p class="apartments-owner__info">E-mail: {{ getOwnerInfo.email }}</p>
    </div>
    <ReviewsInfo />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import ReviewsInfo from './ReviewsInfo'
export default {
  name: 'OwnerInfo',
  components: { ReviewsInfo },
  computed: {
    ...mapGetters(['getOwnerInfo'])
  }
}
</script>

<style lang="scss" scoped>
.owner-wrapping {
  background-color: #e1efff;
  padding: 20px;
  margin-bottom: 20px;
}

.apartments-owner {
  padding: 20px;
  width: 30%;

  &__title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  &__info {
    margin: 10px 0;
  }
}
</style>
