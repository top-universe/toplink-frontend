<template>
  <section
    class="form-area animate__fadeInRight animate__fast animate__animated"
  >
    <div class="form-container">
      <router-link to="/welcome">
        <img src="@/assets/icons/arrow.png" />
      </router-link>

      <div class="category-container">
        <div class="header">
          <h1>Select Categories</h1>
          <p>
            Here, you get to select some of the best categories <br />
            that best represents what you do
            <span>(Select at least 3)</span>
          </p>
          <div class="selected-categories">
            <p>Entrepreneur</p>
            <p>Content creator</p>
          </div>
        </div>
        <form class="form">
          <div class="form-control">
            <label for="categories">
              Couldn’t find a category for yourself, type it in here
            </label>
            <input type="text" name="categories" id="categories" />
          </div>
          <router-link to="/congrats"
            ><button class="btn">Continue</button></router-link
          >
        </form>
      </div>
    </div>
  </section>
  <welcome-image />
</template>

<script>
import WelcomeImage from "@/components/WelcomeImage.vue";
export default {
  components: { WelcomeImage },
  name: "CategoriesView",
};
</script>

<style>
.header span {
  color: var(--purple);
  display: block;
  font-weight: bold;
}

.selected-categories {
  margin-top: 1rem;
  display: flex;
  gap: 12px;
}

.selected-categories p {
  width: fit-content;
  padding: 14px 8px;
  border-radius: 8px;
  color: #000;
  background-color: var(--grey);
}
.category-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 250px);
}
</style>