import { createRouter } from 'vue-router'
import history from "@/utils/history";
import Home from "@/pages/Home";
import AboutUs from "@/pages/AboutUs";

const routes = [
    { path: "/", component: Home },
    { path: "/about-us", component: AboutUs }
];

const router = createRouter({
    history,
    routes
});

export default router;