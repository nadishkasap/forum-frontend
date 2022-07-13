import { createApp } from 'vue'
import App from './App.vue'
import router from './routes.js'
import store from './store/store.js'
// import axios


createApp(App).use(router).use(store).mount('#app')

