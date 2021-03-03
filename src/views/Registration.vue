<template>
  <div class="form">
  <h1 class="header">Registration</h1>
    <form>
      <Input @onSubmit="onHandleName" placeholder='Name'/>
      <Input @onSubmit="onHandleEmail" placeholder='Email'/>
      <Input @onSubmit="onHandlePassword"  placeholder='Password'/>
      <Button type='submit' @click.native.prevent="toGetValue">Button</Button>
    </form>

  </div>
</template>

<script>
import Input from '../components/shared/Input'
import Button from '../components/shared/Button'
import { mapActions } from 'vuex'
export default {
  name: 'Registration',
  components: {
    Input, Button
  },
  data: () => ({
    name: '',
    email: '',
    password: ''
  }),
  computed: {

  },
  methods: {
    ...mapActions(['toRegisterUser']),
    onHandleName (name) {
      this.name = name
    },
    onHandleEmail (email) {
      this.email = email
    },
    onHandlePassword (password) {
      this.password = password
    },

    async toGetValue () {
      try {
        const user = { name: this.name, email: this.email, password: this.password }
        await this.toRegisterUser(user)
        console.log('await error')
        this.$router.push({ name: 'homepage' })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
padding: 20px;
  margin-left: auto;
  margin-right: auto;
  height: 300px;width: 300px;
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
</style>
