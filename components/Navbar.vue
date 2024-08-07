<template>
  <div>
    <div class="container-fluid bg-black row nav-app">
      <div class="d-none bg-black d-lg-block col-lg-2">
        <NuxtLink to="/">
          <img class="logo" src="@/assets/Images/logo.png" alt="logo" />
        </NuxtLink>
      </div>
      <div class="col-xl-10 col-lg-10">
        <div class="social d-none d-lg-flex justify-content-end">
          <img
            data-bs-toggle="modal"
            data-bs-target="#searchModal"
            src="@/assets/Icons/search.png"
            alt="search"
            class="search"
          />
          <!-- Modal -->
          <div
            class="modal fade"
            id="searchModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">
                  <form class="d-flex">
                    <input
                      type="text"
                      class="form-control me-2"
                      placeholder="search"
                    />
                    <button class="btn btn-outline-warning">search</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
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
        <nav class="navbar navbar-dark navbar-expand-lg bg-black">
          <div class="container-fluid">
            <NuxtLink class="navbar-brand" to="/">
              <img
                class="logo-nav d-xl-none d-xxl-none d-lg-none d-md-block d-sm-block"
                src="@/assets/Images/logo.png"
                alt="logo"
              />
            </NuxtLink>
            <button
              class="navbar-toggler custom-toggler btn-outline-warning ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon ms-auto"></span>
            </button>
            <div class="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto text-end">
                <li class="nav-item">
                  <NuxtLink
                    class="nav-list"
                    :class="{ active: isActive('/') }"
                    to="/"
                  >
                    Home
                  </NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink
                    class="nav-list"
                    :class="{ active: isActive('/category/electronics') }"
                    to="/category/electronics"
                  >
                    Electronics
                  </NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink
                    class="nav-list"
                    :class="{ active: isActive('/category/jewelery') }"
                    to="/category/jewelery"
                  >
                    Jewelry
                  </NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink
                    class="nav-list"
                    :class="{ active: isActive(`/category/men's%20clothing`) }"
                    to="/category/men's%20clothing"
                  >
                    Men Clothing
                  </NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink
                    class="nav-list"
                    :class="{ active: isActive(`/category/women's%20clothing`) }"
                    to="/category/women's%20clothing"
                  >
                    Women Clothing
                  </NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink
                    class="nav-list"
                    :class="{ active: isActive('/Media_Center') }"
                    to="/Media_Center"
                  >
                    Media Center
                  </NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink
                    class="nav-list"
                    :class="{ active: isActive('/ContactUs') }"
                    to="/ContactUs"
                  >
                    Contact Us
                  </NuxtLink>
                </li>
                <li class="nav-item">
                  <form class="d-flex d-lg-none d-xl-none dxxl-none">
                    <input
                      type="text"
                      class="form-control me-2"
                      placeholder="search"
                    />
                    <button class="btn btn-warning">search</button>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "#app";

const route = useRoute();

const isActive = (path) => {
  return route.path === path;
};
</script>

<style scoped>
.nav-app {
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  width: 100%;
}
.logo {
  width: 150px;
  cursor: pointer;
}
.logo-nav {
  width: 100px;
}
.social {
  margin-left: 700px;
}
.social-icons {
  width: 40px;
  margin-right: 10px;
}
.search {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  cursor: pointer;
}
.nav-list {
  color: #fff;
  text-decoration: none;
  padding: 0 5px;
  margin: 0 5px 10px 0;
  cursor: pointer;
}
.nav-list:hover {
  color: #fde044b2;
}
.active {
  color: #fde044b2;
}
.modal-dialog {
  background-color: #000;
  border: 1px solid #fde044b2;
  border-radius: 5px;
}
.modal-content {
  background-color: #000;
}
.form-control {
  background-color: rgb(88, 82, 82);
  color: #fff;
}
</style>
