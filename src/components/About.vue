<template>
    <div id="home-container" class="row pt-3 justify-content-center align-items-center">
        <div class="col-6 col-md-5 col-lg-5 col-xl-3 mr-xl-5">
            <img
              id="leo-and-dylan-pic"
              src="../../public/assets/leo_n_me.jpg" 
              class="rounded img-fluid"
              alt="Leo and Dylan" />
        </div>
        <div id="about-description" class="col-10 col-md-6 col-lg-5 col-xl-5">
            <p id="intro-paragraph">
              Hey there! I'm a Masters student at MIT studying
              Computer Science. But more importantly, I am a proud dad
              to my son, Leo 🐕
            </p>
            <p>
              I'm interested in Software Engineering, Data Science & Machine Learning, and Web Development! 
              You can contact me through<a href="mailto: drlewis@mit.edu">email,</a>add me on<a href="https://www.linkedin.com/in/dylan-lewis-2020/" target="_blank">LinkedIn,</a>or checkout my<a href="https://github.com/dyllew/" target="_blank">GitHub!</a>
            </p>
            <p>
              In my freetime, I love to explore nature, make and experiment with different forms of art,
              develop new skills, and go on adventures with my pup!
            </p> 
        </div>
    </div>    
</template>

<script>

export default {
  name: 'About'
}
</script>

<style scoped>
a {
    color: pink;
    margin-left: 15px;
    margin-right: 15px;
}

a:hover {
    color: white;
}

#leo-and-dylan-pic  {
  border: 4px solid #61DAFB;
}

#about-description {
  font-size: 25px;
  text-align: left;
}

@media (max-width: 900px) {

    #leo-and-dylan-pic {
      max-height: 500px;
    }

    #about-description p {
      font-size: 20px;
    }

    #intro-paragraph {
      padding-top: 30px;
    }

}

@media (min-width: 1200px) {

    #about-description p {
      font-size: 25px;
    }
}

@media (min-width: 1500px) {

    #about-description p {
      font-size: 40px;
    }
}

@media (min-width: 1700px) {

    #about-description p {
      font-size: 43px;
    }
}
</style>
