<template>
    <div class="category">
        <h1 class="text-center text-warning">Categories</h1>

        <!-- Show spinner during load -->
        <div v-if="loading" class="spinner-overlay">
            <div class="spinner"></div>
        </div>

        <!-- Show data after loading -->
        <div v-else class="content mt-3">
            <div
                class="item d-flex justify-content-center"
                v-for="category in categories"
                :key="category"
            >
                <nuxt-link
                    :to="`/category/${category}`"
                    class="btn btn-outline-warning category-btn"
                >
                    {{ category }}
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useNuxtApp } from "#app";

const categories = ref([]);
const loading = ref(true);

const fetchCategories = async () => {
    try {
        const { $axios } = useNuxtApp();
        const { data } = await $axios.get("/products/categories");
        categories.value = data;
    } catch (error) {
        console.error("Error fetching categories:", error);
    } finally {
        loading.value = false;
    }
};

onMounted(() => {
    fetchCategories();
});
</script>

<style scoped>
.category {
    width: 100%;
    min-height: 70vh;
    background-color: #000;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    flex-wrap: wrap;
    gap: 20px;
    padding: 30px;
}

.category::before {
    content: "";
    position: absolute;
    background-image: url("@/assets/Images/Header 2.jpg");
    background-size: cover;
    background-position: center;
    inset: 0;
    opacity: 0.2;
}

.content {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
}

.item {
    perspective: 1000px;
    margin: 50px auto;
}

h1 {
    margin: 40px;
}

.category-btn {
    padding-top: 80px;
    width: 240px;
    height: 200px;
    background-color: #eedb71b2;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    transform: rotateX(20deg) rotateY(20deg);
    transition: transform 0.5s;
    color: #fff;
}

.category-btn:hover {
    transform: rotateX(0deg) rotateY(0deg);
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    background-color: #c7ac12b2;
}

/* Style for spinner */
.spinner-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
}

.spinner {
    border: 16px solid #f3f3f3;
    border-top: 16px solid #e1d610e9;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
