<template>
    <div>
        <h2>Post components</h2>
        <router-link to="/createPost" class="btn btn-success">Create Post</router-link>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Post</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts" :key="post.id">
                    <td>{{ post.id }}</td>
                    <td>{{ post.title }}</td>
                    <td>{{ post.post }}</td>
                    <td>
                        <div class="btn-group" role="group">
                        <router-link :to="{name: 'editPost', params: { id: post.id }}" class="btn btn-success">Edit</router-link>
                        <button class="btn btn-danger" @click="deletePost(post.id)">Delete</button>
                    </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <router-view> </router-view>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                posts: []
            }
        },
        
        created() {
            this.axios
            .get(route('post.index'))
            .then(response => {
                this.posts = response.data
            });
            
        },
        methods: {
            deletePost(id) {
                this.axios
                    .delete(route('post.destroy', {post: id}), this.post)
                    .then(response => {
                        let i = this.posts.map(data => data.id).indexOf(id);
                        this.posts.splice(i, 1)
                    });
            }
        }
    }
</script>