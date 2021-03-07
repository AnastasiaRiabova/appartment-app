<template>
    <div class="form">
<h1 class="header">Please choose date:</h1>
<form >

<Input :rules='validDate' type="date" @onSubmit="onHandleDate" class="inputMargin" />
<Button  type="submit" @click.native.prevent="postOrder">confirm</Button>
</form>
    </div>
</template>

<script>
import { string } from 'yup'
import Input from './shared/Input'
import Button from './shared/Button'
export default {
  name: 'BookApartmentForm',
  components: {
    Input, Button
  },
  data: () => ({
    validDate: string().required(),
    selectedDate: ''
  }),
  methods: {
    onHandleDate (date) {
      this.selectedDate = date
      console.log(date)
    }
  },
  postOrder () {

  }
}
</script>

<style lang="scss" scoped>
.form {
  text-align: center;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  height: 300px;
  width: 300px;
  background-color: #ffffff;
  outline: #ff662d solid 1px;
  box-shadow: 13px 11px 22px 1px rgba(0, 0, 0, 0.6);
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
