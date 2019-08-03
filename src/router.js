let routes = [{
        path: '/',
        component: Mainmenu
    },
    {
        path: '/maof/:comp',
        component: Mainmenu
    },
    {
        path: '/login',
        component: Mainmenu
    },
    {
        path: '/cams',
        component: Mainmenu
    }
];

Vue.use(VueRouter);
let router = new VueRouter({
    //mode: 'history',
    routes: routes // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
    next()
})