<template>
  <div class="container">
    <input
      @blur="emitReset"
      v-model="vValue"
      :placeholder="placeholder"
      :type="type"
      class="input"
      :name="name"
    />
    <div class="error">{{ validError }}</div>
  </div>
</template>

<script>
export default {
  name: 'Input',
  data: () => ({
    inputValue: '',
    validError: ''
  }),
  props: {
    placeholder: { type: String },
    type: { type: String },
    name: { type: String },
    rules: { type: Object },
    noValidate: { type: Boolean }
  },
  computed: {
    vValue: {
      get () {
        return this.inputValue
      },
      async set (value) {
        if (!this.noValidate) {
          const isValid = await this.rules
            .validate(value)
            .then(res => res)
            .catch(er => er)
          if (isValid.errors) {
            const newArr = [...isValid.errors[0].split(' ')]
            newArr.splice(7, 20)
            this.validError = newArr.join(' ')
          } else {
            this.validError = ''
          }
        }
        this.inputValue = value
        this.$emit('onSubmit', this.inputValue, Boolean(this.validError))
      }
    }
  },
  methods: {
    resetInput () {
      this.vValue = ''
    },
    emitReset () {
      this.$emit('resetInput', this.resetInput)
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  min-width: 220px;
  min-height: 40px;
  @media (max-width: 1125px) {
    width: 100%;
    height: 100%;
  }
  box-shadow: 17px 18px 30px -15px rgba(0, 0, 0, 0.41);
  border: #ff662d solid 1px;
  &::placeholder {
    color: grey;
  }
  &:focus {
    border-style: none;
    outline: 1px solid black;
  }
}
.error {
  color: red;
  font-size: 10px;
  position: absolute;
  left: 23px;
  bottom: -15px;
}
.container {
  position: relative;
}
</style>
