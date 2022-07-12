import { createApp } from 'vue'
import App from './App.vue'
import BootStrapVue from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

createApp(App).mount('#app')
createApp(App).use(BootStrapVue);