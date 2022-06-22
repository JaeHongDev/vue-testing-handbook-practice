<template>
  <div>
    <span v-if="isAdmin">Admin Privileges</span>
    <span v-else>Not Authorized</span>
    <button>
      {{msg}}
    </button>
  </div>
</template>

<script>
export default {
  name: "SubimtButton",
  props: {
    msg: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    }
  },

}
</script>

<style scoped>

</style>
