import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router' //route added

createApp(App).use(router).mount('#app') //route added
