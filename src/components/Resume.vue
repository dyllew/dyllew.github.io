<template>
  <div class="resume row align-items-center justify-content-center">
    <div class="col-12">
      <a target="_blank" href="./assets/Dylan_Lewis_Resume.pdf">View PDF</a>
      <div class="resume-container container-fluid">
        <div class="page-header bg-info">
          <h1>Example page header <small>Subtext for header</small></h1>
        </div>
      </div>
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
  color: rgb(238, 130, 238);
  font-size: 20px;
}

a:hover {
  color: turquoise;
}

.resume-container {
  overflow-y: scroll;
  color: white;
}

</style>
