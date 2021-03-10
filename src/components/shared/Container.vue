<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'container'
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1460px;
  margin: 0 auto;
  padding: 0 30px;
  height: 100%;
   @media (max-width: 900px) {
padding: 0 15px;
}
}
</style>
