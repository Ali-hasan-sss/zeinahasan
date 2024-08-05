<template>
    <div class="contact-container">
        <h1 class="text-center text-warning">Media Center</h1>

        <social class="social" />
    </div>
</template>

<script setup>
import { ref } from "vue";
import social from "@/components/social.vue";

const name = ref("");
const email = ref("");
const message = ref("");

const submitForm = () => {
    console.log("Form submitted:", {
        name: name.value,
        email: email.value,
        message: message.value
    });
};
</script>

<style scoped>
.contact-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    min-height: 80vh;
}

h1 {
    margin-bottom: 20px;
    color: #333;
}
.social {
    margin-top: 20px;
}
</style>
