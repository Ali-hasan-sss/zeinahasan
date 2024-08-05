import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: typeof window !== "undefined" && localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  }),
  getters: {
    cartTotal: (state) => {
      return state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
  actions: {
    addToCart(item) {
      const existingItem = this.cartItems.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        this.cartItems.push({ ...item, quantity: item.quantity || 1 });
      }
      this.saveCart();
    },
    removeFromCart(productId) {
      this.cartItems = this.cartItems.filter((item) => item.id !== productId);
      this.saveCart();
    },
    updateQuantity(productId, quantity) {
      const item = this.cartItems.find((item) => item.id === productId);
      if (item) item.quantity = quantity;
      this.saveCart();
    },
    saveCart() {
      if (typeof window !== "undefined") {
        localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
      }
    },
  },
});
