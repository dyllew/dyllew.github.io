<template>
  <div id="app">
    <RootContainer/>
  </div>
</template>

<script>
import RootContainer from './components/RootContainer.vue'

export default {
  name: 'App',
  components: {
    RootContainer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background:
  margin-top: 60px;
}
</style>
