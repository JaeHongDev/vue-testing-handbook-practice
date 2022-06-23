<template>
  <div>
    <span v-show="showSpan">
      Parent Component
    </span>
    <Child v-if="showChild"/>
  </div>
</template>

<script>
import Child from "@/components/Child.vue";

export default {
  name: "Parent",
  components: {Child},

  data() {
    return {
      showSpan: true,
      showChild: false,
    }
  }
}
</script>

<style scoped>

</style>
