<template>
  <div id="app" class="container-fluid">
    <div id="site-header" class="row">
      <h1 id="name"> Dylan Lewis </h1>
      <div id="nav-bar">
        <router-link class="router-link" to="/about">About</router-link> |
        <router-link class="router-link" to="/projects">Projects</router-link> |
        <router-link class="router-link" to="/artwork">Artwork</router-link> |
        <router-link class="router-link" to="/resume">Resume</router-link>
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

.router-link {
  color: turquoise;
}

.router-link:hover {
  color: whitesmoke;
}

.router-link-active {
  color: white;
  text-decoration: underline;
}

#app {
  font-family: Courier, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: turquoise;
  height: 120vh;
  background-color: #080707;
}

#nav-bar {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 20px;
}
</style>
