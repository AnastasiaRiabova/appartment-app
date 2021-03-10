<template>
  <Container>
    <div>
      <h1 class="orders-header">Your Orders</h1>
      <p v-if="getOrders.length < 1">you have no orders</p>
      <div
        v-for="{ apartment, id, date } in getApartment"
        :key="id"
        class="orders"
      >
        <img
          :src="apartment.imgUrl"
          alt="Flat-foto"

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
          <Button @click.native="toDeleteItem(id)">delete order</Button>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Container from '../components/shared/Container'
import Button from '../components/shared/Button'
export default {
  name: 'Orders',
  components: {
    Container,
    Button
  },
  computed: {
    ...mapGetters(['getOrders']),
    getApartment () {
      return this.getOrders
    }
  },
  methods: {
    ...mapActions(['fetchOrders', 'deleteOrder']),
    async toDeleteItem (id) {
      try {
        await this.deleteOrder(id)
        this.$notify({
          group: 'foo',
          text: 'Your order was successfully deleted',
          title: 'Hurrah...',
          type: 'success'
        })
      } catch (error) {
        this.$notify({
          group: 'foo',
          title: 'Something went wrong',
          text: error,
          type: 'error'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.orders {
  display: flex;
  padding: 20px;
  width: 100%;
  @media (max-width: 900px) {
    display: block;
    padding: 0px;
  }
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
    width: 40%;
    height: 40%;
    @media (max-width: 900px) {
      width: 100%;
      min-width: 0;
    }
  }
  &-items {
    margin-bottom: 10px;
  }
}
</style>
