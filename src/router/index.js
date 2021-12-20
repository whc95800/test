import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home';
import Item from "../views/Item";
import About from "../views/About";
import Contact from "../views/Contact";
import Access from "../views/Access";
import Management from "../views/Management";
import News from "../views/News";
import Recruit from "../views/Recruit";
import House from "../views/House";
import showItems from "../views/ShowItems";
import NewsItem from "../views/NewsItem";
import ShowNews from "../views/ShowNews";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Item',
        name: 'Item',
        component: Item,
        children: [
            {
                path: '',
                name: 'showItems',
                component: showItems,
            },
            {
                path: '/Item/:id',
                name: 'House',
                component: House,
            },
        ]
    },
    {
        path: '/About',
        name: 'About',
        component: About
    },
    {
        path: '/Contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/Access',
        name: 'Access',
        component: Access
    },
    {
        path: '/Management',
        name: 'Management',
        component: Management
    },
    {
        path: '/News',
        name: 'News',
        component: News,
        children: [
            {
                path: '',
                name: 'ShowNews',
                component: ShowNews,
            },
            {
                path: '/News/:id',
                name: 'NewsItem',
                component: NewsItem,
            },
        ]
    },
    {
        path: '/Recruit',
        name: 'Recruit',
        component: Recruit
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
