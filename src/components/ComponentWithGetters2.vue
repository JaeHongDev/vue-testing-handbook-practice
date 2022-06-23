<template>
  <div class="fullname">
    {{ fullname }}
  </div>
</template>

<script>
export default {
  name: "ComponentWithGetters2",
  computed: {
    fullname() {
      return this.$store.getters.fullname
    }
  }
}
</script>

<style scoped>

</style>
