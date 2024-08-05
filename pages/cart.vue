<template>
  <div>
    <div class="container cart">
      <h1 class="text-center mt-4 text-warning">Shopping Cart</h1>
      <div class="text-danger text-center" v-if="cartItems.length === 0">
        Your cart is empty
      </div>
      <div class="row cart-content" v-else>
        <div
          class="col-6 col-lg-4 item"
          v-for="item in cartItems"
          :key="item.id"
        >
          <img :src="item.image" alt="Product Image" class="product-image" />
          <h6 class="text-light">{{ item.title }}</h6>
          <p class="h5 text-warning">{{ item.price }} $</p>
          <input
            class="input text-light bg-dark"
            type="number"
            v-model.number="item.quantity"
            @change="updateQuantity(item.id, item.quantity)"
            min="1"
          />
          <button class="btn btn-danger" @click="removeFromCart(item.id)">
            Remove
          </button>
        </div>
        <p class="text-light text-center mt-3">
          Total : <b class="text-success"> {{ cartTotal }} $</b>
        </p>
        <button
          class="btn btn-outline-warning bay"
          @click="bayNow"
        >
          Buy now
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useCartStore } from '@/stores/cart';

export default {
  setup() {
    const cartStore = useCartStore();

    const cartItems = computed(() => cartStore.cartItems);
    const cartTotal = computed(() => cartStore.cartTotal);

    const removeFromCart = (productId) => {
      cartStore.removeFromCart(productId);
    };

    const updateQuantity = (productId, quantity) => {
      cartStore.updateQuantity(productId, quantity);
    };

    const bayNow = () => {
      // Implement the buy now functionality
      alert('Buy now functionality to be implemented.');
    };

    return {
      cartItems,
      cartTotal,
      removeFromCart,
      updateQuantity,
      bayNow,
    };
  },
};
</script>

<style scoped>
.cart-content {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.item {
  width: 200px;
  background-color: transparent;
  margin: 10px;
  box-shadow: 0 2px 10px #fff;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}
.product-image {
  width: 100%;
  position: relative;
  overflow: hidden;
}
input {
  outline: none;
  border: 1px solid #fde044b2;
  padding: 2px;
}
.bay {
  width: 50%;
}
</style>
