<template>
  <div id='editor'>
    <nav>
      <ul>
        <li v-for='i in [0,1,2,3,4,5,6]'
            v-bind:class='{active: currentTab === i}'
            v-on:click='currentTab = i'>
          <svg class="icon">
            <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
          </svg>
        </li>
      </ul>
    </nav>

    <div class="content">
      <ul>
        <li v-bind:class='{active: currentTab === 0}'>
          <ProfileEditor :profile="profile" />
        </li>

        <li v-bind:class='{active: currentTab === 1}'>
          <h2>兴趣爱好</h2>
          <el-form v-for="(h,index) in hobby">
            <el-form-item label="爱好">
              <el-input v-model="h.hobby"></el-input>
            </el-form-item>
            <i class="el-icon-circle-close" v-on:click="deleteHobby(index)"></i>
            <hr>
          </el-form>
          <el-button v-on:click="addHobby" type="primary">添加</el-button>
        </li>

        <li v-bind:class='{active: currentTab === 2}'>
          <WorkEditor :workExperiences="workExperiences" />
        </li>
        <!--
        <li v-bind:class='{active: currentTab === 3}' >
          <h2>教育背景</h2>
          <el-form :label-position="labelPosition" label-width="80px" :model="studyExperinces">
            <el-form-item label="姓名">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="年龄">
              <el-input v-model="formLabelAlign.age"></el-input>
            </el-form-item>
            <el-form-item label="性别">
              <el-input v-model="formLabelAlign.gender"></el-input>
            </el-form-item>
            <el-form-item label="出生年月">
              <el-input v-model="formLabelAlign.birthday"></el-input>
            </el-form-item>
          </el-form>
        </li>
        <li v-bind:class='{active: currentTab === 4}' >
          <h2>项目情况</h2>
          <el-form :label-position="labelPosition" label-width="80px" :model="project">
            <el-form-item label="姓名">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="年龄">
              <el-input v-model="formLabelAlign.age"></el-input>
            </el-form-item>
            <el-form-item label="性别">
              <el-input v-model="formLabelAlign.gender"></el-input>
            </el-form-item>
            <el-form-item label="出生年月">
              <el-input v-model="formLabelAlign.birthday"></el-input>
            </el-form-item>
          </el-form>
        </li>
        <li v-bind:class='{active: currentTab === 5}' >
          <h2>获奖信息</h2>
          <el-form :label-position="labelPosition" label-width="80px" :model="awards">
            <el-form-item label="姓名">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="年龄">
              <el-input v-model="formLabelAlign.age"></el-input>
            </el-form-item>
            <el-form-item label="性别">
              <el-input v-model="formLabelAlign.gender"></el-input>
            </el-form-item>
            <el-form-item label="出生年月">
              <el-input v-model="formLabelAlign.birthday"></el-input>
            </el-form-item>
          </el-form>
        </li>
        <li v-bind:class='{active: currentTab === 6}' >
          <h2>联系方式</h2>
          <el-form :label-position="labelPosition" label-width="80px" :model="contact">
            <el-form-item label="姓名">
              <el-input v-model="contact.name"></el-input>
            </el-form-item>
            <el-form-item label="年龄">
              <el-input v-model="contact.age"></el-input>
            </el-form-item>
            <el-form-item label="性别">
              <el-input v-model="formLabelAlign.gender"></el-input>
            </el-form-item>
            <el-form-item label="出生年月">
              <el-input v-model="formLabelAlign.birthday"></el-input>
            </el-form-item>
          </el-form>
        </li>
        -->
      </ul>
    </div>
  </div>
</template>
<script>
  import ProfileEditor from './ProfileEditor.vue'
  import WorkEditor from './WorkEditor.vue'
  export default {
    components: {
      ProfileEditor,WorkEditor
    },
    data() {
      return {
        currentTab: 0,
        icons: ['gerenxinxi', 'xingquaihao', 'gongzuo2', 'xuexi', 'xiangmu', 'jiangbei1', '-Gmailzhuanhuan'],
        profile: {
          name: '',
          age: '',
          gender: '',
          birthday: ''
        },
        hobby: [
          {hobby: ''}
        ],

        workExperiences: [
          {company: '', content: ''}
        ]
      }
    },
    methods: {
      addHobby() {
        this.hobby.push({hobby: ''})
      },
      deleteHobby(index) {
        this.hobby.splice(index, 1)
      },
    }
  }
</script>
<style lang='scss'>
  #editor {
    display: flex;
    width: 600px;
    min-height: 600px;
    margin: 16px 8px 16px 16px;
    border-radius: 4px;
    box-shadow: 4px 4px 8px 4px #999;
    background-color: #fff;
    overflow:hidden;
    nav {
      background-color: black;
      border-radius: 4px;
      ul {
        li {
          font-size: 40px;
          border-radius: 4px;
          padding: 20px;
        }
        .active {
          background-color: #fff;
        }
      }
    }
    .content {
      flex: 1;
      overflow: auto;
      ul {
        li {
          h2 {
            margin-bottom: 32px;
            text-align: center;
          }
          display: none;
          margin: 32px;
        }
        .active {
          display: block;
        }
      }

    }
  }
</style>


