//골뱅이는 무조건 src부터 시작하게 해준다.
import Main from '@/views/Main.vue'

const routes = [
    {
        path : '/',
        name : 'Main',
        component : Main
    },
    {
        path : '/about',
        name : 'About',
        component: () => import(/* webpackChunkName: "about" */"../views/About.vue")
    },
    {
        path : '/board/list',
        name : 'BoardList',
        component: () => import("../views/BoardList.vue")
    }
]
export default routes