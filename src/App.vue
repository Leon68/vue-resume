<template>
  <div id="app" :class="{previewApp: pre}" >
    <Topbar class='topbar' v-on:pre="preview"/>
    <main>
      <Editor/>
      <Preview/>
    </main>
    <el-button type="primary" class="exit":class="{exitPre: pre}" @click="exitPreview">退出预览</el-button>
  </div>
</template>

<script>
  import Topbar from './components/Topbar'
  import Editor from './components/Editor'
  import Preview from './components/Preview'
  import store from './store/index'

  export default {
    name: 'app',
    store,
    components: {
      Topbar, Editor, Preview
    },
    methods: {
      preview(){
        this.pre = true
      },
      exitPreview(){
        this.pre = false
      }

    },
    data() {
      return {
        pre: false,
      }
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
    main {
      display: flex;
      flex-grow: 1;
      overflow: hidden;
    }
    .exit {
      display: none;
      position: fixed;
      right: 16px;
      bottom: 16px;
    }
  }

  .previewApp>main>#editor {
    display: none;
  }
  .previewApp #preview {
    max-width: 1000px;
    margin: 16px auto;
  }
  .previewApp #topbar {
    display: none;
  }
  #app .exitPre {
    display: inline-block;
    background-color: #f9c855;
  }

</style>
