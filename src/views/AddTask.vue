<template>
  <form class="cosmic-form" @submit.prevent="handleSubmit">
    <label>✨ Add Task</label>
    <input type="text" v-model="title" required>
    <label>🌟 Details</label>
    <textarea v-model="details" required></textarea>
    <button type="submit">Add Task ⭐</button>
  </form>
</template>

<script>
export default {
    data(){
        return {
            title: '',
            details: '',
            uri: 'http://localhost:3000/tasks/'
        }
    },
    methods:{
        handleSubmit(){
            let task = {
                id: Math.floor(Math.random()*1000000),
                title: this.title,
                details: this.details,
                isDone: false
            }
            
            fetch(this.uri, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    title: task.title,
                    details: task.details,
                    complete: task.isDone
                })
            })
            .then(() => this.$router.push('/'))
            .catch((err) => console.log(err.message))
        }
    }

}
</script>

<style>
form.cosmic-form {
    background: linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,192,203,0.8));
    padding: 25px;
    border-radius: 20px;
    backdrop-filter: blur(10px);
    box-shadow: 0 0 20px rgba(255,182,193,0.5),
                inset 0 0 20px rgba(255,255,255,0.5);
    position: relative;
    overflow: hidden;
}

form.cosmic-form::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50L20 20M50 50L80 80M50 50L80 20M50 50L20 80' stroke='rgba(255,192,203,0.2)' stroke-width='1'/%3E%3C/svg%3E");
    opacity: 0.3;
    z-index: -1;
}

input, textarea {
    position: relative;
    z-index: 1;
    width: 100%;
    border: none;
    background: rgba(255,255,255,0.6);
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
    transition: all 0.3s ease;
    box-shadow: 0 0 10px rgba(255,182,193,0.2);
    outline: none;
    border: 2px solid transparent;
}

input:focus, textarea:focus {
    background: rgba(255,255,255,0.9);
    box-shadow: 0 0 15px rgba(255,182,193,0.4);
    transform: scale(1.01);
    border: 2px solid #ff69b4;
    outline: none;
}

label {
    margin: 20px 0px 10px 0;
    display: block;
    color: #ff69b4;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-shadow: 0 0 5px rgba(255,182,193,0.5);
}

button {
    margin: 25px auto;
    width: 100%;
    background: linear-gradient(45deg, #ff69b4, #ff1493);
    color: white;
    border: none;
    padding: 12px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 25px;
    display: block;
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(255,105,180,0.3);
}

button:hover {
    transform: translateY(-2px);
    box-shadow: 0 7px 20px rgba(255,105,180,0.4);
    background: linear-gradient(45deg, #ff1493, #ff69b4);
}

/* Animasyonlu yıldızlar için */
@keyframes twinkle {
    0% { opacity: 0.3; }
    50% { opacity: 1; }
    100% { opacity: 0.3; }
}

form.cosmic-form::after {
    content: '✨';
    position: absolute;
    font-size: 20px;
    animation: twinkle 2s infinite;
    right: 20px;
    top: 20px;
}
</style>