<template>
    <div class="row align-items-center justify-content-center">
        <div class="col-12">  
            <h3>Graph Neural Networks for NYC Taxi Fare & Demand Surge Prediction</h3>
        </div>
        <div class="col-md-8">
            <div id="taxiCarousel" class="carousel slide" data-ride="carousel" data-interval="false">
                <ol class="carousel-indicators">
                    <li data-target="#taxiCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#taxiCarousel" data-slide-to="1"></li>
                    <li data-target="#taxiCarousel" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active taxi-carousel-item">
                        <img class="rounded img-fluid" src="../../../public/assets/taxi-fare-and-surge-pred.png" alt="First slide">
                        <div class="carousel-text">
                            <h5>Motivation</h5>
                            <p>
                                With the advent of ridesharing apps, the New York City taxi industry must provide accurate predictions for taxi fares and demand surges in order to remain competitive.
                                It is important that it provides riders with accurate estimates for the price of trip fare for quality customer service.
                                It is beneficial for the taxi industry to accurately predict locations that will experience increased demand or surges in taxi demand to effectively allocate
                                drivers and cabs to these areas in a timely manner. In this project, we used a large public dataset provided by the 
                                NYC Taxi & Limousine Commission containing yellow taxi trips records for every month from 2015-Present. 
                                We specifically utilized data from January 2019-June 2019.
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item taxi-carousel-item">
                        <img class="rounded img-fluid" src="../../../public/assets/fare-surge-graph-pred.png" alt="Second slide">
                        <div class="carousel-text">
                            <h5>Graph Neural Networks for Taxi Fare and Surge Prediction</h5>
                            <p> 
                                The Yellow Taxi Trip Records contain data about taxi trips including pickup and dropoff locations, date and time of pickup and dropoff,
                                distance traveled, and the associated fare of the trip.  This data has inherent graph structure in which the nodes are the different pickup/dropoff locations
                                and the edges are the directed trips between them. Due to the increasing advances of Graph Neural Networks (GNNs) in recent years and the advent of efficient frameworks like Deep Graph Library (DGL),
                                we evaluated the performance of GNNs against other classical machine learning methods to assess the viability of GNNs as an accurate model which leverages the inherent graph structure in the data used for these tasks.
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item taxi-carousel-item">
                        <img class="rounded img-fluid" src="../../../public/assets/fare-surge-graph-pred.png" alt="Second slide">
                        <div class="carousel-text">
                            <h5>Results</h5>
                            <p> 
                                Using the raw yellow taxi trip data from January 2019-June 2019, we contrived two datasets
                                to pose node and regression problems for graphical methods. Using GraphSage GNNs, we explored and benchmarked
                                a new application of GNNs to taxi data against classical ML approaches. For fare prediction, the GNN model performed slightly worse
                                than Linear Regression, Random Forests, and a Fully-Connected Neural Network (FC NN), with the FC NN performing the best, however, it is highly-parameterized. For surge prediction, the GNN performed slightly better than a FC NN.
                                For both taxi prediction tasks, we demonstrated that a less complex GNN model can perform comparably to a highly-parameterized FC NN.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Taxi'
}
</script>

<style scoped>

p {
    text-align: left;
}

h1, h3, h5 {
    color: white;
}

.carousel-text {
    margin-top: 10px;
    margin-bottom: 40px;
}

.taxi-carousel-item img {
  height: 450px;
  max-height: 500px;
}

@media (max-width: 800px) {
    .taxi-carousel-item img {
        height: 450px;
        max-height: 200px;
    }
}

</style>
