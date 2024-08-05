<template>
    <div class="contact-container">
        <h1 class="text-center text-warning">Contact Us</h1>
        <form @submit.prevent="submitForm" class="contact-form">
            <input v-model="name" placeholder="Name" required />
            <input v-model="email" type="email" placeholder="Email" required />
            <textarea
                v-model="message"
                placeholder="Message"
                required
            ></textarea>
            <button class="btn btn-outline-warning" type="submit">Send</button>
        </form>
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

.contact-form {
    width: 100%;
    max-width: 600px;
    box-shadow: 0 2px 10px #fff;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #fde044b2;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #fde044b2;
    border-radius: 4px;
    font-size: 16px;
    color: #fff;
    background-color: #333;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
    color: #aaa;
}
.contact-form textarea {
    resize: vertical;
    min-height: 150px;
}
.social {
    margin-top: 20px;
}
</style>
