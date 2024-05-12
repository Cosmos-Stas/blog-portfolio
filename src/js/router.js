import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./HomePage.vue"
import ProjectPage from "./ProjectPage.vue"
import ContactPage from "./ContactPage.vue"
import DiplomPage from "./DiplomPage.vue"

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/home', component: HomePage, alias: '/'},
        {path: '/project', component: ProjectPage},
        {path: '/contact', component: ContactPage},
        {path: '/diploms', component: DiplomPage},
    
    ] 
})