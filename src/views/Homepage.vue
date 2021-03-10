<template>
  <Container>
    <div class="inputs">
      <div class="input-position">
        <select v-model="selectedCity" class="selected-input">
          <option value="">Choose city</option>
          <option v-for="city in toGetCities" :key="city">{{ city }}</option>
        </select>
        <Input
          @resetInput="clearInput"
          @onSubmit="toGetPrice"
          placeholder="Price to"
          type="number"
          :rules="isValidField"
          :noValidate="true"
        />
        <div class="filter">
          <div v-if="selectedCity" class="filter-city">
            City: {{ selectedCity }}
          </div>
          <div v-if="apartmentPrice" class="filter-price">
            Price: {{ apartmentPrice }}
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
import { number } from 'yup'
import { mapActions, mapGetters } from 'vuex'
import Input from '../components/shared/Input'
import Container from '../components/shared/Container'
import Button from '../components/shared/Button'
import ApartmentItem from '../components/ApartmentItem'

export default {
  name: 'Homepage',
  components: { Input, Button, ApartmentItem, Container },
  data: () => ({
    selectedCity: '',
    apartmentPrice: '',
    isValidField: number(),
    function: ''
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
      this.$router.push({
        path: '/',
        query: { city: this.selectedCity, price: this.apartmentPrice }
      })
      this.filterApartments({
        city: this.selectedCity,
        price: this.apartmentPrice
      })
    },
    toGetPrice (price) {
      this.apartmentPrice = price
    },
    resetFilter () {
      this.$router.push('/')
      this.clearFilter()
      // this.function()
      this.selectedCity = ''
      this.apartmentPrice = ''
    },
    clearInput (foo) {
      this.function = foo
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
.inputs {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  padding: 0 20px;
}
.input-position {
  display: flex;
}
.selected-input {
  margin-right: 20px;
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
