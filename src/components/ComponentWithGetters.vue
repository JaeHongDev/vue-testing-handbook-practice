<template>
  <div>
    <div class="username">
      {{username}}
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponentWithGetters",
  data(){
    return {
      username: this.$store.state.username
    }
  }
}
</script>

<style scoped>

</style>
