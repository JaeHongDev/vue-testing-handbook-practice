<template>
  <ComponentWithAsyncCall/>
</template>

<script>
import ComponentWithAsyncCall from "@/components/ComponentWithAsyncCall.vue";
export default {
  name: "ParentWithAPICallChild",
  components:{
    ComponentWithAsyncCall,
  }
}
</script>

<style scoped>

</style>
