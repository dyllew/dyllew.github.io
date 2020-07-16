<template>
  <div id="app" class="container-fluid d-flex flex-column mh-100">
    <div class="row justify-content-center">
      <div class="col page-header">
        <div class="row justify-content-center">
          <h1 id="name"> Dylan Lewis </h1>
          <!-- <span style="font-size: 3em; color:Mediumslateblue ;">
            <i class="fab fa-linkedin"></i>
          </span> -->
        </div>
        <div id="nav-bar" class="row justify-content-center">
          <router-link class="router-link" to="/about">About</router-link> |
          <router-link class="router-link" to="/projects">Projects</router-link> |
          <router-link class="router-link" to="/artwork">Artwork</router-link> |
          <router-link class="router-link" to="/resume">Resume</router-link>
        </div>
      </div>
    </div>
    <div class="row flex-grow-1">
      <router-view></router-view>
    </div>
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

html {
  font-size: 1rem;
}

@include media-breakpoint-up(sm) {
  html {
    font-size: 1.2rem;
  }
}

@include media-breakpoint-up(md) {
  html {
    font-size: 1.4rem;
  }
}

@include media-breakpoint-up(lg) {
  html {
    font-size: 1.6rem;
  }
}

</style>
