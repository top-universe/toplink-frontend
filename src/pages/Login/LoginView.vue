<template>
  <section
    class="form-area animate__fadeInRight animate__fast animate__animated"
  >
    <div class="form-container">
      <h1>Login</h1>
      <form class="form">
        <div class="form-control">
          <label for="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div class="form-control">
          <input type="checkbox" name="remember" id="remember" />
          <label for="remember">Remember Password</label>
        </div>

        <router-link to="/home">
          <button class="btn">Login</button></router-link
        >
        <p class="no-account">
          Don’t have an account?
          <router-link to="/welcome" class="short-link"> Sign up </router-link>
        </p>

        <span>or</span>
        <router-link to="/home">
          <button class="btn-alt">
            <img src="@/assets/icons/google-icon.png" class="google-icon" />
            Authorize with Google
          </button></router-link
        >
      </form>
    </div>
  </section>
  <welcome-image />
</template>

<script>
import WelcomeImage from "@/components/WelcomeImage.vue";
export default {
  name: "LoginView",
  components: {
    WelcomeImage,
  },
};
</script>

<style scoped>
.form-area {
  place-content: center;
}
.form-area h1 {
  margin-bottom: 48px;
}
.btn-alt {
  gap: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--black);
  color: var(--black);
  background: var(--white);
}
</style>







