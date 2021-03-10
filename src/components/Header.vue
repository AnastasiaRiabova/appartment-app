<template>
  <div class="header-main">
    <Container>
      <div class="header">
        <button @click="resetFilter" class="button-style">
          <img src="../assets/images/Logo.svg" alt="Logo" class="logo" />
        </button>
        <router-link to="/orders" class="orders" v-if="isAuth">
          My Orders<span class="orders-number" v-if="getOrders.length > 0">{{
            getOrders.length
          }}</span></router-link
        >
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
    ...mapActions(['toLogOutUser', 'clearFilter']),
    async toLogOut () {
      try {
        await this.toLogOutUser()
        this.$router.push({ name: 'login' })
      } catch (error) {
        this.$notify({
          group: 'foo',
          title: 'Something went wrong',
          text: error,
          type: 'error'
        })
      }
    },
    resetFilter () {
      this.$router.push('/')
      this.clearFilter()
    }
  },
  computed: {
    ...mapGetters(['isAuth', 'toGetName', 'getOrders'])
  }
}
</script>

<style lang="scss" scoped>
.orders {
  color: #ffffff;
  @media (max-width: 900px) {
    font-size: 14px;
  }

  &-number {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #fff;
    color: #000000;
    text-align: center;
    display: inline-block;
    top: 6px;
    padding: 4px;
    position: absolute;
  }
}
.button {
  &-position {
    width: 20%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    color: white;
    padding: 5px 20px;
    @media (max-width: 1200px) {
      & > div,
      & > img {
        display: none;
      }
    }
  }
  &-style {
    border: none;
    margin: 0;
    padding: 3px;
    width: auto;
    overflow: visible;
    cursor: pointer;
    background: transparent;
    &:focus {
      outline: none;
    }
  }
}
.logo {
  padding: 10px 20px;
}

.header {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &-main {
    width: 100%;
    background-color: #0f1d2d;
    height: 60px;
  }
}

#nav {
  padding: 10px 30px 10px 0;
  color: #ffffff;

  display: inline-block;

  a {
    color: #ffffff;

    &.router-link-exact-active {
      color: #ff662d;
    }
  }
}
</style>
