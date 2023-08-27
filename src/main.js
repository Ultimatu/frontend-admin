import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import router from '../src/router/index'
import { createPinia } from 'pinia'; // Import Pinia
const pinia = createPinia();

createApp(App).use(router).use(pinia).mount('#app')
