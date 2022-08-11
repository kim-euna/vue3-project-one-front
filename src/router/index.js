//골뱅이는 무조건 src부터 시작하게 해준다.
import Main from '@/views/Main.vue'
import BoardWrite from '@/views/BoardWrite.vue'

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
        path : '/board/main',
        name : 'BoardMain',
        component: () => import("../views/BoardMain.vue")
    },
    {
        path : '/board/list',
        name : 'BoardList',
        component: () => import("../views/BoardList.vue")
    },
    {
        path : '/board/detail',
        name : 'BoardDetail',
        component: () => import("../views/BoardDetail.vue")
    },
    {
        path : '/board/write',
        name : 'BoardWrite',
        component: BoardWrite
    },
]
export default routes