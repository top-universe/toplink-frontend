<template>
  <section
    class="form-area animate__fadeInRight animate__fast animate__animated"
  >
    <div class="form-container">
      <div class="category-container">
        <div class="text-content">
          <img src="@/assets/images/announcement.png" alt="" />
          <h1>Voila, You did it!</h1>
          <p>
            Congratulations on completing the process. Proceed to create your
            mini-website.
          </p>
        </div>
        <router-link to="/home"
          ><button class="btn" @click="showSidebar">
            Start creating
          </button></router-link
        >
      </div>
    </div>
  </section>
  <welcome-image />
</template>

<script>
import WelcomeImage from "@/components/WelcomeImage.vue";
export default {
  components: { WelcomeImage },
  name: "CongratView",
  methods: {
    showSidebar() {
      this.$emit("showSidebar");
    },
  },
};
</script>

<style scoped>
.form-area {
  background: url("@/assets/images/confetti.svg") no-repeat top left;
}

.category-container {
  height: calc(100% - 200px);
}

.text-content {
  text-align: center;
  margin-top: 40px;
}

.text-content h1 {
  margin-top: 40px;
}

.text-content p {
  font-size: 20px;
  max-width: fit-content;
  color: var(--black);
  margin-top: 16px;
}

.btn {
  height: 7.2rem;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  width: 100%;
}
</style>