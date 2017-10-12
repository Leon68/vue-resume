<template>
  <div>
    <h2>工作经历</h2>
    <el-form v-for="(work,index) in workExperiences">
      <el-form-item label="公司">
        <el-input v-model="work.company"></el-input>
      </el-form-item>
      <el-form-item label="工作内容">
        <el-input v-model="work.content"></el-input>
      </el-form-item>
      <i class="el-icon-circle-close" v-on:click="deleteWork(index)"></i>
      <hr>
    </el-form>
    <el-button v-on:click="addWork" type="primary">添加</el-button>

  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    props:['workExperiences'],
    methods: {
      addWork() {
        this.workExperiences.push({
          company: '', content: ''
        })
      },
      deleteWork(index) {
        this.workExperiences.splice(index, 1)
      }

    }
  }

</script>

<style lang="scss">

</style>
