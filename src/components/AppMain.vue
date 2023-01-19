<script>
 import axios from 'axios';
import ProjectCard from './ProjectCard.vue';
export default{
    name:'AppMain',
    components:{ProjectCard},
    data(){
        return {
            baseUrl: "http://127.0.0.1:8000",
            projects: [],
        };
    },
    created(){
      this.getProjects();
    },
    methods:{
      getProjects(){
        axios.get('http://127.0.0.1:8000/api/projects').then(resp => {
            this.projects = resp.data.results;
        })
      }
    }
    
    
}

</script>

<template>
    
    <div class="container">
        <h2 class="text-center mb-3">Tutti i nostri project</h2>

        <div  class="row justify-content-center ">
            <div class="col-12 d-flex flex-wrap justify-content-center ">
                <ProjectCard  :project="project" v-for="project in projects" :key="project.id" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">

</style>
