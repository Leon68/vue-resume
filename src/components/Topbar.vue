
<template>
  <div id='topbar'>
    <div class="logo">Resumer</div>
    <div class="actions">
       <el-button type="primary">注册</el-button>
       <el-button >登录</el-button>
      <el-button type="primary" v-on:click="preview">预览</el-button>
    </div>

  </div>
</template>
<script>
  export default {
    props:['pre'],
    methods:{
      preview(){
        this.$emit('pre')
      },
    }
  }

</script>
<style lang='scss'>
  #topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    padding: 16px;
    font-size: 20px;
    box-shadow: 0 2px 4px 4px #888;
    background-color: #fff;
    border-radius: 4px;
  }
</style>


