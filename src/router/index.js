import {createRouter, createWebHistory,} from "vue-router";

const routes = [
    {
        path: '/',
        name: "Home",
        component: Home,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {top: 0}
        }
    }
});
router.beforeEach((to, from, next) => {
    if (!(to.meta.middleware)) {
        return next()
    }
    const middleware = to.meta.middleware;
    console.log("MIDDLEWARE");
    const context = {
        to,
        from,
        next,
        route: next,
        store
    }
    return middleware[0]({
        ...context,
        route: next,
        next: middlewarePipeline(context, middleware, 1)
    })
});
export default router;
