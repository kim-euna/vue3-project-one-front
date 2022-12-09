//골뱅이는 무조건 src부터 시작하게 해준다.
import Main from '@/views/Main.vue'
import DiarydWrite from '@/views/DiaryWrite.vue'

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
        path : '/diary/main',
        name : 'DiaryMain',
        component: () => import("../views/DiaryMain.vue")
    },
    {
        path : '/diary/list',
        name : 'DiaryList',
        component: () => import("../views/DiaryList.vue")
    },
    {
        path : '/diary/detail',
        name : 'DiaryDetail',
        component: () => import("../views/DiaryDetail.vue")
    },
    {
        path : '/diary/guestBook',
        name : 'GuestBook',
        component: () => import("../views/GuestBook.vue")
    },
    {
        path : '/diary/write',
        name : 'DiaryWrite',
        component: DiarydWrite
    },
]
export default routes