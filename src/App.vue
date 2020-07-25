<template>
  <div id="app" class="container-fluid p-3 min-vh-100">
    <Header />
    <NavBar v-if="this.$route.path !== `/` && this.$route.path !== `/404`" />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header';
import NavBar from './components/NavBar';

export default {
  name: 'App',
  components: {
    Header,
    NavBar
  }
}
</script>

<style>

html {
  height: 100vh;
}

body {
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Courier, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: turquoise;
  background-color: #080707;
}

</style>
