<template>
  <div class="resume row align-items-center justify-content-center">
    <div class="col-12 mt-5 mt-sm-0">
      <a target="_blank" class="btn btn-info text-light" href="./assets/Dylan_Lewis_Resume.pdf">View PDF</a>
    </div>
    <div class="col-12 mt-2">
      <embed class="pdf" src="./assets/Dylan_Lewis_Resume.pdf"/>
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
  color: turquoise;
  font-size: 30px;
}

a:hover {
  color: turquoise;
}

@media (max-width: 700px) {
  .pdf {
    display: none;
  }
}

@media  (min-width: 700px) and (max-width: 1200px) {
  .pdf {
    width: 600px;
    height: 600px;
  }
}

@media (min-width: 1200px) {
  .pdf {
    width: 800px;
    height: 800px;
  }
}

</style>
