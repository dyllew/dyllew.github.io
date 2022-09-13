<template>
  <div class="projects row align-items-center justify-content-center">
    <div class="col-12 col-md-4 col-lg-4 pt-3" v-for="project in projects" :key="project.link">
        <div class="card border-info bg-transparent align-items-center">
            <h5 class="card-header">{{project.title}}</h5>
            <img :id="project.id" 
                class="card-img-top" 
                :class="project.src.size_class ? project.src.size_class : ''" 
                :src="getImgUrl(project.src.img_name)" 
                alt="Card image cap">
            <div class="card-body">
                <p class="card-text">{{project.desc}}</p>
                <div v-if="project.projectWebsite" :id="project.projectWebsite.id">
                    <a :href="project.projectWebsite.url" target="_blank" class="btn btn-light col-5">{{project.projectWebsite.buttonText}}</a>
                    <span></span>
                    <a v-on:click="goToProjectPage(project.link)" class="btn btn-primary text-light col-5">See Project Details</a>
                </div>
                <div id="button-holder" v-else>
                    <a v-on:click="goToProjectPage(project.link)" class="btn btn-primary text-light">See Project Details</a>
                </div>
            </div>
        </div>
    </div>
  </div>    
</template>

<script>

export default {
  name: 'Projects',
  data() {
      return { 
          projects: [
            {   
                id: "ml-for-crowdsourced-crisis-data",
                link: "/projects/ml-for-crowdsourced-crisis-data", 
                src: {img_name: "masters-thesis-overview.png"},
                title: "Towards Automated Assessment of Crowdsourced Crisis Reporting for Enhanced Crisis Awareness and Response", 
                desc: "Masters thesis on constructing labeled crowdsourced crisis datasets and developing machine learning models to assist crisis managers in gaining situational awareness from crowdsourced crisis data for enhanced crisis response.",
                projectWebsite: {
                    id: "button-holder",
                    buttonText: "See Thesis Document",
                    url: "https://dspace.mit.edu/handle/1721.1/144911"
                }
            },
            {   
                id: "nlp-for-int-dev-gray-lit",
                link: "/projects/nlp-for-int-dev-gray-lit", 
                src: {img_name: "int-dev-results.png"},
                title: "Information Extraction and Unsupervised Methods for Streamlining Evidence Synthesis in International Development Gray Literature", 
                desc: "NLP project which investigates Named Entity Recognition (NER) and K-means Clustering on a corpus of 244 documents of International Development literature papers for streamlining evidence synthesis process on international development gray literature.",
                projectWebsite: {
                    id: "button-holder",
                    buttonText: "Presentation PDF",
                    url: "./assets/int-dev-gray-lit.pdf"
                }
            },
            {   
                id: "climate-change-news",
                link: "/projects/climate-change-news", 
                src: {img_name: "final-project-overview.png"},
                title: "Evolution of the U.S. TV News Narrative on Climate Change", 
                desc: "Data Science & NLP project in Python that investigated the evolution of climate change coverage frequency & content between popular U.S. TV News Networks CNN, Fox News, and MSNBC over July 2009-January 2020.",
                projectWebsite: {
                    id: "button-holder",
                    buttonText: "Poster PDF",
                    url: "./assets/IDS131_Poster.pdf"
                }
            },
            {   
                id: "taxi-pred-img",
                link: "/projects/gnns-taxi-prediction", 
                src: {img_name: "fare-surge-graph-pred.png"},
                title: "Graph Neural Networks for NYC Taxi Fare & Demand Surge Prediction", 
                desc: "Machine Learning project in Python which investigated graph neural networks (GNNs) for the tasks of NYC taxi fare and demand surge prediction."
            },
            {   
                id: "trump-img",
                link: "/projects/trump-speech-analysis", 
                src: {img_name: "FrequencyPlot.png", size_class: 'w-75'},
                title: "Trump Campaign Speech Analysis", 
                desc: "Data Science project in R which investigated how Donald Trump's 2016 campaign speeches may have influenced public sentiment on a regional level.",
                projectWebsite: {
                    id: "button-holder",
                    buttonText: "Poster PDF",
                    url: "./assets/17_835_Poster.pdf"
                }
            },
            {   
                id: "boomerang-img",
                link: "/projects/boomerang", 
                src: {img_name: "boomerang-home.jpg"},
                title: "Boomerang",
                desc: "Boomerang is a full-stack web application where users can efficiently and reliably borrow items from others within their communities.",
                projectWebsite: {
                    id: "button-holder",
                    buttonText: "Go to the Boomerang website",
                    url: "https://team-aesthetech-boomerang.herokuapp.com/"
                }
            },
      ]
      }
  },
  methods: {
      goToProjectPage(projectURL) {
          this.$router.push(projectURL);
      },
      getImgUrl(picFilename) {
          return require('../../public/assets/' + picFilename)
      }
  }
}
</script>

<style scoped>

h5 {
    color: white;
}

/* #climate-change-news {
    height: 15vw;
    width: auto
} */

#button-holder {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

p {
    text-align: left;
}

@media (max-width: 750px) {
    #climate-change-news {
        height: 30vw;
        width: auto
    }
}

@media (min-width: 900px) {
    #trump-img {
        height: 25vw;
        width: auto
    }
}

</style>
