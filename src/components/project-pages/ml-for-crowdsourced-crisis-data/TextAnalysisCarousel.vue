<template>
    <div class="row align-items-center justify-content-center">
        <div class="col-8">  
            <h3>Text Analysis Module</h3>
        </div>
        <div class="col-md-10">
            <div id="ccCarousel" class="carousel slide" data-ride="carousel" data-interval="false">
                <ol class="carousel-indicators">
                    <li data-target="#ccCarousel" data-slide-to="0" class="active"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active cc-carousel-item">
                        <div class="carousel-text">
                            <img id="pika-gif" src="../../../../public/assets/pika-gif.gif" alt="First slide">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

export default {
  name: 'TextAnalysisCarousel'
}
</script>

<style scoped>

p {
    text-align: left;
}

h1, h3, h5, h6 {
    color: white;
}

a {
    color: hotpink;
}

a:hover {
    color: white;
}

h1, h3, h5 {
    color: white;
}

.carousel-text {
    margin-top: 10px;
    margin-bottom: 40px;
}

#pika-gif {
    margin-top: 10px;
    margin-bottom: 40px;
    width: 60vh;
    height: 40vh;
}

@media (max-width: 800px) {
    .cc-carousel-item img {
        max-height: 80vw;
    }
}

</style>