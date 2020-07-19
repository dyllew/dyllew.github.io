<template>
    <div class="row align-items-center justify-content-center">
        <div class="col col-md-4">
            <h4>About</h4>
            <div v-on:click="goToAbout" class="img-holder">
                <img class="rounded img-fluid" src="../../public/assets/linkedin-profpic.jpg" />
                <div class="screen">
                </div>
                <div id="about-text" class="screen-text">
                </div>
            </div>
        </div>
        <div class="col mt-5 mt-md-0 col-md-5">
            <h4>Projects</h4>
            <div v-on:click="goToProjects" class="img-holder">
                <img class="rounded img-fluid" src="../../public/assets/boomerang-home.jpg" />
                <div class="screen">
                </div>
                <div id="artwork-text" class="screen-text">
                </div>
            </div>
        </div>
        <div class="w-100"></div>
        <div class="col mt-5 mt-md-0 col-md-5">
            <h4>Artwork</h4>
            <div v-on:click="goToArtwork" class="img-holder">
                <img class="rounded img-fluid" src="../../public/assets/portrait.jpg" />
                <div class="screen">
                </div>
                <div id="artwork-text" class="screen-text">
                </div>
            </div>
        </div>
        <div class="col mt-5 mt-md-0 col-md-4">
            <h4>Resume</h4>
            <div v-on:click="goToResume" class="img-holder">
                <img class="rounded img-fluid" src="../../public/assets/resume.png" />
                <div class="screen">
                </div>
                <div id="artwork-text" class="screen-text">
                </div>
            </div>
        </div>
    </div>    
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  methods: {
      goToAbout() {
          this.$router.push("/about");
      },
      goToProjects() {
          this.$router.push("/projects")
      },
      goToArtwork() {
          this.$router.push("/artwork");
      },
      goToResume() {
          this.$router.push("/resume")
      }

  }
}
</script>

<style scoped>

.screen {
    width: calc(100% - 30px);
    height: 100%;
    top: 0;
    opacity: 0;
    position: absolute;
    z-index: 1;
    background: turquoise;
}

.screen:hover {
    opacity: 0.3;
    cursor: pointer;
}



</style>
