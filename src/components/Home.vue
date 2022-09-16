<template>
  <div class="row pt-4 align-items-md-start justify-content-around">
    <div id="about" class="col-6 pt-4 col-md-3 pt-md-5">
      <div class="img-container">
        <h4>About Me</h4>
        <div v-on:click="goToAbout" class="img-holder">
          <img
            class="rounded img-fluid upper-img"
            src="../../public/assets/dylan-n-leo.jpg"
          />
        </div>
      </div>
    </div>

    <div id="resume" class="col-6 pt-4 col-md-3 pt-md-5">
      <div class="img-container">
        <h4>Resume</h4>
        <div v-on:click="goToResume" class="img-holder">
          <img
            class="rounded img-fluid upper-img"
            src="../../public/assets/resume.png"
          />
        </div>
      </div>
    </div>
    <div id="artwork-and-projs" class="col-md-4">
        <div class="img-container">
          <h4>Projects</h4>
          <div v-on:click="goToProjects" class="img-holder">
            <img
              class="rounded img-fluid"
              src="../../public/assets/project-collage.png"
            />
          </div>
        </div>
        <div class="img-container mt-4">
          <h4>Artwork</h4>
          <div v-on:click="goToArtwork" class="img-holder">
            <img
              class="rounded img-fluid lower-img"
              src="../../public/assets/portrait.jpg"
            />
          </div>
        </div>
    </div>
    <div id="artwork" class="col-5 pt-5 pt-md-0 col-md-2">
      <div class="img-container">
        <h4>Artwork</h4>
        <div v-on:click="goToArtwork" class="img-holder">
          <img
            class="rounded img-fluid lower-img"
            src="../../public/assets/portrait.jpg"
          />
        </div>
      </div>
    </div>
    <div id="projects" class="col-6 pt-5 pt-md-0 col-md-4">
      <div class="img-container">
        <h4>Projects</h4>
        <div v-on:click="goToProjects" class="img-holder">
          <img
            class="rounded img-fluid lower-img"
            src="../../public/assets/project-collage.png"
          />
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

h4 {
  font-size: 4vw;
}

#artwork-and-projs {
    display: none;
}

.img-container:hover {
  border: 1px solid #61dafb;
  border-radius: 2px;
  cursor: pointer;
  color: white;
}

@media (max-width: 750px) {
  .upper-img {
    height: 40vw;
    width: auto;
  }

  .lower-img {
    height: 30vw;
    width: auto;
  }
}

@media (min-width: 768px) {
  h4 {
  font-size: 2vw;
  }

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

    @media (min-width: 1150px) { 
        .upper-img {
          height: 30vw;
          width: auto;
      }
        .lower-img {
            height: 15vw;
        }
    }
}
</style>
