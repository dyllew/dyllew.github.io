<template>
  <div id="app">
    <div id="site-header">
      <h1 id="name"> Dylan R. Lewis </h1>
      <div id="nav-bar">
        <router-link to="/about">About</router-link> |
        <router-link to="/projects">Projects</router-link> |
        <router-link to="/artwork">Artwork</router-link> |
        <router-link to="/resume">Resume</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
body {
  margin: 0 0 0 0;
}

#app {
  font-family: Courier, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: turquoise;
  height: 120vh;
  width: 100vh;
  background-color: #080707;
  display: flex;
  flex-direction: column;
}

#nav-bar {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 20px;
  right: 0;
  left: 0;
  margin-right: auto;
  margin-left: auto;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
