import { createApp } from 'vue'
import App from './App.vue'
import router from './routes.js'
// import axios
import axios from 'axios'
// define baseURL
axios.defaults.baseURL = 'http://localhost/forum/'
createApp(App).use(router).mount('#app')

