<template>
  <div class="task" :class="{complete:task.complete}" >
    <div class="actions">
      <h3 @click="toggleDetails">{{ task.title }}</h3>
      <div class="icons">
        <span @click="deleteTask" class="material-symbols-outlined">delete</span>
        <router-link :to="{name:'editTask',params:{id:task.id}}">
        <span @click="editTask" class="material-symbols-outlined">edit</span>
        </router-link>
        <span @click="toggleDone" class="material-symbols-outlined tick">done</span>
       
      </div>
    </div>
    <div class="details" v-if="showDetails">
      <p>{{ task.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
    props: ['task'],
    emits: ['delete', 'complete'],
    data(){
        return {
            showDetails: false,
            uri: 'http://localhost:3000/tasks/' + this.task.id
        }
    },
    methods: {
        toggleDetails(){
            this.showDetails = !this.showDetails
        },
        deleteTask(){
            fetch(this.uri, { method: 'DELETE' })
                .then(() => {
                    this.$emit('delete', this.task.id)
                })
                .catch((err) => console.log(err))
        },
        toggleDone() {
            fetch(this.uri, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: this.task.title,
                    details: this.task.details,
                    complete: !this.task.complete
                })
            })
            .then(() => this.$emit('complete', this.task.id))
            .catch((err) => console.log(err.message))
        }
    }
}
</script>

<style>
.task {
  background: rgba(255, 255, 255, 0.85);
  padding: 15px 25px;
  margin: 20px 0;
  border-radius: 20px;
  border-left: 8px solid rgba(66, 114, 187, 0.7);
  box-shadow: 0 8px 25px rgba(255, 192, 203, 0.2);
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
}

.task:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(255, 192, 203, 0.3);
  
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.actions h3 {
  color: #333;
  cursor: pointer;
  transition: color 0.3s ease;
  margin: 0;
}

.icons {
  display: flex;
  gap: 10px;
  font-size: 20px;
  
}

.material-symbols-outlined {
  cursor: pointer;
  margin-left: 10px;
  color:#666;

}

.details {
  margin-top: 15px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 15px;
  border: 1px solid rgba(255, 192, 203, 0.3);
}

.details p {
  color: #666;
  line-height: 1.5;
}

.task.complete{
    border-left: 8px solid rgba(255, 105, 180, 0.7);
}

.task.complete .tick{
    color: rgba(255, 105, 180, 0.7);
}
</style>