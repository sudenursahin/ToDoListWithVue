<template>
  <nav class="filter-nav">
    <button @click="updateFilter('all')" :class="{active: currentFilter === 'all'}">all</button>
    <button @click="updateFilter('completed')" :class="{active: currentFilter === 'completed'}">completed</button>
    <button @click="updateFilter('incomplete')" :class="{active: currentFilter === 'incomplete'}">incomplete</button>
  </nav>
</template>

<script>
export default {
    emits: ['filterChange'],
    props: ['currentFilter'],
    methods: {
        updateFilter(filterValue){
            this.$emit('filterChange',filterValue)
        }
    }
}
</script>

<style>
.filter-nav {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 20px 0;
}

.filter-nav button {
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.8);
  color: #ffa6d3;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 10px rgba(255, 105, 180, 0.2);
  opacity: 0.7;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.filter-nav button:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 15px rgba(255, 105, 180, 0.3);
  opacity: 0.9;
}

.filter-nav button.active {
  background: linear-gradient(45deg, #ffa6d3, #ff8ac6);
  color: white;
  opacity: 1;
  box-shadow: 0 4px 20px rgba(255, 105, 180, 0.4);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.filter-nav button:not(.active) {
  backdrop-filter: blur(2px);
}

/* Add sparkles to buttons */
.filter-nav button::after {
  content: '✨';
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.filter-nav button.active::after {
  opacity: 1;
}

.filter-nav button:hover::after {
  opacity: 1;
}
</style>