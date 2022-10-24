<template>
  <div id="app" class="container-fluid p-3 min-vh-100">
    <Header />
    <NavBar v-if="this.$route.path !== `/` && this.$route.path !== `/404`" />
    <router-view></router-view>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import $ from 'jquery';

import { scrollUpFunc } from './constants';

import Header from './components/Header';
import NavBar from './components/NavBar';

export default {
  name: 'App',
  components: {
    Header,
    NavBar
  },
  mounted() {
    // This code block was taken from the solution to this Q on stackoverflow: https://stackoverflow.com/questions/21349984/how-to-make-bootstrap-carousel-slider-use-mobile-left-right-swipe
    $('.carousel').on('touchstart', function(event){
    const xClick = event.originalEvent.touches[0].pageX;
    $(this).one('touchmove', function(event){
        const xMove = event.originalEvent.touches[0].pageX;
        const sensitivityInPx = 5;

        if( Math.floor(xClick - xMove) > sensitivityInPx ){
            $(this).carousel('next');
        }
        else if( Math.floor(xClick - xMove) < -sensitivityInPx ){
            $(this).carousel('prev');
        }
        scrollUpFunc();
    });
    $(this).on('touchend', function(){
        $(this).off('touchmove');
    });
});
  }
}
</script>

<style>

html {
  height: 100vh;
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Courier, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #61DAFB;
  background-color: #080707;
}

.carousel-text {
    margin-top: 10px;
    margin-bottom: 40px;
}

.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  margin-left: -60px;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}

@media (max-width: 800px) {
    .cc-carousel-item img {
        max-height: 80vw;
    }
}


</style>
