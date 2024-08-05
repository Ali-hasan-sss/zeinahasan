<template>
  <div>
    <div class="container product">
      <!--spiner without bootstrab-->
    <div v-if="loading" class="spinner-overlay">
      <div class="spinner"></div>
    </div>

      <h1 class="text-center m-4 text-warning">{{ product.title }}</h1>
      <img :src="product.image" alt="Product Image" />
      <p class="dis w-5 text-light">{{ product.description }}</p>
      <p class="price">${{ product.price }}</p>
      <button class="btn btn-outline-warning w-5" @click="addToCart(product)">
        Add to Cart
      </button>
      <!-- Floating message -->
      <transition
        name="fade"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
      >
        <div v-if="showMessage" class="floating-message">
          Product added to cart!
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useCartStore } from "@/stores/cart"; 

const route = useRoute();
const { id } = route.params;
const loading = ref(true);

const product = ref({});
const showMessage = ref(false); // Ref to control the visibility of the message

onMounted(async () => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  product.value = data;
  loading.value = false;
});

const cartStore = useCartStore(); 

const addToCart = (product) => {
  // Add the product to cart with quantity set to 1
  cartStore.addToCart({ ...product, quantity: 1 });
  showMessage.value = true; // Show the message
  setTimeout(() => {
    showMessage.value = false; // Hide the message after 2 seconds
  }, 2000);
};

const beforeEnter = (el) => {
  el.style.opacity = 0;
};

const enter = (el, done) => {
  el.offsetHeight;
  el.style.transition = "opacity 1s";
  el.style.opacity = 1;
  done();
};

const leave = (el, done) => {
  el.style.transition = "opacity 1s";
  el.style.opacity = 0;
  setTimeout(done, 1000);
};
</script>

<style scoped>
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
img {
  width: 250px;
}
.dis {
  text-decoration: none;
}
.price {
  color: rgb(12, 231, 59);
}

.floating-message {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 15px;
  background-color: #20fb53;
  color: white;
  border-radius: 5px;
  box-shadow: 0 4px 8px #fff;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
