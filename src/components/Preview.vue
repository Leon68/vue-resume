<template>
  <div id='preview'>
    <section>
      <h1>个人信息</h1>
      <h2>{{resumeData.profile.name || '请填写姓名'}}</h2>
      <p>{{resumeData.profile.age || '请填写年龄'}}</p>
      <p>{{resumeData.profile.gender || '请填写学历'}}</p>
      <p>{{resumeData.profile.birthday || '请填写出生年月'}}</p>

    </section>
    <hr>
    <section>
      <h1>联系方式</h1>
      <p>{{resumeData.contacts.mobile || '请填写手机号码'}}</p>
      <p>{{resumeData.contacts.qq || '请填写QQ号码'}}</p>
      <p>{{resumeData.contacts.email || '请填写邮箱'}}</p>
      <p>{{resumeData.contacts.github || '请填写github地址'}}</p>
    </section>
    <section v-if="filter(resumeData.workExperiences).length > 0">
      <h1>工作经历</h1>
      <ul>
        <li v-for="work in filter(resumeData.workExperiences)">
          <h2>{{work.company}}</h2>
          <p>{{work.content}}</p>
        </li>
      </ul>
    </section>
    <section v-if="filter(resumeData.studyExperiences).length > 0">
      <h1>教育背景</h1>
      <ul>
        <li v-for="study in filter(resumeData.studyExperiences)">
          <h2>{{study.school}}</h2>
          <p>{{study.duration}}</p>
          <p>{{study.degree}}</p>
        </li>
      </ul>
    </section>
    <section v-if="filter(resumeData.projects).length > 0">
      <h1>项目情况</h1>
      <ul>
        <li v-for="project in filter(resumeData.projects)">
          <h2>{{project.name}}</h2>
          <p>{{project.technology}}</p>
          <p>{{project.content}}</p>
        </li>
      </ul>
    </section>
    <section v-if="filter(resumeData.awards).length > 0">
      <h1>获奖情况</h1>
      <ul>
        <li v-for="award in filter(resumeData.awards)">
          <h2>{{award.name}}</h2>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
  export default {
    computed: {
      resumeData(){
        return this.$store.state.resumeData
      }
    },
    methods: {
      filter(array){
       return array.filter(obj => !this.isEmpty(obj))
      },
      isEmpty(obj){
        let empty = true
        for (let key in obj){
          if (obj[key]){
            empty = false
            break
          }
        }
        return empty

      }
    }

  }
</script>
<style lang='scss'>
  #preview {
    overflow: auto;
    flex-grow: 1;
    margin: 16px 16px 16px 8px;
    paddding: 32px;
    border-radius: 4px;
    box-shadow: 4px 4px 8px 4px #999;
    color: #000;
    background-color: #fff;
    section {
      padding: 32px;
      p {
        padding: 8px 2px;
      }
    }
  }
</style>


