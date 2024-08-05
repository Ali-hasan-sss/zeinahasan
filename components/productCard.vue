<template>
  <div
    class="product-card col-12 col-md-6 col-xl-4 d-flex justify-content-center mb-5"
  >
    <div class="image-container">
      <img class="pro-img" :src="image" alt="Product Image" />
      <img
        class="icon"
        src="~/assets/Icons/heart_10826871.png"
        alt="Heart Icon"
      />
    </div>
    <h2 class="text-center">{{ title }}</h2>
    <p class="price text-center text-warning">{{ price }}</p>

    <button type="button" class="see-more" @click="openModal">SEE MORE</button>

    <!-- Modal -->
    <div class="modal fade" :id="`modal-${id}`" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalLabel">{{ title }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <img class="pro-img" :src="image" alt="Product Image" />
            <p>{{ description }}</p>
            <p class="price text-warning">{{ price }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "ProductCard",
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    openModal() {
      const modal = document.getElementById(`modal-${this.id}`);
      if (modal) {
        const modalInstance = bootstrap.Modal.getOrCreateInstance(modal);
        modalInstance.show();
      }
    },
  },
});
</script>

<style scoped>
.product-card {
  width: 250px;
  background-color: transparent;
  margin: 10px;
  box-shadow: 0 2px 10px #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

.image-container {
  width: 100%;
  height: 80%;
  position: relative;
  overflow: hidden;
}

.pro-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: #fff;
}

.icon {
  position: absolute;
  width: 30px;
  top: 5px;
  right: 5px;
  cursor: pointer;
}

h2 {
  font-size: 1.5em;
  margin: 20px 0 10px;
  text-align: center;
}

.price {
  font-size: 1.2em;
  color: #555;
  margin-bottom: 20px;
}

.see-more {
  width: 100%;
  background-color: transparent;
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  border: 1px solid #fde044b2;
  cursor: pointer;
  transition: 0.3s;
  text-transform: uppercase;
}

.see-more:hover {
  background-color: #fde044b2;
}

.modal-content {
  background-color: #000;
}
</style>
