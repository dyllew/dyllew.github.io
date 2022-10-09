<template>
    <div id="home-container" class="row pt-3 pt-lg-5 justify-content-center align-items-center">
        <div class="col-6 col-md-5 col-lg-5 col-xl-3 mr-xl-5">
            <img
              id="leo-and-dylan-pic"
              src="../../public/assets/leo_n_me.jpg" 
              class="rounded img-fluid"
              alt="Leo and Dylan" />
        </div>
        <div id="about-description" class="col-11 col-md-6 col-lg-5 col-xl-5">
            <p id="intro-paragraph">
              Hey there! I'm a Masters grad from MIT where I studied
              Computer Science, specifically Artificial Intelligence. My research focused on machine learning tools
              for assisting crisis managers during climate crises using crowdsourced climate crisis data. You can learn more
              about my research<a href="#/projects/ml-for-crowdsourced-crisis-data">here!</a>I'm also a proud dad to my son, Leo 🐕
            </p>
            <p>
              I'm interested in Software Engineering, Data Science & Machine Learning, and Web Development! 
              You can contact me through<a href="mailto: dylanrl97@gmail.com">email,</a>add me on<a href="https://www.linkedin.com/in/dyllew/" target="_blank">LinkedIn,</a>or checkout my<a href="https://github.com/dyllew/" target="_blank">GitHub!</a>
              I'm currently looking for remote Data Science and Software Engineering positions!
            </p>
            <p>
              In my freetime I love to explore nature, play video games (Zelda/DMC/Soulsborne/Skyrim/Kingdom Hearts/Fallout), cook/bake something new, make and experiment with different forms of art,
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

@media (min-width: 0px) and (max-width: 768px) {

    #leo-and-dylan-pic {
      max-height: 60vw;
    }

    #about-description p {
      font-size: 4vw;
    }

    #intro-paragraph {
      padding-top: 10vw;
    }

}

@media (min-width: 768px) and (max-width: 900px) {

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
      font-size: 1.35vw;
    }
}

</style>
