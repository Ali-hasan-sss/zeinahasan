<template>
  <div class="container">
    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/Images/Header 1.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="@/assets/Images/Header 2.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="@/assets/Images/Header 3.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="radio">
      <div
        v-for="(item, index) in 3"
        :key="index"
        :class="['ratio', { ratio1: activeIndex === index }]"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        :data-bs-slide-to="index"
        :aria-current="index === 0 ? 'true' : ''"
        :aria-label="'Slide ' + (index + 1)"
        @click="activ(index)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
  data() {
    return {
      activeIndex: 0,
    };
  },
  methods: {
    activ(index) {
      this.activeIndex = index;
    },
  },
};
</script>

<style scoped>
.radio {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  gap: 10px;
}
.ratio {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fde044b2;
  cursor: pointer;
}
.ratio1 {
  width: 15px;
  height: 15px;
}
</style>
