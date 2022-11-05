import { createRouter, createWebHistory } from "vue-router";
import store from "./store/index";
import Login from "./view/Login.vue";
import Register from "./view/Register.vue";
import Home from "./view/Home.vue";

const isAuth = (to, from) => {
    if(store.getters.isAuth){
        return { name: "home" };
    }
}

const routes = [
    {
        path: "/login",
        component: Login,
        name: "login",
        beforeEnter: isAuth,
    },
    {
        path: "/register",
        component: Register,
        name: "register",
        beforeEnter: isAuth,
    },
    { path: "/", component: Home, name: "home" },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from) => {
    if (!store.getters.isAuth && !["login", "register"].includes(to.name)) {
        return { name: "login" };
    }
});

export default router;
