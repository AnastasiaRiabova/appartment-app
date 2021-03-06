<template>
  <div class="form"  >
      <h1 class="header">Review</h1>
    <form   >
      <Input
        @onSubmit="onHandleAuthor"
        placeholder="Author"
        type="text"
        class="inputMargin"
      />
      <!-- <Input
        @onSubmit="onHandleContent"
        placeholder="Your Review"
        type="text-aria"
        class="inputMargin"
      /> -->
      <textarea v-model="content" name="review" id="3" cols="30" rows="10"  class="inputMargin"></textarea>
      <Input
        @onSubmit="onHandleRating"
        placeholder="rating"
        type="number"
        class="inputMargin"
      />
      <Button type='submit' @click.native.prevent="postReview">Send Review</Button>
    </form>
      <button @click="toCloseModal">close</button>

  </div>
</template>

<script>
import Input from './shared/Input'
import Button from './shared/Button'
import { mapActions } from 'vuex'
export default {
  name: 'Review',
  components: { Input, Button },
  data: () => ({
    author: '',
    content: '',
    rating: ''
  }),
  computed: {
    onHandleContent () {
      return this.content
    }
  },
  methods: {
    ...mapActions(['toPostReview', 'toggleModalWindow']),
    onHandleAuthor (author) {
      this.author = author
    },

    onHandleRating (rating) {
      this.rating = rating
    },
    postReview () {
      const reviewObj = {
        id: this.$route.params.id,
        reviewBody: { author: this.author, content: this.content, rating: this.rating }
      }
      this.toPostReview(reviewObj)
    },
    toCloseModal (event) {
      if (event.key === 'Shift' || event.type === 'click') {
        this.toggleModalWindow(false)
      }
    }
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
.form {

padding: 20px;
  margin-left: auto;
  margin-right: auto;
  height: 700px;
  width: 700px;
  background-color: #ffffff;
  outline: #ff662d solid 1px;
  box-shadow: 13px 11px 22px 1px rgba(0,0,0,0.6);
  /* height: 100vh; */
}
.header{
    margin: 0;
    margin-bottom: 20px;
    font-size: 20px;
}
.inputMargin{
  margin-bottom: 20px;
}
</style>
