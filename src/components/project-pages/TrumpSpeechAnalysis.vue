<template>
    <div class="row align-items-center justify-content-center">
        <div class="col-12">  
            <h1>Trump Campaign Speech Analysis</h1>
        </div>
        <div class="col-md-8">
            <div id="TrumpCarousel" class="carousel slide">
                <ol class="carousel-indicators">
                    <li data-bs-target="#TrumpCarousel" data-bs-slide-to="0" class="active"></li>
                    <li data-bs-target="#TrumpCarousel" data-bs-slide-to="1"></li>
                    <li data-bs-target="#TrumpCarousel" data-bs-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active trump-carousel-item">
                        <img class="rounded img-fluid pb-3" src="../../../public/assets/trump-campaign.png" alt="First slide">
                        <div class="row justify-content-center pb-4">
                            <div class="col-12 col-md-7">
                                <h5>Main Puzzle</h5>
                                <p>
                                    There have been concerns that nationalist, right-wing sentiments have gained momentum over the years of the Trump presidency. 
                                    Our group wanted to investigate how Donald Trump’s rhetoric may have influenced public sentiment on a regional level. 
                                    To this end, we analyzed Trump's campaign speeches and the tweets by locals from 4 cities he visited on his campaign and Florida,
                                    a swing state.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item trump-carousel-item">
                        <img class="rounded img-fluid pb-3" src="../../../public/assets/negative-positive.jpg" alt="Second slide">
                        <div class="row justify-content-center pb-4">
                            <div class="col-12 col-md-7">
                                <h5>Most Frequent Negative and Positive Words in Trump's Campaign Speeches</h5>
                                <p> 
                                    Trump's positive sentiment words tend to be adjectives with "great" far exceeding the rest. Among words with negative sentiment, 
                                    there are more meaningful words related to his speech topics such as "investigation", "defense", "deficit", & "press". 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item trump-carousel-item">
                        <div class="row justify-content-around pb-3">
                            <img class="col-12 col-md-6 rounded img-fluid" src="../../../public/assets/RelativeWordFrequencyDiff.png">
                            <img class="col-12 col-md-6 pt-3 pt-md-0  rounded img-fluid" src="../../../public/assets/RelativeWordFreqDiffFlorida.png">
                        </div>
                        <div class="row justify-content-center pb-4">
                            <div class="col-12 col-md-7">
                                <h5>Trump's Most Frequently Used Words Across his Entire Campaign & Across Florida Campaign</h5>
                                <p> 
                                    In Trump's speeches across the entire campaign, his most frequent words, normalized on Romney's campaign speeches, include
                                    "Hillary", "don't" "great", "deal", as well as words related to his election platform such as "border", "wall", "Mexico", "ISIS", "trade", 
                                    and "China". Words used to thwart Hillary Clinton's campaign such as "Hillary", "email", "lies", "corrupt", "crook", and "FBI" in regards to Clinton's email scandal 
                                    appear more frequently in Trump's Florida campaign speeches than across all of his campaign speeches, <strong>showing that in swing states, 
                                    Trump strategizes to mention the scandal more frequently to win voters to tip the scale.</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { scrollUpFunc, enableSwipeOnCarousel } from '../../constants';

export default {
  // eslint-disable-next-line
  name: 'Trump',
  mounted() {
    scrollUpFunc();
    enableSwipeOnCarousel('TrumpCarousel')
  }
}
</script>

<style scoped>

p {
    text-align: left;
}

h1 {
    color: white;
}

h5 {
    color: white;
}

.carousel-text {
    margin-top: 10px;
    margin-bottom: 40px;
}

.trump-carousel-item img {
  height: 450px;
  max-height: 500px;
}

@media (max-width: 800px) {
    .trump-carousel-item img {
        height: 450px;
        max-height: 200px;
    }
}

</style>
