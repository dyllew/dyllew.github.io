<template>
    <div id="home-container" class="row pt-3 pt-lg-5 justify-content-center align-items-center">
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
              Computer Science, specifically Artificial Intelligence.
              But more importantly, I am a proud dad
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
    color: hotpink;
    margin-left: 1vw;
    margin-right: 1vw;
}

a:hover {
    color: white;
}

#leo-and-dylan-pic  {
  max-height: 40vw;
  border: 0.25vw solid #61DAFB;
}

#about-description {
  font-size: 1.75vw;
  text-align: left;
}

@media (min-width: 0px) and (max-width: 500px) {

    #leo-and-dylan-pic {
      max-height: 50vw;
    }

    #about-description p {
      font-size: 3.5vw;
    }

    #intro-paragraph {
      padding-top: 10vw;
    }

}

@media (min-width: 500px) and (max-width: 900px) {

    #leo-and-dylan-pic {
      max-height: 50vw;
    }

    #about-description p {
      font-size: 2vw;
    }

    #intro-paragraph {
      padding-top: 5vw;
    }

}

@media (min-width: 900px) and (max-width: 1200px) {

    #leo-and-dylan-pic {
      max-height: 40vw;
    }

    #about-description p {
      font-size: 1.75vw;
    }
}

@media (min-width: 1200px) {

    #about-description p {
      font-size: 1.5vw;
    }
}

</style>
