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
          <ProfileEditor :items="profile" :title="'个人信息'" :labels="{name: '名字',age: '年龄',gender: '学历',birthday: '生日'}"/>
        </li>
        <li v-bind:class='{active: currentTab === 1}'>
          <ArrayEditor :items="hobbys" :title="'爱好'" :labels="{hobby:'爱好'}"/>
        </li>
        <li v-bind:class='{active: currentTab === 2}'>
          <ArrayEditor  :items="workExperiences" :title="'工作经历'" :labels="{company:'公司',content: '工作内容'}"/>
        </li>
        <li v-bind:class='{active: currentTab === 3}' >
          <ArrayEditor  :items="studyExperiences" :title="'学习经历'" :labels="{school:'学校',duration: '时间段',degree:'学位'}"/>
        </li>
        <li v-bind:class='{active: currentTab === 4}' >
          <ArrayEditor  :items="projects" :title="'项目情况'" :labels="{name:'项目名称',technology: '技术栈',content:'项目内容'}"/>
        </li>
        <li v-bind:class='{active: currentTab === 5}' >
          <ArrayEditor  :items="awards" :title="'获奖情况'" :labels="{name:'奖励详情'}"/>
        </li>
        <li v-bind:class='{active: currentTab === 6}' >
          <ProfileEditor :items="contact"  :title="'联系方式'":labels="{mobile: '手机',qq: 'QQ',email: '邮箱',github: 'github'}"/>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import ProfileEditor from './ProfileEditor.vue'
  import ArrayEditor from './ArrayEditor.vue'
  export default {
    components: {
      ProfileEditor,ArrayEditor
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
        hobbys: [
          {hobby: ''}
        ],
        awards: [
          {name: ''}
        ],
        workExperiences: [
          {company: '', content: ''}
        ],
        studyExperiences: [
          {school:'', duration:'', degree:''}
        ],
        projects: [
          {name:'', technology:'', content:''}
        ],
        contact: {
          mobile: '',
          qq: '',
          email: '',
          github: ''
        },
      }
    },
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


