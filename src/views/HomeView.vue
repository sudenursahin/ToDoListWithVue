<template>
  <div>
  <FilterTask :currentFilter="currentFilter" @filterChange="changeFilter" />
 <div v-if="tasks.length">
  <div v-for="task in filteredTasks" :key="task.id">
    <SingleTask :task="task" @delete="handleDelete" @complete="handleComplete" />
  </div>
 </div>
 <div v-else>
  <h1>No tasks</h1>
 </div>
</div>
</template>

<script>
import SingleTask from '../components/SingleTask.vue'
import FilterTask from '../components/FilterTask.vue'
export default {
  name: 'HomeView',
  components: {
    SingleTask,
    FilterTask
  },
  data(){
    return {
      tasks: [],
      currentFilter: 'all'
    }
  },
  mounted(){
    fetch('http://localhost:3000/tasks')
    .then(response => response.json()).then(data => this.tasks = data) .catch(err => console.log(err.message))
  },
  methods: {
    handleDelete(id){
      this.tasks = this.tasks.filter(task =>
      { return  task.id !== id })
    },
    handleComplete(id){
      let myTask = this.tasks.find(task=>{
        return task.id === id
      })
      myTask.complete = !myTask.complete
    },
    changeFilter(filterValue){
      this.currentFilter = filterValue
    }
  },
  computed: {
    filteredTasks(){
      if(this.currentFilter === 'completed'){
        return this.tasks.filter(task => task.complete)
      }
      else if(this.currentFilter === 'incomplete'){
        return this.tasks.filter(task => !task.complete)
      }
      return this.tasks
    }
  }

}
</script>

