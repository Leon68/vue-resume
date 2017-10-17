<template>
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

</template>

<script type="text/ecmascript-6">
  export default {
    props
  }

</script>

<style lang="stylus" type="text/stylus">

</style>
