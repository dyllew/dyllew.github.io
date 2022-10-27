<template>
  <div class="row align-items-center justify-content-center">
    <div class="col-12 col-md-4 col-lg-4 pt-3" v-for="project in projects" :key="project.link">
        <ProjectCard :project="project"></ProjectCard>
    </div>
  </div>    
</template>

<script>
import ProjectCard from './ProjectCard'
import { MAIN_PROJECTS } from '../constants';

export default {
  // eslint-disable-next-line
  name: 'Projects',
  components: {
    ProjectCard,
  },
  data() {
      return { 
          projects: MAIN_PROJECTS
      }
  },
}
</script>

