<template>
  <div id="app">
    <notifications group="foo"  width ="700px"/>
    <Loader v-if="getLoader" />
    <ModalWindow v-if="getModalWindow">
      <ReviewsForm />
    </ModalWindow>
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
import ModalWindow from './components/shared/ModalWindow'
import ReviewsForm from './components/ReviewsForm'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: { Header, Footer, Loader, ModalWindow, ReviewsForm },

  computed: {
    ...mapGetters(['isAuth', 'getLoader', 'getModalWindow']),
    isLogin () {
      return Boolean(this.isAuth)
    }
  }

}
</script>

<style lang="scss">
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  height: calc(100% - 90px);
}
.login {
  background-image: url("./assets/images/BackgroundIMG.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100%;
  display: flex;
    align-items: center;
  /* padding: 50px; */
}
.authUser {
  padding: 50px;
  min-height: 100%;
     @media (max-width: 1220px) {
padding: 20px
}

}
</style>
