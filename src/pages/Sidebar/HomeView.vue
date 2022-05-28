<template>
  <sidebar />
  <main>
    <div class="eye-icon" @click="toggleModal()">
      <img
        v-show="showModal"
        src="@/assets/icons/eye-fill.svg"
        alt="showModal"
      />
      <img
        v-show="!showModal"
        src="@/assets/icons/eye-slash-fill.svg"
        alt="hideModal"
      />
    </div>
    <div class="home-content">
      <img src="@/assets/synque-home.svg" alt="Logo" />
      <h1>Welcome to Synq.ue</h1>
      <p>
        The One-stop mini website where all your media, social and web links
        call home
      </p>
      <button class="btn">
        <router-link :to="{ name: 'home' }"> Explore </router-link>
      </button>
    </div>
    <div class="overlay" v-show="showModal">
      <div class="carousel-container">
        <div
          class="main-carousel"
          data-flickity='{ "cellAlign": "left", "contain": true }'
        >
          <div class="carousel-cell card">
            <img
              src="@/assets/icons/cancel.png"
              alt="close modal"
              @click="toggleModal()"
            />
            <h1>Tips on Navigating synq.ue</h1>
            <span>A shareable profile link</span>
            <p>
              Did you know that you can actually share links to your profile
              with clients, prospective clients, friends and anyone at all you
              wish to?. Just click on the orange button at the top right corner
              of your screen.
            </p>
          </div>
          <div class="carousel-cell card">
            <img
              src="@/assets/icons/cancel.png"
              alt="close modal"
              @click="toggleModal()"
            />
            <h1>Tips on Navigating synq.ue</h1>
            <span>Help us fix errors on Synque </span>
            <p>
              Did you know that you can actually share links to your profile
              with clients, prospective clients, friends and anyone at all you
              wish to?. Just click on the orange button at the top right corner
              of your screen.
            </p>
          </div>
          <div class="carousel-cell card">
            <img
              src="@/assets/icons/cancel.png"
              alt="close modal"
              @click="toggleModal()"
            />
            <h1>Tips on Navigating synq.ue</h1>
            <span>A shareable profile link</span>
            <p>
              Did you know that you can actually share links to your profile
              with clients, prospective clients, friends and anyone at all you
              wish to?. Just click on the orange button at the top right corner
              of your screen.
            </p>
          </div>
          <div class="carousel-cell card">
            <img
              src="@/assets/icons/cancel.png"
              alt="close modal"
              @click="toggleModal()"
            />
            <h1>Tips on Navigating synq.ue</h1>
            <span>Self-evaluation Analytics.</span>
            <p>
              Did you know that you can actually share links to your profile
              with clients, prospective clients, friends and anyone at all you
              wish to?. Just click on the orange button at the top right corner
              of your screen.
            </p>
          </div>
        </div>

        <button class="btn">Next</button>
      </div>
    </div>
  </main>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
export default {
  components: { Sidebar },
  name: "HomeView",
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style scoped>
main {
  position: relative;
  background: url("@/assets/images/Ellipse 19.png") no-repeat -15% top,
    url("@/assets/images/Ellipse 17.png") no-repeat -15% bottom,
    url("@/assets/images/bottom-rectangle.png") no-repeat bottom right,
    url("@/assets/images/Ellipse 18.png") no-repeat top right,
    url("@/assets/images/top-rectangle.png") no-repeat top right;
}

.overlay {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(249, 238, 238, 0.5);
}

.carousel-container {
  width: 70%;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.15);
  background-color: white;
}

.carousel-container .btn {
  margin-bottom: 30px;
  width: 15%;
  border-radius: 5px;
  padding-block: 13px;
  font-size: 16px;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
}

.main-carousel,
.carousel-cell {
  border-radius: 10px;
}

.card {
  display: block;
  background-color: white;
  position: relative;
  padding-block: 40px 24px;
  text-align: center;
  border-radius: 10px;
}

.card h1 {
  font-size: 30px;
  margin-bottom: 10px;
}

.card img {
  position: absolute;
  right: 35px;
  top: 20px;
  cursor: pointer;
}

.card span {
  font-size: 20px;
  font-weight: 500;
}

.card p {
  font-size: 16px;
  font-weight: 500;
  max-width: 71%;
  margin-inline: auto;
  margin-block: 35px;
}

.home-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
}

.home-content h1 {
  font-size: 68px;
  margin-block: 60px;
}

.home-content p {
  font-size: 48px;
  max-width: 60%;
  margin-bottom: 60px;
}

.home-content .btn {
  width: 50%;
  border-radius: 5px;
  font-size: 20px;
}

.btn a {
  display: block;
  width: 100%;
  padding-block: 20px;
}

.eye-icon {
  position: absolute;
  top: 50px;
  right: 116px;
  background-color: var(--grey3);
  height: 50px;
  width: 50px;
  padding: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
}

.eye-icon img {
  height: 34px;
  width: 36px;
}
</style>