<template>
    <div class="about row align-items-center">
        <div class="col">
            <img
              id="leo-and-dylan-pic"
              src="../../public/assets/leo_n_me.jpg" 
              class="rounded img-fluid"
              alt="Leo and Dylan" />
        </div>
        <div id="about-description" class="col">
            <p>
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

<style>
@media (max-width: 767.98px) {
    #about-description {
      font-size: 10px;
    }
}

#leo-and-dylan-pic  {
  border: 4px solid turquoise;
}

#about-description {
  font-family: Georgia, Cambria, Cochin, Times, 'Times New Roman', serif;
  font-size: 30px;
  color: white;
}
</style>
