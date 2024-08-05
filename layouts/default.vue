<template>
  <div>
    <header>
      <NavBar />
    </header>
    <main>
      <NuxtPage />
      <Catbtn />
    </main>
    <footer>
      <FooTer />
    </footer>
  </div>
</template>
<script>
import NavBar from "@/components/Navbar.vue";
import FooTer from "@/components/footer.vue";
import catbtn from "@/components/catbtn.vue";
export default {
  name: "HoMe",
  components: {
    NavBar,
    FooTer,
    catbtn,
  },
};
</script>
<style scoped>
header {
  border-bottom: 7px solid #fde044b2;
}
</style>
