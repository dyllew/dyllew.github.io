<template>
  <div class="about row h-100 align-items-center">
      <div class="col">
        <img 
        id="leo-and-dylan-pic"
        src="../../public/assets/leo_n_me.png" 
        class="rounded img-fluid"
        alt="Leo and Dylan" />
      </div>
      <div id="about-description" class="col">
        <p>Hey there! I'm a Masters student at MIT studying
        Computer Science. But more importantly, I am a proud dog dad
        to my son, Leo 🐶. I'm interested in Software Engineering, Data Science & Machine Learning, and Web Development! You can contact through email, add me on LinkedIn & GitHub!</p> 
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
#leo-and-dylan-pic  {
  border: 4px solid turquoise;
}

#about-description {
  font-family: Georgia, Cambria, Cochin, Times, 'Times New Roman', serif;
  font-size: 30px;
  font-size-adjust: 0.5;
}

</style>
