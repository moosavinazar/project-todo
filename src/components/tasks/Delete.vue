<script setup>
  import {ref} from "vue";
  import {useStore} from "vuex";

  const props = defineProps({
    id: Number
  });
  const loading = ref(false);
  const store = useStore();
  async function deleteTask() {
      loading.value = true;
      await store.dispatch('task/deleteTask', props.id);
      loading.value = false;
  }
</script>

<template>
  <div>
    <span @click="deleteTask" class="bi bi-trash-fill ms-3"></span>
    <span v-if="loading" class="spinner-border spinner-border-sm"></span>
  </div>
</template>

<style scoped>

</style>