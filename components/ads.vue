<template>
  <div class="container">
    <div class="ads container-fluid">
      <div class="line container-fluid d-lg-block">
        <h1 class="ads-title me-5 text-end">LUXURY JEWELRY COLLECTION</h1>
      </div>
      <div class="image-container d-none d-lg-block"><img
  src="@/assets/Images/portrait-young-woman-with-earrings-with-gems-isolated.jpg"
  alt="Jewelry Collection"
/>

       
      </div>
      <div class="text-container">
        <div>
          <div class="ads-description">
            <p class="text-light">
              ut labore et dolore magna aliqua.” The purpose of lorem ipsum is
              to create a natural looking ut labore et dolore magna aliqua.” The
              purpose of lorem ipsum is to create a natural looking
            </p>
            <button class="see-more">See More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdsSection",
};
</script>

<style scoped>
.image-container {
  width: 450px;
  height: 550px;
}
.image-container img {
  width: 100%;
  z-index: 100;
  position: relative;
  margin-top: 20px;
}
.ads {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
.text-container {
  padding: 20px;
}
.ads-description {
  display: flex;
  flex-direction: column;
}
.see-more {
  width: 50%;
  background-color: transparent;
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  border: 1px solid #fde044b2;
  cursor: pointer;
  text-transform: uppercase;
}

.see-more:hover {
  background-color: #fde044b2;
}
.line {
  position: absolute;
  right: 0;
  top: 180px;
  width: 100vw;
  height: 70px;
  background-color: rgba(240, 207, 22, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
}
.line h1 {
  position: absolute;
  top: 5px;
  right: 50px;
}
.ads-title {
  color: #fff;
  z-index: 1;
  isolation: isolate;
  margin-bottom: 100px;
}
</style>
