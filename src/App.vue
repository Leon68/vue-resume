<template>
  <div id="app">
    <Topbar class='topbar'/>
    <main>
      <Editor class='editor'/>
      <Preview class='preview'/>
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
    Topbar,Editor,Preview
  }
}
</script>

<style lang='scss'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: flex;
  flex-direction: column; 
  background-color: rgba(1,1,1,0.5);
}
.topbar {
}
main {
  display: flex;
  flex-grow: 1;
  .editor {
  }
  .preview {
    flex-grow: 1;
  }
}
</style>
