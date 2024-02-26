<script setup>
  import {computed} from "vue";
  import {useStore} from "vuex";

  const store = useStore();
  const count = computed(() => store.state.count)

</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center mt-5">
        <h1>Vuex Tutorial - Moosavi</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ad cumque deserunt eligendi eum itaque molestias odio sed sequi sit vero.
          Exercitationem fuga magni non officia porro, similique vitae voluptas voluptatem!</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>