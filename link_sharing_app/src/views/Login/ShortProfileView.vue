<template>
  <section
    class="form-area animate__fadeInRight animate__fast animate__animated"
  >
    <div class="form-container">
      <router-link to="/welcome">
        <img src="@/assets/icons/arrow.png" />
      </router-link>

      <div class="header">
        <h1>Welcome</h1>
        <p>Let's get to know a bit about you!</p>
      </div>
      <form class="form">
        <div class="name-details">
          <div class="form-control">
            <label for="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" />
          </div>
          <div class="form-control">
            <label for="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" />
          </div>
        </div>

        <div class="form-control">
          <label for="phoneNumber">Phone Number</label>
          <div class="number-details">
            <select name="phoneNumber" id="phoneNumber">
              <option value="NGN">
                <img src="@/assets/icons/ngn-flag.svg" /> +234
              </option>
            </select>

            <input
              type="tel"
              placeholder="0000 0000 0000"
              name="phoneNumber"
              id="phoneNumber"
            />
          </div>
        </div>
        <div class="form-control">
          <label for="countries">Country</label>
          <div class="countries">
            <select name="countries" id="countries"></select>
          </div>
        </div>
        <router-link to="/categories"
          ><button class="btn">Continue</button></router-link
        >
      </form>
    </div>
  </section>
  <welcome-image />
</template>

<script>
import WelcomeImage from "@/components/WelcomeImage.vue";
export default {
  components: { WelcomeImage },
  name: "ShortProfileView",
};
</script>

<style>
.header {
  margin-top: 75px;
  margin-bottom: 48px;
}
.header p {
  margin-top: 16px;
  font-size: 20px;
}

.name-details,
.number-details {
  display: flex;
  gap: 21px;
}

.countries select {
  width: 100%;
}
</style>