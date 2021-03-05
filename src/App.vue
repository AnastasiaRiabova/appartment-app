<template>
  <div id="app">
    <Loader v-if="getLoader"/>
    <Header />
    <div :class="isLogin ? 'authUser' : 'login'">
      <router-view />
    </div>
    <Footer />

  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Loader from './components/shared/Loader'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: { Header, Footer, Loader },

  computed: {
    ...mapGetters(['isAuth', 'getLoader']),
    isLogin () {
      return Boolean(this.isAuth)
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: calc(100% - 90px);
}
.login {
  background-image: url("./assets/images/BackgroundIMG.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100%;
  padding: 50px;
}
.authUser {
  padding: 50px;
   min-height: 100%;
}
</style>
