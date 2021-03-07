<template>
  <div class="header-main">
    <Container>
      <div class="header">
        <router-link to="/">
          <img src="../assets/images/Logo.svg" alt="Logo" class="logo"
        /></router-link>
 <router-link to="/orders" class='orders'>
       My Orders</router-link>
        <div id="nav" v-if="!isAuth">
          <router-link to="/login">Login</router-link> /
          <router-link to="/registration">Registration</router-link>
        </div>
        <div v-if="isAuth" class="button-position">
          <div>Hello, {{ toGetName }}</div>
          <img
            src="../assets/images/man.svg"
            alt="man"
            width="20px"
            height="20px"
          />
          <button @click="toLogOut" class="button-style">
            <img
              src="../assets/images/Frame.svg"
              alt=""
              width="20px"
              height="20px"
            />
          </button>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from '../components/shared/Container'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Header',
  components: {
    Container
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
    ...mapGetters(['isAuth', 'toGetName'])
  }
}
</script>

<style lang="scss" scoped>
.orders{
  color: #ffffff
}
.button-position {
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  color: white;
  padding: 5px 20px;
}
.button-style {
  border: none;
  margin: 0;
  padding: 3px;
  width: auto;
  overflow: visible;
  cursor: pointer;
  background: transparent;
}
.logo {
  padding: 10px 20px;
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
