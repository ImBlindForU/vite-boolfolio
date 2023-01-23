import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AboutUs from "./pages/AboutUs.vue";
import ProjectList from "./pages/ProjectList.vue";
import NotFound from "./pages/NotFound.vue";
import SingleProject from "./pages/SingleProject.vue";


const router = createRouter({
    history: createWebHistory(),
    routes:[
    {
        path:'/',
        name: 'home',
        component: HomePage,
    },
    {
        path:'/about-us',
        name: 'about',
        component: AboutUs,
    },
    {
        path:'/project-list',
        name: 'project',
        component: ProjectList,
    },
    {
        path:'/project-list/:slug',
        name: 'single-project',
        component: SingleProject,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: NotFound,
      },

]
});

export { router }