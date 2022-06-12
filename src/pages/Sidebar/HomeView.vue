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
      <carousel :items="items" @close-modal="toggleModal()" />
    </div>
  </main>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Carousel from "@/components/Carousel.vue";
const items = [
  {
    title: "Tips on Navigating synque",
    description: "A shareable profile link",
    sub: `Did you know that you can actually share links to your profile
          with clients, prospective clients, friends and anyone at all you
          wish to? Just click on the orange button at the top right corner
          of your screen.`,
  },
  {
    title: "Tips on Navigating synque",
    description: "Help us fix errors on Synque",
    sub: `Did you know that you can actually share links to your profile
          with clients, prospective clients, friends and anyone at all you
          wish to? Just click on the orange button at the top right corner
          of your screen.`,
  },
  {
    title: "Tips on Navigating synque",
    description: "A shareable profile link",
    sub: `Did you know that you can actually share links to your profile
          with clients, prospective clients, friends and anyone at all you
          wish to? Just click on the orange button at the top right corner
          of your screen.`,
  },
  {
    title: "Tips on Navigating synque",
    description: "Self-evaluation Analytics.",
    sub: `Did you know that you can actually share links to your profile
          with clients, prospective clients, friends and anyone at all you
          wish to? Just click on the orange button at the top right corner
          of your screen.`,
  },
];
export default {
  components: { Sidebar, Carousel },
  name: "HomeView",
  data() {
    return {
      items,
      showModal: true,
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