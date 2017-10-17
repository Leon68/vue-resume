<template>
  <div>
    <h2>{{title}}</h2>
    <el-form >
      <el-form-item v-for="(value,key) in items" :label="labels[key]" :key="key">
        <el-input v-model="items[key]"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:['items','labels','title'],
  }
</script>

