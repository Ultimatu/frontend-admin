import { createRouter, createWebHistory } from "vue-router";


const routes =[
  {path:'/',name:'LoginPage',component:()=> import('@/views/LoginPage.vue')},
 // {path:'/home',name:'Home',component:()=> import('@/views/Home.vue')},
  {
    path:'/dashboard',
    name:'Dashboard',
    component:()=> import('@/views/Dashboard/Dashboard.vue'),
    children: [
      {

        path: '/newCandidat',
        component: ()=> import('@/views/Dashboard/NewCandidat.vue'),
      },
      {
        path: '/home',
        component: ()=> import('@/views/Dashboard/Home.vue'),
      },
      {
        path: '/candidats',
        component: ()=> import('@/views/Dashboard/CandidatList.vue'),
      },
      {
        path: '/add-sondage',
        component: ()=> import('@/views/Dashboard/AddSondage.vue'),
      },
    ],
  },
  

]


const router = createRouter({
  routes,
  history:createWebHistory(),
})

export default router;