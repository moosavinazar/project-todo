<script setup>
  import {useStore} from "vuex";
  import {computed} from "vue";

  const store = useStore();
  const products = computed(()=>store.getters["product/allProduct"]);

  function addToCart(product) {
    store.dispatch("cart/addToCart", product);
  }
</script>

<template>
  <div>
    <div class="container mt-5">
      <div class="row g-3">
        <div v-for="product in products" :key="product.id" class="col-md-3">
          <div class="card">
            <img class="card-img-top" :src="product.image">
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">{{ product.description }}</p>
            </div>
            <div class="card-footer d-flex justify-content-between align-items-center">
              <button @click="addToCart(product)" class="btn btn-outline-success btn-sm">Add to cart</button>
              <span>{{ product.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>