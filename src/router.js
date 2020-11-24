import Vue from "vue"
import Router from "vue-router"
import canvasMenu from "./components/canvasMenu";
import Menu from "./components/Menu";


Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Menu
        },
        {
            path: '/menu',
            component: canvasMenu,
            children: [
                {
                    // при совпадении пути с шаблоном /menu/roomMenu
                    // в <router-view> компонента User будет показан roomMenu
                    path: 'roomMenu',
                    component: () => import("./components/roomMenu")
                },
                {
                    path: 'carousel',
                    component: () => import("./components/roomFilters/verticalSlider")
                },
                {
                    path: 'verticalSlider',
                    component: () => import("./components/roomFilters/verticalSlider")
                },
                {
                    path: 'showFlat',
                    component: () => import("./components/flatInfo/flatMenu")
                },
                {
                    path: 'showDataTime',
                    component: () => import("./components/DataTime/DataTimeFilter")
                },
                /*{
                    path: 'showData',
                    component: () => import("./components/DataTime/DataFilter")
                },*/
                /*{
                    path: 'showTime',
                    component: () => import("./components/DataTime/TimeFilter")
                },*/
            ]
        },
        {
            path: "/showDataTime",
            component: () => import("./components/DataTime/canvasDataTime"),
            children: [
                {
                    path: "showData",
                    component: () => import("./components/DataTime/DataFilter"),
                },
                {
                    path: "showTime",
                    component: () => import("./components/DataTime/TimeFilter"),
                }
            ]
        },
        {
            path: "/listCard",
            component: () => import("./components/listCards")
        },
        /*{
            path: "/carousel",
            component: () => import("./components/verticalCarousel")
        },*/

    ]
})
