<template>
    <div>
        <hero />
        <LatestSection />
        <ads />
        <categories />
    </div>
</template>

<script>
import hero from "@/components/hero.vue";
import LatestSection from "@/components/latestproduct.vue";
import ads from "@/components/ads.vue";
import categories from "@/components/categories.vue";

export default {
    components: { hero, ads, categories, LatestSection }
};
</script>

<style>
@font-face {
    font-family: "Marcellus";
    src: url("@/assets/Fonts/Marcellus-Regular.ttf") format("truetype");
}

body,
a,
button {
    font-family: "Marcellus", sans-serif;
    background-color: #000;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#app {
    font-family: "Marcellus", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #000;
    min-height: 100vh;
}
</style>
