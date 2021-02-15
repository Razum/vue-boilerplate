import { createRouter } from 'vue-router'
import history from "@/utils/history";
import Home from "@/pages/Home";

const routes = [
    { path: "/", component: Home }
];

const router = createRouter({
    history,
    routes
});

export default router;