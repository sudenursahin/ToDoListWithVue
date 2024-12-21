import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddTask from '../views/AddTask.vue'
import EditTask from '../views/EditTask.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/addTask',
    name: 'addTask',
    component: AddTask
  },
  {
    path: '/editTask/:id',
    name: 'editTask',
    component: EditTask,
    props: true // to fetch id as a prop we need this line
  }
] 

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
