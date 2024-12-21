<template>
    <form class="cosmic-form" @submit.prevent="handleSubmit">
    <label>✨ Add Task</label>
    <input type="text" v-model="title" required>
    <label>🌟 Details</label>
    <textarea v-model="details" required></textarea>
    <button type="submit">Update ⭐</button>
  </form>
</template>

<script>
export default {
    name: 'EditTask',
    props: ['id'],
    emits: ['updated'],
    data(){
        return {
            title: '',
            details: '',
            uri: 'http://localhost:3000/tasks/' + this.id,
            complete: false
        }
    },
    mounted(){
        fetch(this.uri)
        .then(res => res.json())
        .then(data => {
            this.title = data.title
            this.details = data.details
            this.complete = data.complete
        }).catch(err => console.log(err))
    },
    methods: {
        handleSubmit(){
            fetch(this.uri, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    title: this.title, 
                    details: this.details, 
                    complete: this.complete
                })
            })
            .then(() => {
                this.$emit('updated')
                this.$router.push('/')
            })
            .catch(err => console.log(err.message))
        }
    }

}
</script>

<style>

</style>