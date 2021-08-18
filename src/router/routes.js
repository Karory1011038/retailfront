import MainLayout from "../layouts/MainLayout";
import Catalog from "@/pages/Catalog";
import Favorites from "@/pages/Favorites";
import Orders from "@/pages/Orders";
import Cart from "@/pages/Cart";

const Home = () => import(/* webpackChunkName: "home" */ '@/pages/Home')

const routes = [
    {
        path: "/",
        component: MainLayout,
        children: [
            {
                name:'home',
                path:'/',
                component: Home
            },
            {
                name:'catalog',
                path:'/catalog',
                component: Catalog
            },
            {
                name:'favorites',
                path:'/favorites',
                component: Favorites
            },
            {
                name:'orders',
                path:'/orders/:id',
                component: Orders
            },
            {
                name:'cart',
                path:'/cart',
                component: Cart
            },
        ]
    }
]

export default routes