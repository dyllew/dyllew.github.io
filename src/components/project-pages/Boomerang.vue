<template>
    <div class="row align-items-center justify-content-center">
        <div id="title" class="col-12">  
            <h1>Boomerang</h1>
        </div>
        <div class="col-md-8">
            <div id="BoomerangCarousel" class="carousel slide" data-ride="carousel" data-interval="false">
                <ol class="carousel-indicators">
                    <li data-target="#BoomerangCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#BoomerangCarousel" data-slide-to="1"></li>
                    <li data-target="#BoomerangCarousel" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active boomerang-carousel-item">
                        <img class="rounded img-fluid" src="../../../public/assets/boomerang-home.jpg" alt="First slide">
                        <div class="carousel-text">
                            <h5>Sign Up/Login Page</h5>
                            <p>When my group decided on how we wanted to split up the tasks for Boomerang,
                                I decided to design & create the sign up/login page & the create account flow. 
                                I thought this would be a good section of the application to practice and enhance my visual design skills
                                and to create a UI that was intuitive.
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item boomerang-carousel-item">
                        <img class="rounded img-fluid" src="../../../public/assets/create-account.png" alt="Second slide">
                        <div class="carousel-text">
                            <h5>Create Account Part I</h5>
                            <p> 
                                In the sections of Boomerang I built, I created the front-end using 
                                Vue.js which is the same front-end framework I used to build this website. 
                                The backend was built using Express.js. The fields above checked for user input
                                to ensure that the account username was not already taken and that the each of the fields was
                                in the correct format, notifying the user instantly on submission if their input was invalid.
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item boomerang-carousel-item">
                        <img class="rounded img-fluid" src="../../../public/assets/join-communities.png" alt="Third slide">
                        <div class="carousel-text">
                            <h5>Create Account Part II</h5>
                            <p> 
                                Account creation for any app is an important user flow as it
                                lets the user understand both the purpose of an app & how they can engage with it completely.
                                For these reasons, I decided to include descriptions of the main concepts of the application (Communities, Channels, etc.)
                                as this would reduce the time it would take for a user to get immersed in the app.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { scrollUpFunc, enableScrollUpOnCarousel, enableSwipeOnCarousel } from '../../constants';
export default {
  // eslint-disable-next-line
  name: 'Boomerang',
  mounted() {
    scrollUpFunc();
    enableScrollUpOnCarousel("#BoomerangCarousel");
    enableSwipeOnCarousel("#BoomerangCarousel");
  }
}
</script>

<style scoped>

h1, h5 {
    color: white;
}

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
