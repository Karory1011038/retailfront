import MainLayout from "../layouts/MainLayout";
// import Catalog from "@/pages/Catalog";
// import Favorites from "@/pages/Favorites";
// import Orders from "@/pages/Orders";
// import Cart from "@/pages/Cart";
// import Settings from "@/pages/Settings";

const Home = () => import(/* webpackChunkName: "home" */ '@/pages/Home')
const Catalog = () => import(/* webpackChunkName: "catalog" */ '@/pages/Catalog')
const Favorites = () => import(/* webpackChunkName: "favorites" */ '@/pages/Favorites')
const Orders = () => import(/* webpackChunkName: "orders" */ '@/pages/Orders')
const Cart = () => import(/* webpackChunkName: "cart" */ '@/pages/Cart')
const Settings = () => import(/* webpackChunkName: "settings" */ '@/pages/Settings')
const Clients = () => import(/* webpackChunkName: "settings" */ '@/pages/Clients')

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
            {
                name:'settings',
                path:'/settings',
                component: Settings
            },
            {
                name:'clients',
                path:'/clients',
                component: Clients
            },
        ]
    }
]

export default routes