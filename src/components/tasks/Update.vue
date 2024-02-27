<script setup>
  import {ref} from "vue";
  import {useStore} from "vuex";

  const props = defineProps({
    task: Object
  });
  const loading = ref(false);
  const store = useStore();
  async function updateTask(task) {
      loading.value = true;
      await store.dispatch('task/updateTask', task);
      loading.value = false;
  }
</script>

<template>
  <div>
    <span v-if="props.task.completed" @click="updateTask(props.task)" class="bi bi-check-all" style="font-size: 22px"></span>
    <span v-else class="bi bi-check" @click="updateTask(props.task)" style="font-size: 22px"></span>
    <span v-if="loading" class="spinner-border spinner-border-sm"></span>
  </div>
</template>

<style scoped>

</style>