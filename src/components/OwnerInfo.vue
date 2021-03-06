<template>
  <section class="apartments-owner">
    <h2 class="apartments-owner__title">Owner Infomation:</h2>
    <p class="apartments-owner__info">Name: {{ getOwnerInfo.name }}</p>
    <p class="apartments-owner__info">Tel: {{ getOwnerInfo.phone }}</p>
    <p class="apartments-owner__info">E-mail: {{ getOwnerInfo.email }}</p>
    <p v-for="{id, author, content} in toShowReview" :key="id">{{author}}: "{{content}}"</p>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'OwnerInfo',
  computed: {
    ...mapGetters(['getOwnerInfo', 'toGetFlatInfo']),
    toShowReview () {
      return this.toGetFlatInfo.reviews
    }
  }
}
</script>

<style lang="scss" scoped>

.apartments-owner {
  padding: 20px;
  background-color: rgba(68, 63, 63, 0.201);
  font-weight: 400;
  text-align: start;
  &__title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  &__info {
    margin-top: 6px;
  }
}
</style>
