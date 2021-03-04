<template>
  <div class="header-main">
    <Container>
      <div class="header">
      <router-link to="/">  <img src="../assets/images/Logo.svg" alt="Logo" class="logo" /></router-link>
        <div id="nav" v-if="!isAuth">
          <router-link to="/login">Login</router-link> /
          <router-link to="/registration">Registration</router-link>
        </div>
        <div v-if="isAuth" class='button-position'>
          <Button  @click.native="toLogOut">Logout</Button>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from '../components/shared/Container'
import { mapActions, mapGetters } from 'vuex'
import Button from '../components/shared/Button'
export default {
  name: 'Header',
  components: {
    Container,
    Button
  },
  methods: {
    ...mapActions(['toLogOutUser']),
    async toLogOut () {
      try {
        await this.toLogOutUser()
        this.$router.push({ name: 'login' })
      } catch (error) {
        console.log(error)
      }
    }
  },
  computed: {
    ...mapGetters(['isAuth'])
  }
}
</script>

<style lang="scss" scoped>
.logo {
  padding: 10px 0px;
}
.header-main {
  width: 100%;
  background-color: #0f1d2d;
  height: 60px;
}
.header {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#nav {
  padding: 10px 30px;
  color: #ffffff;

  display: inline-block;

  a {
    /* font-weight: bold; */
    color: #ffffff;

    &.router-link-exact-active {
      color: #ff662d;
    }
  }
}

</style>
