<template>
  <div class="projects row align-items-center justify-content-center">
       <div class="col-12 col-md-4 col-lg-4 pt-3">
        <div class="card border-info bg-transparent">
            <h5 class="card-header">Graph Neural Networks for NYC Taxi Fare & Demand Surge Prediction</h5>
            <img id="taxi-pred-img" class="card-img-top" src="../../public/assets/fare-surge-graph-pred.png" alt="Card image cap">
            <div class="card-body">
                <p class="card-text">Machine Learning project which evaluated graph neural networks (GNNs) for the tasks of NYC taxi fare and demand surge prediction.</p>
                <div id="button-holder">
                    <a v-on:click="goToGraphNetsPage" class="btn btn-primary text-light">See Project Details</a>
                </div>
            </div>
        </div>
    </div>
    <div class="col-12 col-md-4 col-lg-3 pt-3">
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
    <div class="col-12 col-md-4 col-lg-4 pt-3">
        <div class="card border-info bg-transparent">
            <h5 class="card-header">Boomerang</h5>
            <img id="boomerang-img" class="card-img-top" src="../../public/assets/boomerang-home.jpg" alt="Card image cap">
            <div class="card-body">
                <p class="card-text">Boomerang is a full-stack web application where users can efficiently and reliably
                    borrow items from others within their communities</p>
                <div id="button-holder-boomerang">
                    <a href="https://team-aesthetech-boomerang.herokuapp.com/" target="_blank" class="btn btn-light col-5">Go to the Boomerang website</a>
                    <span></span>
                    <a v-on:click="goToBoomerangPage" class="btn btn-primary text-light col-5">See Project Details</a>
                </div>
            </div>
        </div>
    </div>
  </div>    
</template>

<script>

export default {
  name: 'Artwork',
  methods: {
      goToBoomerangPage() {
          this.$router.push("/projects/boomerang");
      },
      goToTrumpSpeechPage() {
          this.$router.push("projects/trump-speech-analysis");
      },
      goToGraphNetsPage() {
          this.$router.push("/projects/gnns-taxi-prediction")
      },
      goHome() {
          this.$router.push("/");
      }
  }
}
</script>

<style scoped>

h5 {
    color: white;
}

#button-holder-boomerang {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

@media (min-width: 900px) {
    #trump-img {
        height: 350px;
        width: auto
    }
}

</style>
