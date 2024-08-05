<template>
  <div class="container">
    <div class="hr-gold"></div>
    <div class="row footer">
      <div class="col-4 justify-content-start logo-social d-none d-lg-block">
        <img class="logo" src="@/assets/Images/logo.png" alt="logo" />
        <div class="social w-100 ms-auto">
          <a href="https://www.youtube.com" target="_blank">
            <img class="social-icons" src="@/assets/Icons/Youtube - White .png" alt="Youtube" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img src="@/assets/Icons/instagram_White.png" alt="instagram" class="social-icons" />
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <img src="@/assets/Icons/Twitter - White .png" alt="Twitter" class="social-icons" />
          </a>
          <a href="https://www.facebook.com" target="_blank">
            <img src="@/assets/Icons/facebook_White.png" alt="facebook" class="social-icons" />
          </a>
        </div>
      </div>
      <div class="col-4 list d-lg-flex">
        <ul>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/About_Us">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/ContactUs">Contact Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/category/electronics">Electronics</a>
          </li>
        </ul>
        <ul>
          <li class="nav-item">
            <a class="nav-link" href="/category/jewelery">Jewelry</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/category/men's%20clothing">Men's Clothing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/category/women's%20clothing">Women's Clothing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Media_Center">Media Center</a>
          </li>
        </ul>
      </div>
      <div class="col-4 contact">
        <ul>
          <li><h3 class="active">Contact Us</h3></li>
          <li class="text-warning">+971 56 715 5150</li>
          <li class="text-warning">+971 56 715 5150</li>
          <li><a href="mailto:info@almotthedon.com" class="text-warning">info@almotthedon.com</a></li>
        </ul>
      </div>
    </div>
    <div class="hr my-2"></div>
    <div class="coby-right">
      <h5 class="text-center text-light">
        &copy; Almotthedon 2024. All Rights Reserved
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.logo-social {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.logo {
  width: 100%;
}
.social {
  display: flex;
  align-items: center;
  justify-content: center;
}
.social-icons {
  width: 40px;
  margin: 10px;
  transition: transform 0.3s;
}
.social-icons:hover {
  transform: scale(1.2);
}
.contact {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
ul {
  list-style: none;
  padding: 0;
}
a {
  text-decoration: none;
  color: #fde044b2;
  font-size: 20px;
  cursor: pointer;
}
.nav-item:hover {
  color: #fff;
}
.active {
  color: #fff;
}
li {
  padding: 10px 0;
}
.hr {
  width: 100%;
  height: 3px;
  background-color: #fff;
}
.hr-gold {
  width: 100%;
  height: 3px;
  background-color: #fde044b2;
  margin-top: 10px;
}
.footer {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.coby-right {
  margin-top: 20px;
}
</style>
