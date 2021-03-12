<template>
  <div class="form">
    <h1 class="header">Please choose date:</h1>
    <form>
      <Input
        :rules="validDate"
        type="date"
        placeholder="DD.MM.YYYY"
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
    ...mapActions(['toOrdersApartment', 'toggleModalWindow']),
    onHandleDate (date) {
      this.selectedDate = date
    },
    async postOrder () {
      try {
        const orderObj = {
          date: this.selectedDate,
          apartmentId: this.$route.params.id
        }

        await this.toOrdersApartment(orderObj)
        await this.$store.dispatch('fetchOrders')
        this.$notify({
          group: 'foo',
          text: 'Your order was successfully added',
          title: 'Hurrah...',
          type: 'success'
        })
        this.toggleModalWindow(false)
      } catch (error) {
        this.$notify({
          group: 'foo',
          title: 'Something went wrong',
          text: error,
          type: 'error'
        })
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
