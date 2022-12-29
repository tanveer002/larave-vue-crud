<template>
    <div>
        <h2>Create Post</h2>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="createPost">
                    <div class="form-group">
                        <label for="">Post Title</label>
                        <input type="text" class="form-control" v-model="post.title">
                    </div>
                    <div class="form-group">
                        <label>Detail</label>
                        <input type="text" class="form-control" v-model="post.detail">
                    </div>
                    <button type="submit" class="btn btn-primary">Create Post</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                post: {}
            }
        },
        methods: {
            createPost() {
                this.axios
                    .post(route('post.store', this.post))
                    .then(response => (
                        this.$router.push({ name: 'post' })
                    ))
                    .catch(err => console.log(err))
                    .finally(() => this.loading = false)
            }
        }
    }
</script>