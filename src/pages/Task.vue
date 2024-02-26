<script setup>
  import {useStore} from "vuex";
  import {computed} from "vue";

  const store = useStore();
  const tasks = computed(()=>store.getters.allTasks);
  function fetchTasks() {
    store.dispatch('fetchTasks');
  }
  fetchTasks();
</script>

<template>
  <h2>Task Component</h2>
  {{ tasks }}
</template>

<style scoped>

</style>