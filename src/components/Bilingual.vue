<template>
  <div class="hello">
    {{$t("helloWorld")}}
  </div>
</template>

<script>
export default {
  name: "Bilingual",
  "en": {
    helloWorld: "Hello world!"
  },
  "ja": {
    helloWorld: "こんにちは、世界！"
  }
}
</script>

<style scoped>

</style>
