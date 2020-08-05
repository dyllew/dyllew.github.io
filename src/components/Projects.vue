<template>
  <div class="projects row align-items-center justify-content-center">
    <div class="col-12 col-md-5 col-lg-4 pt-3">
        <div class="card border-info bg-transparent">
            <h5 class="card-header">Boomerang</h5>
            <img id="boomerang-img" class="card-img-top" src="../../public/assets/boomerang-home.jpg" alt="Card image cap">
            <div class="card-body">
                <p class="card-text">Boomerang is a full-stack web application where users can efficiently and reliably
                    borrow items from others within their communities</p>
                <div id="button-holder">
                    <a href="https://team-aesthetech-boomerang.herokuapp.com/" target="_blank" class="btn btn-light">Go to the Boomerang website</a>
                    <a v-on:click="goToBoomerangProjectPage" class="btn btn-primary text-light">See Project Details</a>
                </div>
            </div>
        </div>
    </div>
    <div class="col-12 col-md-6 col-lg-4 pt-3">
        <div class="card border-info bg-transparent">
            <h5 class="card-header">Trump Campaign Speech Analysis</h5>
            <img id="trump-img" class="card-img-top" src="../../public/assets/FrequencyPlot.png" alt="Card image cap">
            <div class="card-body">
                <p class="card-text">
                    Data Science project which investigated how Donald Trump's 2016 campaign speeches may have influenced
                    public sentiment on a regional level
                </p>
                <a v-on:click="goToTrumpSpeechPage" class="btn btn-primary text-light">See Project Details</a>
            </div>
        </div>
    </div>
  </div>    
</template>

<script>

export default {
  name: 'Artwork',
  methods: {
      goToBoomerangProjectPage() {
          this.$router.push("/projects/boomerang");
      },
      goToTrumpSpeechPage() {
          this.$router.push("projects/trump-speech-analysis");
      },
      goHome() {
          this.$router.push("/");
      }
  }
}
</script>

<style scoped>

@media (min-width: 900px) {
    #trump-img {
        height: 350px;
        width: auto
    }
}

</style>
