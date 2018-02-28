import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Penerbit from '../components/PenerbitComponent.vue'
import Book from '../components/BookComponent.vue'
import Pengarang from '../components/PengarangComponent.vue'

const router = new Router({
    mode:'history',
    routes: [
        {path: '/home', component: require('../components/ExampleComponent.vue')},
        {path: '/home/book', component: Book},
        {path: '/home/penerbit', component: Penerbit},
        {path: '/home/pengarang', component: Pengarang},
    ]
})

export default router