<template>
    <div class="row pt-2 justify-content-center">
      <div id="nav-bar" class="col-md-12">
          <router-link class="router-link" to="/about">About</router-link> |
          <router-link class="router-link" to="/projects">Projects</router-link> |
          <router-link class="router-link" to="/artwork">Artwork</router-link> |
          <router-link class="router-link" to="/resume">Resume</router-link>
      </div>
    </div>  
</template>

<script>
export default {
  name: 'NavBar',
  components: {
  }
}
</script>

<style scoped>

#nav-bar {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 30px;
}

@media (max-width: 500px) {
    #nav-bar {
      font-size: 21px;
    }
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


</style>