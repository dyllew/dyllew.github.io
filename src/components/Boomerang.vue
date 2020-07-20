<template>
    <div class="row align-items-center justify-content-center">
        <div class="col-12">  
            <h1>Boomerang</h1>
        </div>
        <div class="col-md-8">
            <div id="boomerangCarousel" class="carousel slide" data-ride="carousel" data-interval="false">
                <ol class="carousel-indicators">
                    <li data-target="#boomerangCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#boomerangCarousel" data-slide-to="1"></li>
                    <li data-target="#boomerangCarousel" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active boomerang-carousel-item">
                        <img class="rounded img-fluid" src="../../public/assets/boomerang-home.jpg" alt="First slide">
                        <div class="carousel-text">
                            <h5>Sign Up/Login Page</h5>
                            <p>When my group decided on how we wanted to split up the work for Boomerang,
                                I decided to do the sign up/login page & the create account flow. 
                                I thought this would be a good section to practice and enhance my visual design skills
                                & to create a user interface that was intuitive.
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item boomerang-carousel-item">
                        <img class="rounded img-fluid" src="../../public/assets/create-account.png" alt="Second slide">
                        <div class="carousel-text">
                            <h5>Create Account Part I</h5>
                            <p> 
                                In developing the create account flow, I create the front-end using 
                                Vue.js which is the same front-end framework I am used to build this website. 
                                The backend was built using Express.js. The fields above checked for user input
                                to ensure that the account username was not taken and in the right format and that the password 
                                was in a valid format.
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item boomerang-carousel-item">
                        <img class="rounded img-fluid" src="../../public/assets/join-communities.png" alt="Third slide">
                        <div class="carousel-text">
                            <h5>Create Account Part II</h5>
                            <p> 
                                Account creation for any app is an important user flow as it
                                let the user understand both the purpose of app & how they can engage with it.
                                For these reasons, I decided to include the main concepts of the application (Communities, Channels, etc.)
                                in the context of Boomerang as this would reduce the time it would take for a user
                                to get started using the app.
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
  name: 'Boomerang'
}
</script>

<style scoped>

.carousel-text {
    margin-top: 10px;
    margin-bottom: 40px;
}

.boomerang-carousel-item img {
  height: 450px;
  max-height: 500px;
}

@media (max-width: 800px) {
    .boomerang-carousel-item img {
        height: 450px;
        max-height: 200px;
    }
}

</style>
