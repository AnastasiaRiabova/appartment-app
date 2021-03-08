<template>
  <div class="form">
    <h1 class="header">Please choose date:</h1>
    <form>
      <Input
        :rules="validDate"
        type="date"
        @onSubmit="onHandleDate"
        class="inputMargin"
      />
      <Button type="submit" @click.native.prevent="postOrder">confirm</Button>
    </form>
  </div>
</template>

<script>
import { string } from 'yup'
import Input from './shared/Input'
import Button from './shared/Button'
import { mapActions } from 'vuex'
export default {
  name: 'BookApartmentForm',
  components: {
    Input,
    Button
  },
  data: () => ({
    validDate: string().required(),
    selectedDate: ''
  }),
  methods: {
    ...mapActions(['toOrdersApartment']),
    onHandleDate (date) {
      this.selectedDate = date.split('-').reverse().join('/')
    },
    async postOrder () {
      try {
        const orderObj = {
          date: this.selectedDate,
          apartmentId: this.$route.params.id
        }

        await this.toOrdersApartment(orderObj)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  top: 30%;
  position: relative;
  text-align: center;
  padding: 20px;

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
</style>
