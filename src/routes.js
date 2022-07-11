import { createRouter, createWebHistory } from 'vue-router'
import Login from "./LoginComp";
import Register from "./RegisterComp";
import Admin from "./AdminComp";
import Post from "./PostComp";


const routes = [
  {
    path: "/",
    component: Admin,
    name: "Home",
  },
  {
    path: "/post/:id",
    component: Post,
    name: "Post",
  },
  {
    path: "/login",
    component: Login,
    name: "Login",
  },
  {
    path: "/register",
    component: Register,
    name: "Register",
  }
]
 
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
 
export default router
