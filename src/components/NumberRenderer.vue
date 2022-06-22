<template>
  <div>{{ renderNumber }}</div>
</template>

<script>
export default {
  name: "NumberRenderer",
  props:{
    even:{
      type:Boolean,
      required:true
    }
  },
  computed:{
    renderNumber(){
      return this.getNumberArrays(this.even).join(", ");
    }
  },
  methods:{
    getNumberArrays(status){
      const array = [];
      for(let i = 1;i<9;i++){
        if( i % 2 == status) array.push(i);
      }
      return array;
    }
  }
}
</script>

<style scoped>

</style>
