<script>
export default{
    name:'ProjectCard',
    data() {
        return {
            contentMaxLength: 200,
            baseUrl: "http://127.0.0.1:8000",
        }
    },
    props: {
        project: Object,
    },
    computed: {
        contentPreview() {
            if (this.project.content && this.project.content.length > this.contentMaxLength) {
                return this.project.content.substr(0, this.contentMaxLength) + '...';
            }
            return this.project.content;
        }
    }
}
</script>

<template>
    <div class="card ms-3 mt-3" style="width: 18rem;">
         <img v-if="project.cover_image" class="w-100" :src="`${baseUrl}/storage/${project.cover_image}`" alt="">
         <div v-else>
            Nessuna immagine
         </div>
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">
                {{  contentPreview   }}
            </p>
            <router-Link :to="{name: 'single-project', params:{slug: project.slug}}" href="#" class="btn btn-primary">Leggi</router-Link>
        </div>
    </div>

</template>

<style >

</style>
