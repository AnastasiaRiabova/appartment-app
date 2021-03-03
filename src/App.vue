<template>
  <div id="app">
    <Header />
    <div :class="{ 'test': isLogIn}">
    <router-view />
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: { Header, Footer },
  data: () => ({
    isLogIn: true
  })
}
</script>
<style lang="scss">
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
height: calc(100% - 90px) ;
}
.test{

  background-image: url('./assets/images/BackgroundIMG.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
height: 100%;
padding: 50px;
}

</style>
