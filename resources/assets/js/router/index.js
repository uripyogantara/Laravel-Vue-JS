import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// import PenerbitComponent from '../components/PenerbitComponent.vue'
// import BookComponent from '../components/BookComponent.vue'
// import PengarangComponent from '../components/PengarangComponent.vue'
// import HomeComponent from '../components/ExampleComponent.vue'

// const Home = () => System.import('../components/ExampleComponent.vue')
// const Book = () => System.import('../components/BookComponent.vue')
// const Penerbit = () => System.import('../components/PenerbitComponent.vue')
// const Pengarang = () => System.import('../components/PengarangComponent.vue')

// // const Login = () => System.import('../components/PenerbitComponent.vue')

const router = new Router({
    mode:'history',
    routes: [
        {
            path: '/', 
            component:function(resolve){
                require(['../components/ExampleComponent.vue'],resolve)
            }
        },
        {
            path: '/book', 
            component:function(resolve){
                require(['../components/BookComponent.vue'],resolve)
            }
        },
        {
            path: '/penerbit', 
            component: function(resolve){
                require(['../components/PenerbitComponent.vue'],resolve)
            }
        },
        {
            path: '/pengarang', 
            component: function(resolve){
                require(['../components/PengarangComponent.vue'],resolve)
            }
        },
    ]
})

export default router