<script setup>
  import {useStore} from "vuex";
  import {ref} from "vue";

  const store = useStore();
  const title = ref('');
  const titleErrorText = ref('');
  const loading = ref(false);
  async function storeTask() {
    if (title.value === "") {
      titleErrorText.value = "Title is required";
    } else {
      loading.value = true;
      titleErrorText.value = "";
      await store.dispatch('task/storeTask', title.value);
      loading.value = false;
    }
  }
</script>

<template>
  <div class="row">
    <div class="col-md-12 mb-4">
      <h4>Create Tasks:</h4>
      <form @submit.prevent="storeTask" class="row">
        <div class="col-md-6">
          <input v-model="title" class="form-control" type="text">
          <div class="form-text text-danger">
            {{ titleErrorText }}
          </div>
        </div>
        <div class="col-auto">
          <button class="btn btn-dark">
            <span v-if="loading" class="spinner-border spinner-border-sm"></span>
            Create
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>