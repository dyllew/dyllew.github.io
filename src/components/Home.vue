<template>
  <div class="row pt-4 justify-content-around min-vh-md-100">
    <div id="about" class="col-4 col-md-3 pt-md-5">
      <div class="img-container">
        <h4>About</h4>
        <div v-on:click="goToAbout" class="img-holder">
          <img
            class="rounded img-fluid upper-img"
            src="../../public/assets/dylan-n-leo.jpg"
          />
          <div class="screen"></div>
          <div id="about-text" class="screen-text"></div>
        </div>
      </div>
    </div>

    <div id="resume" class="col-5 col-md-3 pt-md-5">
      <div class="img-container">
        <h4>Resume</h4>
        <div v-on:click="goToResume" class="img-holder">
          <img
            class="rounded img-fluid upper-img"
            src="../../public/assets/resume.png"
          />
          <div class="screen"></div>
          <div id="artwork-text" class="screen-text"></div>
        </div>
      </div>
    </div>
    <div id="artwork-and-projs" class="col-md-6">
        <div class="img-container">
          <h4>Projects</h4>
          <div v-on:click="goToProjects" class="img-holder">
            <img
              class="rounded img-fluid"
              src="../../public/assets/taxi-fare-and-surge-pred.png"
            />
            <div class="screen"></div>
            <div id="artwork-text" class="screen-text"></div>
          </div>
        </div>
        <div class="img-container pt-4">
          <h4>Artwork</h4>
          <div v-on:click="goToArtwork" class="img-holder">
            <img
              class="rounded img-fluid lower-img"
              src="../../public/assets/portrait.jpg"
            />
            <div class="screen"></div>
            <div id="artwork-text" class="screen-text"></div>
          </div>
        </div>
    </div>
    <div id="artwork" class="col-5 pt-5 pt-md-0 col-md-2">
      <div class="img-container">
        <h4>Artwork</h4>
        <div v-on:click="goToArtwork" class="img-holder">
          <img
            class="rounded img-fluid"
            src="../../public/assets/portrait.jpg"
          />
          <div class="screen"></div>
          <div id="artwork-text" class="screen-text"></div>
        </div>
      </div>
    </div>
    <div id="projects" class="col-6 pt-5 pt-md-0 col-md-4">
      <div class="img-container">
        <h4>Projects</h4>
        <div v-on:click="goToProjects" class="img-holder">
          <img
            class="rounded img-fluid"
            src="../../public/assets/taxi-fare-and-surge-pred.png"
          />
          <div class="screen"></div>
          <div id="artwork-text" class="screen-text"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  methods: {
    goToAbout() {
      this.$router.push("/about");
    },
    goToProjects() {
      this.$router.push("/projects");
    },
    goToArtwork() {
      this.$router.push("/artwork");
    },
    goToResume() {
      this.$router.push("/resume");
    },
  },
};
</script>

<style scoped>

#artwork-and-projs {
    display: none;
}

.screen {
  /* width: calc(100% - 30px); */
  height: 100%;
  top: 0;
  opacity: 0;
  position: absolute;
  z-index: 1;
  background: #61dafb;
}

.screen:hover {
  opacity: 0.3;
  cursor: pointer;
  border: 4px solid #61dafb;
}

.img-container:hover {
  border: 1px solid #61dafb;
  border-radius: 2px;
  cursor: pointer;
  color: white;
}

@media (min-width: 768px) {
  #about {
    order: 1;
  }

  #resume {
    order: 3;
  }

  #artwork-and-projs {
      display: inline;
      order: 2;
  }

  #projects {
    display: none;
  }

  #artwork {
    display: none;
  }

  /* .upper-img {
        height: 300px;
        width: auto;
    } */
    .lower-img {
        height: 200px;
        width:  auto;
    }

    @media (min-width: 1150px) { 
        .lower-img {
            height: 300px;
        }
    }
}
</style>
