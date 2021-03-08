<template>
  <div class="form">
    <h1 class="header">Review</h1>
    <form>
      <Input
        @onSubmit="onHandleAuthor"
        placeholder="Author"
        type="text"
        class="inputMargin "
        :rules="isValidAuthor"
      />
      <textarea
        v-model="content"
        name="review"
          placeholder="Your Review"
        id="3"
        cols="30"
        rows="10"
        class="inputMargin text-aria-decoration"
      ></textarea>
      <Input
        @onSubmit="onHandleRating"
        placeholder="Rating"
        type="number"
        class="inputMargin"
        :rules="isValidRating"
      />
      <Button type="submit" @click.native.prevent="postReview"
        >Send Review</Button
      >
    </form>

  </div>
</template>

<script>
import { string, number } from 'yup'
import Input from './shared/Input'
import Button from './shared/Button'
import { mapActions } from 'vuex'
export default {
  name: 'ReviewsForm',
  components: { Input, Button },
  data: () => ({
    author: '',
    content: '',
    rating: '',
    isValidAuthor: string().required(),
    isValidRating: number().required()
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
    async postReview () {
      try {
        const reviewObj = {
          id: this.$route.params.id,
          reviewBody: {
            author: this.author,
            content: this.content,
            rating: this.rating
          }
        }
        await this.toPostReview(reviewObj)
        this.toggleModalWindow(false)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  position: relative;
  text-align: center;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;

  width: 100%;
  background-color: #ffffff;

  /* height: 100vh; */
}
.header {
  margin: 0;
  margin-bottom: 20px;
  font-size: 20px;
}
.inputMargin {
  margin-bottom: 20px;
}
.text-aria-decoration{
  border-color:  #ff662d;
}

</style>
