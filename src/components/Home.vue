<template>
    <div class="row pt-5 mt-5 justify-content-around min-vh-md-100">
        <div id="about" class="col-4 col-md-2">
            <div class="img-container">
                <h4>About</h4>
                <div v-on:click="goToAbout" class="img-holder">
                    <img class="rounded img-fluid upper-img" src="../../public/assets/dylan-n-leo.jpg" />
                    <div class="screen">
                    </div>
                    <div id="about-text" class="screen-text">
                    </div>
                </div>
            </div>
        </div>
        <div id="resume" class="col-5 col-md-2 ">
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
        <!-- <div id="divider" class="divider w-100"></div> -->
        <div id="artwork" class="col-5 pt-5 pt-md-0 col-md-3">
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
        <div id="projects" class="col-6 pt-5 pt-md-0 col-md-4">
            <div class="img-container">
                <h4>Projects</h4>
                <div v-on:click="goToProjects" class="img-holder">
                    <img class="rounded img-fluid lower-img" src="../../public/assets/taxi-fare-and-surge-pred.png" />
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
    /* width: calc(100% - 30px); */
    height: 100%;
    top: 0;
    opacity: 0;
    position: absolute;
    z-index: 1;
    background: #61DAFB;
}

.screen:hover {
    opacity: 0.3;
    cursor: pointer;
    border: 4px solid #61DAFB;
}

.img-container:hover {
    border: 1px solid #61DAFB;
    border-radius: 2px;
    cursor: pointer;
    color: white;
}

@media (min-width: 850px) {
    #about {
        order: 1;
    }

    #resume {
        order: 2;
    }

    #projects {
        order: 3;
    }

    #artwork {
        order: 4;
    }

    #divider {
        display: none;
    }

    /* .upper-img {
        height: 300px;
        width: auto;
    }
    .lower-img {
        height: 250px;
        width:  auto
    } */
}

</style>
