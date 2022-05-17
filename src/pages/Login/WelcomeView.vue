<template>
  <section
    class="form-area animate__fadeInLeft animate__fast animate__animated"
  >
    <div class="form-container">
      <div class="welcome">
        <h1>Welcome to Synque</h1>
        <div class="para">
          <p>
            Here you can create your personalized mini website <br />
            for lorem ipseum dolor ite
          </p>

          <p class="signIn">
            Already have an account?
            <router-link to="/" class="short-link">Sign In</router-link>
          </p>
        </div>
      </div>

      <form class="form">
        <div class="form-control">
          <label for="username">Username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div class="form-control">
          <label for="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <router-link to="/profile">
          <button type="submit" class="btn">Create a new account</button>
        </router-link>

        <span>or sign up with</span>
        <div class="signUpImg">
          <a href="#">
            <img src="@/assets/icons/google-icon.png" />
          </a>
          <a href="#">
            <img src="@/assets/icons/facebook-logo-2019.png" class="facebook" />
          </a>
        </div>
      </form>
    </div>
  </section>
  <welcome-image />
</template>

<script>
import WelcomeImage from "@/components/WelcomeImage.vue";
export default {
  name: "WelcomeView",
  components: {
    WelcomeImage,
  },
};
</script>

<style scoped>
.form {
  gap: 32px;
}
.para {
  font-size: 2rem;
  line-height: 3rem;
  margin: 23px 0px 36px;
}
.signIn {
  padding-top: 1rem;
}

.signUpImg {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
}

.signUpImg a:hover {
  background-color: #ececec;
}

.signUpImg img {
  border: 1px solid var(--purple);
  padding: 8px 10px;
  border-radius: 5px;
}
</style>