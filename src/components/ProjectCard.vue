<template>
    <div class="card border-info bg-transparent align-items-center">
        <h5 class="card-header">{{project.title}}</h5>
        <img :id="project.id" 
            class="card-img-top" 
            :class="project.src.sizeClass ? project.src.sizeClass : ''" 
            :src="getImgURL(project.src.imgFilename)" 
            alt="Project Image">
        <div class="card-body">
            <p class="card-text">{{project.desc}}</p>
            <div v-if="project.projectWebsite" :id="project.projectWebsite.id">
                <a :href="project.projectWebsite.url" target="_blank" class="btn btn-light col-5">{{project.projectWebsite.btnText}}</a>
                <span></span>
                <a v-on:click="goToProjectPage(project.link)" class="btn btn-primary text-light col-5">{{projectBtnText}}</a>
            </div>
            <div id="button-holder" v-else>
                <a v-on:click="goToProjectPage(project.link)" class="btn btn-primary text-light">See Project Details</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: ['project'],
    methods: {
        goToProjectPage(projectURL) {
            this.$router.push(projectURL);
        },
        getImgURL(imgFilename) {
            return require('../../public/assets/' + imgFilename)
        }
    },
    computed: {
        projectBtnText() {
           return this.project.projectBtnText ? this.project.projectBtnText : "See Project Details"
        }
    }
}
</script>

<style scoped>
p {
    text-align: left;
}

h5 {
    color: white;
}

#button-holder {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

#image-module-img {
    width: 40vh;
    height: 40vh;
}

#text-module-img {
    height: 40vh;
}

</style>