import { createRouter, createWebHistory } from 'vue-router'
import AuthPage from '../views/Auth/AuthPage';
const routes = [

  {
    path:'/',
    redirect:'/Auth',
  },{
    path:'/Auth',
    name:'Auth',
    component:AuthPage,
    meta:{
      title:'Auth'
    }
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,_,next) =>{
  document.title = to.meta.title;
  next();
});
export default router
