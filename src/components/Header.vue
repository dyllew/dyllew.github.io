<template>
    <div class="row justify-content-end">
        <div id="website-title" class="col-12 col-md-4 col-lg-4">
            <h1 v-on:click="goHome" id="name animate__fadeInDown"> Dylan Lewis </h1>
        </div>
        <div id="logos-col" class="col-md-4 my-auto">
            <div class="d-flex flex-row justify-content-center justify-content-md-end">
                <a href="mailto: drlewis@mit.edu">
                    <i class="fa fa-envelope-o fa-3x"></i>
                    <i class="fa fa-envelope-o fa-2x"></i>
                </a> 
                <a href="https://www.linkedin.com/in/dylan-lewis-2020/" target="_blank">
                    <i class="fa fa-linkedin-square fa-3x"></i>
                    <i class="fa fa-linkedin-square fa-2x"></i>
                </a>
                <a href="https://github.com/dyllew/" target="_blank">
                    <i class="fa fa-github fa-3x"></i>
                    <i class="fa fa-github fa-2x"></i>
                </a>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
  name: 'Header',
  components: {
  },
  methods: {
      goHome() {
          this.$router.push('/');
      }
  }
}
</script>

<style scoped>
h1 {
    font-size: 50px;
}

h1:hover {
    cursor: pointer;
}

a {
    color: turquoise;
    margin-left: 15px;
    margin-right: 15px;
}

a:hover {
    color: white;
}

@media (max-width: 761px) {
    .fa-3x {
        display: none;
    }
}
@media (min-width: 761px) {
    .fa-2x {
        display: none;
    }
}

@media (min-width: 768px) {
    #logos-col {
        justify-content: flex-end; 
    }
}

</style>