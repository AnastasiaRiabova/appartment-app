<template>
  <Container>
    <div>
      <h1 class="orders-header">Your Orders</h1>
      <div
        v-for="{ apartment, id, date } in getApartment"
        :key="id"
        class="orders"
      >
        <img
          :src="apartment.imgUrl"
          alt="Flat-foto"
          width="500px"
          class="orders-image"
        />

        <div class="orders-descrpt">
          <h2>{{ apartment.title }}</h2>
          <p class="orders-items">City: {{ apartment.location.city }}</p>
          <p class="orders-items">
            Price:
            {{
              apartment.price.toLocaleString("de-DE", {
                style: "currency",
                currency: "EUR"
              })
            }}
            for one Night
          </p>
          <p class="orders-items">
            Date:
            {{
              new Date(date).toLocaleDateString("de-DE", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit"
              })
            }}
          </p>
        <button>delete order</button>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Container from '../components/shared/Container'
export default {
  name: 'Orders',
  components: {
    Container
  },
  computed: {
    ...mapGetters(['getOrders']),
    getApartment () {
      console.log(this.getOrders)
      return this.getOrders
    }
  },
  methods: {
    ...mapActions(['fetchOrders'])
  },
  created () {
    this.fetchOrders()
  }
}
</script>

<style lang="scss" scoped>
.orders {
  display: flex;
  padding: 20px;
  width: 100%;
  &-header {
    padding: 20px;

  }
  &-descrpt {
    border: 1px solid #e1efff;
    padding: 10px;
    width: 100%;
  }
  &-image {
    margin: 0;
    min-width: 500px;
  }
  &-items {
    margin-bottom: 10px;

  }
}
</style>
