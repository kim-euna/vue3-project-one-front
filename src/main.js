import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App'
import router_main from './router/index.js'

import BootStrapVue from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import axios from 'axios'

//createRotuer : 실제 Vue Router 인스턴스를 생성할 때 쓰이는 function
const router = createRouter(
    {
        /** process.env.BASE_URL은 기본 값으로 "/"를 갖는다. 
         다만, vue.config.js 파일에서 임의로 설정 값을 지정할 수 있다. */

                  //createWebHashHistory : Vue Router를 통해 URL로 매핑된 vue 컴포넌트를 전환할 시에 필요한 히스토리 관리 기법을, 해시형으로 쓸 수 있게 해주는 인스턴스를 생성하는 function 
                  //createWebHistory : 또 다른 인스턴스 생성 기법. hash(#)가 붙지 않는다.
        history : createWebHistory(process.env.BASE_URL),
        routes : router_main
    }
)

const app = createApp(App);
app.use(router);
app.use(BootStrapVue);
app.config.globalProperties.$axios = axios;  //라이브러리를 전역에서 사용하도록 전역변수로 설정. 컴포넌트에서 this.$axios 호출할 수 있음
app.config.globalProperties.$serverUrl = '//localhost:8081' //api server

const instance = app.mount('#app');

export { app, instance };

