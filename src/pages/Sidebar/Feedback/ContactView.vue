<template>
  <sidebar />
  <main>Contact Us</main>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
export default {
  name: "ContactView",
  components: { Sidebar },
  mounted() {
    this.isActive = true;
  },
};
</script>

<style>
</style>