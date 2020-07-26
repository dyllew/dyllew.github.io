<template>
    <div class="row pt-5 pt-md-0 align-items-center justify-content-center">
        <div class="col-5 col-md-3">
            <div class="img-container">
                <h4>About</h4>
                <div v-on:click="goToAbout" class="img-holder">
                    <img class="rounded img-fluid upper-img" src="../../public/assets/linkedin-profpic.jpg" />
                    <div class="screen">
                    </div>
                    <div id="about-text" class="screen-text">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-4 col-md-3 ">
            <div class="img-container">
                <h4>Resume</h4>
                <div v-on:click="goToResume" class="img-holder">
                    <img class="rounded img-fluid upper-img" src="../../public/assets/resume.png" />
                    <div class="screen">
                    </div>
                    <div id="artwork-text" class="screen-text">
                    </div>
                </div>
            </div>
        </div>
        <div class="divider w-100 w-md-0"></div>
        <div class="col-5 ml-4 mt-4 ml-md-0 mt-md-4 col-md-3">
            <div class="img-container">
                <h4>Artwork</h4>
                <div v-on:click="goToArtwork" class="img-holder">
                    <img class="rounded img-fluid lower-img" src="../../public/assets/portrait.jpg" />
                    <div class="screen">
                    </div>
                    <div id="artwork-text" class="screen-text">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-5 mt-md-4 ml-md-4 col-md-3">
            <div class="img-container">
                <h4>Projects</h4>
                <div v-on:click="goToProjects" class="img-holder">
                    <img class="rounded img-fluid lower-img" src="../../public/assets/boomerang-home.jpg" />
                    <div class="screen">
                    </div>
                    <div id="artwork-text" class="screen-text">
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>

export default {
  name: 'Home',
  data() {
      return {
          windowWidth: window.innerWidth,
      }
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
    background: aqua;
}

.screen:hover {
    opacity: 0.3;
    cursor: pointer;
    border: 4px solid aqua;
}

.img-container:hover {
    border: 1px solid aqua;
    border-radius: 2px;
}

@media (min-width: 850px) {
    .upper-img {
        height: 300px;
        width: auto;
    }
    .lower-img {
        height: 250px;
        width:  auto
    }
}

</style>
