<template>
  <Container>
    <div class="inputs">
      <div class="input-position">
        <select v-model="selectedCity" class="selected-input">
          <option value="">Choose city</option>
          <option v-for="city in toGetCities" :key="city">{{ city }}</option>
        </select>
        <Input placeholder="Price from" type="text" v-model="price" />
      </div>
      <Button>Filter</Button>
    </div>
    <div class="apartments-list">
    <ApartmentItem
      v-for="flat in toGetApartments"
      :key="flat.id"
      :descr="flat.descr"
      :price="flat.price"
      :imgUrl="flat.imgUrl"
      :rating='flat.rating'
      :id='flat.id'
      class="apartments-list__item"
    />
    </div>
  </Container>
</template>

<script>
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
    price: ''
  }),
  computed: {
    ...mapGetters(['toGetCities', 'toGetApartments'])
  },
  methods: {
    ...mapActions(['fetchCities', 'fetchApartments'])
  },
  created () {
    this.fetchCities()
    this.fetchApartments()
  }
}
</script>

<style lang="scss" scoped>
.inputs {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  /* padding: 30px; */
}
.input-position {
  display: flex;
  /* justify-content: space-between; */
}
.selected-input {
  /* margin-bottom: 20px; */
  margin-right: 20px;
  min-width: 220px;
  min-height: 40px;
  box-shadow: 17px 18px 30px -15px rgba(0, 0, 0, 0.41);
  border: #ff662d solid 1px;
  color: grey;
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
</style>
