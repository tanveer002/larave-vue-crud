import { createRouter, createWebHistory } from 'vue-router';

import AllProduct from './components/AllProduct.vue';
import CreateProduct from './components/CreateProduct.vue';
import EditProduct from './components/EditProduct.vue';
import AllPost from './components/AllPost.vue';
import CreatePost from './components/CreatePost.vue';
import EditPost from './components/EditPost.vue';
 
export const routes = [
    {
        name: 'home',
        path: '/',
        component: AllProduct
    },
    {
        name: 'create',
        path: '/create',
        component: CreateProduct
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditProduct
    },
    {
        name: 'post',
        path: '/post',
        component: AllPost
    },
    {
        name: 'createPost',
        path: '/createPost',
        component: CreatePost
    },
    {
        name: 'editPost',
        path: '/editPost/:id',
        component: EditPost
    }
];


const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes
});

export default router;