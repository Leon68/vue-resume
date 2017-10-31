<template>
  <div>
    <h2 >{{title}}</h2>
    <el-form class="container" v-for="(item,index) in items" :key="index">
      <el-form-item v-for="key in keys" :label="labels[key] || key" :key="key">
        <el-input :value="value" @input="changeResumeField(item,key,@event.target.value)"></el-input>
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
      changeResumeField(field,subfield,value){
        this.$store.commit('updateResume',{
          field,
          subfield,
          value
        })
      },
      addItem() {
        const empty={}
        this.keys.forEach(i =>{
         empty[i]=''
        })
        this.items.push(empty)
      },
      deleteItem(index) {
        if (this.items.length > 1){
          this.items.splice(index, 1)
        }
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
