<template>
  <div class="social">
    <a href="https://www.youtube.com">
      <img
        class="social-icons me-2"
        src="@/assets/Icons/Youtube - Gold.png"
        alt="Youtube"
      />
    </a>
    <a href="https://www.instagram.com">
      <img
        src="@/assets/Icons/instagram_Gold.png"
        alt="instagram"
        class="social-icons me-2"
      />
    </a>
    <a href="https://www.twitter.com">
      <img
        src="@/assets/Icons/Twitter - Gold.png"
        alt="Twitter"
        class="social-icons me-2"
      />
    </a>
    <a href="https://www.facebook.com">
      <img
        src="@/assets/Icons/facebook_Gold.png"
        alt="facebook"
        class="social-icons me-2"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: "social",
};
</script>

<style scoped>
.social {
  display: flex;
  align-items: center;
  justify-content: center;
}
.social-icons {
  width: 40px;
  margin-right: 10px;
}
</style>
