import { createApp, h } from 'vue'
import App from './App.vue'
import router from './routes'
import VueAxios from 'vue-axios';
import axios from 'axios';

const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
app.mount('#app')