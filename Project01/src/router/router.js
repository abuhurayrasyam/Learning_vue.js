import { createRouter, createWebHistory } from "vue-router";

// Connected all MyComponents Files.
import HomeComponent from "@/components/MyComponents/HomeComponent.vue";
import AreaComponent from "@/components/MyComponents/AreaComponent.vue";
// import AreaDetailsComponent from "@/components/MyComponents/AreaDetailsComponent.vue";
import AreaDetailsFullReactiveComponent from "@/components/MyComponents/AreaDetailsFullReactiveComponent.vue";
import ImageCarouselComponent from "@/components/MyComponents/ImageCarouselComponent.vue";
import RightSideBarComponent from "@/components/MyComponents/RightSideBarComponent.vue";
import SearchComponent from "@/components/MyComponents/SearchProfileComponent.vue";
import InvoiceComponent from "@/components/MyComponents/InvoiceComponent.vue";

const routes = [
    {
        path: "/",
        component: HomeComponent
    },
    {
        path: "/locations",
        component: AreaComponent,
        name: 'location'
    },
    {
        path: "/toggles",
        component: AreaDetailsFullReactiveComponent,
        name: 'toggle'
    },
    {
        path: "/images",
        components: {
            default: ImageCarouselComponent,
            right: RightSideBarComponent
        },
        name: 'image'
    },
    {
        path: "/images/tag/:tag",
        components: {
            default: ImageCarouselComponent,
            right: RightSideBarComponent
        },
        name: 'tag'
    },
    {
        path: "/search",
        component: SearchComponent,
        name: 'search'
    },
    {
        path: "/invoice",
        component: InvoiceComponent,
        name: 'invoice'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;