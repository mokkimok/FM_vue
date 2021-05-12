import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Posts from '../views/Posts.vue'
import Post from '../views/Post.vue'
import New_post from '../views/New_post.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import Registration from '../views/Registration.vue'


Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
    
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
    
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
    
  },
  {
    path: '/new_post',
    name: 'New_post',
    component: New_post
    
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
    
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
    
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
    
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
    
  } 
]

const router = new Router({
  mode: 'history',
  routes
})

export default router
