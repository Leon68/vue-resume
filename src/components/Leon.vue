<template>
  <div id='leon'>hello vue
    <hello></hello>
  </div>
</template> 
<script>
  import Hello from './Hello.vue'
  export default {
    name: 'leon',
    components: {
      Hello
    }
  }
</script>
<style>
  #leon {
    color: red; 
    border: 1px solid green;
  }
</style>


