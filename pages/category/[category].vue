<template>
  <div class="category container">
    <h1 class="text-center text-warning m-5">{{ category }}</h1>

    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    <!--spiner without bootstrab-->
    <div v-if="loading" class="spinner-overlay">
      <div class="spinner"></div>
    </div>

    <div v-else class="row">
      <div
        class="col-12 col-md-6 col-xl-4 d-flex justify-content-center"
        v-for="product in products"
        :key="product.id"
      >
        <NuxtLink class="link" :to="`/product/${product.id}`">
          <productCard
            :id="product.id"
            :image="product.image"
            :title="product.title"
            :price="product.price"
            :description="product.description"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute, useNuxtApp } from "#app";
import productCard from "@/components/productCard.vue";

const route = useRoute();
const { $axios } = useNuxtApp();

const category = ref(route.params.category);
const products = ref([]);
const error = ref(null);
const loading = ref(true);

const fetchProducts = async () => {
  loading.value = true;
  try {
    const { data } = await $axios.get(`/products/category/${category.value}`);
    products.value = data.map((product) => ({
      ...product,
      isExpanded: false,
    }));
  } catch (err) {
    error.value = "Failed to fetch products.";
  } finally {
    loading.value = false;
  }
};

onMounted(fetchProducts);
watch(route, () => {
  category.value = route.params.category;
  fetchProducts();
});
</script>

<style scoped>
.link {
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}
.spinner-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.spinner {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #c4a02b;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
