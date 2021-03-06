<template>
  <div class="form">
    <h1 class="header">Login</h1>
    <form>
      <Input
        @onSubmit="onHandleEmail"
        placeholder="Email"
        type="text"
        class="inputMargin"
        name="email"
        :rules='isValidEmail'
      />
      <Input
        @onSubmit="onHandlePassword"
        placeholder="Password"
        type="password"
        class="inputMargin"
        name="password"
        :rules='isValidPassword'
      />
      <Button :disabled='error.password || error.email' type="submit" @click.native.prevent="toGetValue">Button</Button>
    </form>

  </div>
</template>

<script>
import { string } from 'yup'
import Input from '../components/shared/Input'
import Button from '../components/shared/Button'
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  components: {
    Input,
    Button

  },
  data: () => ({
    error: {
      password: true,
      email: true
    },
    email: '',
    password: '',
    isValidEmail: string().required().email(),
    isValidPassword: string().required().min(6)
  }),

  computed: {},
  methods: {

    ...mapActions(['toLoginUser']),
    async   onHandleEmail (email, error) {
      this.email = email
      this.error.email = error
    },
    async  onHandlePassword (password, error) {
      this.password = password
      this.error.password = error
    },

    async toGetValue () {
      try {
        const user = { email: this.email, password: this.password }
        await this.toLoginUser(user)
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
