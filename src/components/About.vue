<template>
    <div class="row pt-5 about-me">
        <div class="col-5 col-md-5 col-lg-5 col-xl-3 mx-auto my-auto">
            <img
              id="leo-and-dylan-pic"
              src="../../public/assets/leo_n_me.jpg" 
              class="rounded img-fluid"
              alt="Leo and Dylan" />
        </div>
        <div id="about-description" class="col-10 col-md-6 col-lg-5 col-xl-6 mx-auto my-auto">
            <p id="intro-paragraph">
              Hey there! I'm a Masters student at MIT studying
              Computer Science. But more importantly, I am a proud dog dad
              to my son, Leo 🐶
            </p>
            <p>
              I'm interested in Software Engineering, Data Science & Machine Learning, and Web Development! 
              You can contact through email, add me on LinkedIn & GitHub!
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
  name: 'About',
  components: {
  }
}
</script>

<style scoped>

#leo-and-dylan-pic  {
  border: 4px solid turquoise;
}

#about-description {
  font-family: Georgia, Cambria, Cochin, Times, 'Times New Roman', serif;
  font-size: 25px;
  color: white;
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
      font-size: 30px;
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
