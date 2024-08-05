<template>
  <div>
    <nuxt-link to="/cart" class="floating-button">🛒</nuxt-link>
  </div>
</template>

<script>
export default {
  name: "CartBtn",
};
</script>

<style>
.floating-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #f7db42;
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  text-decoration: none;
  z-index: 1000;
  transition: 0.3s;
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.571);
}

.floating-button:hover {
  background-color: #f2e420a0;
}
</style>
