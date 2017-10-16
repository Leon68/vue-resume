<template>
  <div>
    <h2 >{{title}}</h2>
    <el-form class="container" v-for="(item,index) in items" :key="index">
      <el-form-item v-for="key in keys" :label="labels[key] || key" :key="key">
        <el-input v-model="item[key]"></el-input>
        {{item}}
      </el-form-item>
      <i class="el-icon-circle-close delete" v-on:click="deleteItem(index)"></i>
      <hr>
    </el-form>
    <el-button v-on:click="addItem" type="primary">添加</el-button>

  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    props:['items','title','labels'],
    computed: {
      keys(){
        return Object.keys(this.items[0])
      }
    },
    methods: {
      addItem() {
        const empty={}
        this.initialKeys.forEach(i =>{
         empty[i]=''
        })
        this.items.push(empty)
      },
      deleteItem(index) {
          this.items.splice(index, 1)
        console.log(this.keys)
      }

    }
  }

</script>

<style lang="scss">
  .container {
    position: relative;
    .delete {
      position: absolute;
      top: 4px;
      right: 4px;

    }
    hr {
      margin: 16px 4px;
    }

  }

</style>
