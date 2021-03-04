<template>
<div @change="toGetInputValue">
    <input v-model="inputValue" :placeholder='placeholder' :type="type" class="input"/>
    </div>
</template>

<script>
export default {
  name: 'Input',
  data: () => ({
    inputValue: ''
  }),
  props: {
    placeholder: { type: String },
    type: { type: String }
  },
  methods: {
    toGetInputValue () {
      this.$emit('onSubmit', this.inputValue)
    }
  }
}
</script>

<style lang="scss" scoped>
.input{

    min-width: 220px;
    min-height: 40px;
    box-shadow: 17px 18px 30px -15px rgba(0,0,0,0.41);
 border: #ff662d solid 1px;
 &::placeholder{
   color :grey
 }
  &:focus{
border-style:none;
outline: 1px solid black;
 }
}
</style>
