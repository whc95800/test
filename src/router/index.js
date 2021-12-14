import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Housing from "../views/Housing";
import About from "../views/About";
import Contact from "../views/Contact";
import Access from "../views/Access";
import Store from "../views/Store";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Housing',
    name: 'Housing',
    component: Housing
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
    path: '/Store',
    name: 'Store',
    component: Store
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
