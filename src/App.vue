<template>
  <div id="app">
    <Topbar class='topbar'/>
    <main>
      <Editor :resumeData="resumeData" class='editor'/>
      <Preview :resumeData="resumeData" class='preview'/>
    </main>
  </div>
</template>

<script>
  import Topbar from './components/Topbar'
  import Editor from './components/Editor'
  import Preview from './components/Preview'

  export default {
    name: 'app',
    components: {
      Topbar, Editor, Preview
    },
    data() {
      return {
        resumeData: {
          profile: {
            name: '',
            age: '',
            gender: '',
            birthday: ''
          },
          awards: [
            {name: ''}
          ],
          workExperiences: [
            {company: '', content: ''}
          ],
          studyExperiences: [
            {school: '', duration: '', degree: ''}
          ],
          projects: [
            {name: '', technology: '', content: ''}
          ],
          contacts: {
            mobile: '',
            qq: '',
            email: '',
            github: ''
          },
        }
      }
    },
    createrd(){
    }
  }
</script>

<style lang='scss'>
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    background-color: #ccc;
    display: flex;
    flex-direction: column;
    /*overflow: hidden;*/
    main {
      display: flex;
      flex-grow: 1;
      overflow: hidden;
      .editor {
      }
      .preview {
        flex-grow: 1;
      }
    }
  }


</style>
