<template>
  <div id="app" class="container-fluid h-100">
    <Header />
    <NavBar v-if="this.$route.path !== `/`" />
    <div class="row align-items-stretch p-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header';
import NavBar from './components/NavBar';

export default {
  name: 'App',
  components: {
    Header,
    NavBar,
  }
}
</script>

<style>
html, body {
  height: 100%;
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
