<script>
import axios from 'axios';
export default{
    name:"SinglePost",
    data(){
        return{
            baseUrl: "http://127.0.0.1:8000",
        }
    },
    created(){

        const slug = this.$route.params.slug;
        axios.get(`${this.baseUrl}/api/projects/${slug}`)
            .then(resp =>{
                if(resp.data.success){
                    this.project = resp.data.project;
                    console.log(this.project);
                }else {
                    this.$router.push({name: "not-found"} );
                }
            })
    }
}
</script>

<template>
    <div class="container text-center mt-3">
            <h1 class="mt-3 text-center">{{ project.title }}</h1>
            <h5 class="text-center mt-2 text-uppercase text-primary">{{ category }}</h5>
            <img v-if="project.cover_image" :src="`${baseUrl}/storage/${project.cover_image}`" alt="">
            <div v-else class="text-center mt-4">Nessuna immagine</div>

            <p>{{ project.content }}</p>
        </div>
</template>

<style>
</style>