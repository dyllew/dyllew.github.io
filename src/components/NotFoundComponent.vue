<template>
    <div class="col pt-5 justify-content-center">
      <h2>Uh Oh! Looks like you went to a page that doesn't exist on dyllew.github.io</h2>
      <router-link class="router-link" to="/">Click this link to go home.</router-link>
    </div>  
</template>

<script>
export default {
  name: 'NotFoundComponent'
}
</script>

<style scoped>

.router-link {
  color: turquoise;
  font-size: 30px;
}

.router-link:hover {
  color: whitesmoke;
}

.router-link-active {
  color: white;
  text-decoration: underline;
}


</style>