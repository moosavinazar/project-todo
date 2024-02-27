<script setup>
  import {useStore} from "vuex";
  import {ref} from "vue";

  const store = useStore();
  const title = ref('');
  const titleErrorText = ref('');
  function storeTask() {
    if (title.value === "") {
      titleErrorText.value = "Title is required";
    } else {
      titleErrorText.value = "";
      store.dispatch('storeTask', title.value);
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
          <button class="btn btn-dark">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>