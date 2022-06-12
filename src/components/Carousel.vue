<template>
  <div class="carousel-container">
    <div class="carousel-cell">
      <img
        src="@/assets/icons/cancel.png"
        alt="close modal"
        @click="closeModal"
      />
      <h1>{{ current_carousel.title }}</h1>
      <span>{{ current_carousel.description }}</span>
      <p>{{ current_carousel.sub }}</p>
    </div>
    <!-- courosel indicators -->
    <div class="carousel__indicator_wrapper">
      <div
        v-for="(i, index) in items.length"
        class="carousel__indicators"
        :key="index"
        :class="{ active: index == carousel_item }"
        @click="carousel_next(index)"
      ></div>
    </div>
    <div class="control-buttons">
      <button @click="back()" class="btn" v-show="carousel_item > 0">
        Back
      </button>
      <button @click="next()" class="btn">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    items: Array,
  },
  data() {
    return {
      carousel_length: this.items.length,
      carousel_item: 0,
    };
  },
  methods: {
    next() {
      let item_length = parseInt(this.items.length);
      if (this.carousel_item < item_length) {
        this.carousel_item = parseInt(this.carousel_item) + 1;
        if (this.carousel_item === item_length) {
          this.carousel_item = 0;
        }
      }
    },
    back() {
      this.carousel_item = parseInt(this.carousel_item) - 1;
      if (this.carousel_item < 0) {
        this.carousel_item = 3;
      }
    },
    carousel_next(index) {
      this.carousel_item = index;
    },
    closeModal() {
      this.$emit("close-modal");
    },
  },
  computed: {
    current_carousel() {
      return this.items[this.carousel_item];
    },
  },
};
</script>

<style scoped>
.carousel-container {
  width: 70%;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.15);
  background-color: white;
}

.carousel-container .btn {
  margin-bottom: 30px;
  min-width: 150px;
  font-weight: 400;
  border-radius: 5px;
  padding-block: 15px;
  font-size: 16px;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
}

.carousel-container .btn:hover {
  opacity: 0.8;
}

.carousel-cell {
  border-radius: 10px;
  display: block;
  background-color: white;
  position: relative;
  padding-block: 60px 24px;
  text-align: center;
  border-radius: 10px;
}

.carousel-cell h1 {
  font-size: 30px;
  margin-bottom: 20px;
}

.carousel-cell img {
  position: absolute;
  right: 35px;
  top: 35px;
  cursor: pointer;
}

.carousel-cell span {
  font-size: 20px;
  font-weight: 500;
}

.carousel-cell p {
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  max-width: 550px;
  margin-inline: auto;
  margin-block: 35px 20px;
}
.carousel__indicator_wrapper {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  justify-content: center;
}

.carousel__indicators {
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background: rgb(205, 205, 205);
  cursor: pointer;
}

.active {
  background-color: var(--purple);
}

.control-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
}
</style>