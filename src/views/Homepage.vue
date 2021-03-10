<template>
  <Container>
    <div class="inputs">
      <div class="input-position">
        <select v-model="selectedCity" class="selected-input">
          <option value="">Choose city</option>
          <option v-for="city in toGetCities" :key="city">{{ city }}</option>
        </select>
        <input
          class="input"
          placeholder="Price to"
          type="number"
          v-model="apartmentPrice"
        />
        <div class="filter">
          <div v-if="selectedCity" class="filter-city">
            {{ selectedCity }}
          </div>
          <div v-if="apartmentPrice" class="filter-price">
            {{ apartmentPrice }}
          </div>
          <button
            v-if="selectedCity || apartmentPrice"
            @click="resetFilter"
            class="filter-button"
          >
            <img src="../assets/images/close.svg" alt="cross" width="15px" />
          </button>
        </div>
      </div>
      <Button @click.native="filterApartment">Filter</Button>
    </div>
    <div class="apartments-list">
      <p v-if="toGetApartments.length === 0">nothing found</p>
      <ApartmentItem
        v-for="flat in toGetApartments"
        :key="flat.id"
        :descr="flat.descr"
        :price="flat.price"
        :imgUrl="flat.imgUrl"
        :rating="flat.rating"
        :id="flat.id"
        class="apartments-list__item"
      />
    </div>
  </Container>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import Container from '../components/shared/Container'
import Button from '../components/shared/Button'
import ApartmentItem from '../components/ApartmentItem'

export default {
  name: 'Homepage',
  components: { Button, ApartmentItem, Container },
  data: () => ({
    selectedCity: '',
    apartmentPrice: ''
  }),
  computed: {
    ...mapGetters(['toGetCities', 'toGetApartments'])
  },
  methods: {
    ...mapActions([
      'fetchCities',
      'fetchApartments',
      'filterApartments',
      'fetchOrders',
      'clearFilter'
    ]),
    filterApartment () {
      if (this.selectedCity || this.apartmentPrice) {
        this.$router.push({
          path: '/',
          query: { city: this.selectedCity, price: this.apartmentPrice }
        })
        this.filterApartments({
          city: this.selectedCity,
          price: this.apartmentPrice
        })
      }
    },

    resetFilter () {
      this.$router.push('/')
      this.clearFilter()
      // this.function()
      this.selectedCity = ''
      this.apartmentPrice = ''
    }

  },
  async created () {
    if (Object.keys(this.$router.history.current.query).length > 0) {
      this.selectedCity = this.$router.history.current.query.city
      this.apartmentPrice = this.$router.history.current.query.price
    }
    try {
      await this.fetchApartments()
      await this.fetchOrders()
      await this.fetchCities()
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
</script>

<style lang="scss" scoped>
.input {
  min-width: 220px;
  min-height: 40px;
  box-shadow: 17px 18px 30px -15px rgba(0, 0, 0, 0.41);
  border: #ff662d solid 1px;
  margin: 0 20px;
  &::placeholder {
    color: grey;
  }
  &:focus {
    border-style: none;
    outline: 1px solid black;
  }
}
.inputs {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  padding: 0 20px;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
}
.input-position {
  display: flex;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
}
.selected-input {
  min-width: 220px;
  min-height: 40px;
  box-shadow: 17px 18px 30px -15px rgba(0, 0, 0, 0.41);
  border: #ff662d solid 1px;
  color: #808080;
  &:focus {
    border-style: none;
    outline: 1px solid black;
  }
}
.apartments-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;

  &__item {
    margin-bottom: 30px;
  }
}
.filter {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(128, 128, 128, 0.694);

  &-city {
    margin-right: 9px;
    margin-left: 9px;
    color: white;
  }
  &-price {
    color: white;
    margin-right: 9px;
    margin-left: 9px;
  }
  &-button {
    border: none;
    margin: 0;
    width: auto;
    cursor: pointer;
    background: transparent;
  }
}
</style>
