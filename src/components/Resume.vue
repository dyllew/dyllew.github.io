<template>
  <div class="resume row align-items-center justify-content-center">
    <div id="sticky-btn" class="col-12 mt-4">
      <a target="_blank" class="btn btn-primary text-light" href="./assets/Dylan_Lewis_Resume.pdf">View PDF in Tab</a>
    </div>
    <div class="col-12 mt-2">
      <embed class="pdf" src="./assets/Dylan_Lewis_Resume.pdf"/>
    </div>
  </div>    
</template>

<script>

export default {
  // eslint-disable-next-line
  name: 'Resume'
}
</script>

<style scoped>
#sticky-btn {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

a {
  color: #61DAFB;
  font-size: 30px;
}

a:hover {
  color: #61DAFB;
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
