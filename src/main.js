import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'



const app = createApp(App);




// import global components





app.use(store);
app.use(router)
app.mount('#app');
