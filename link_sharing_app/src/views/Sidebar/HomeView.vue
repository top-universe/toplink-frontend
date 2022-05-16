<template>
  <main>
    <div class="content">
      <img src="@/assets/synque.svg" class="logo" />
      <div class="synq-tips-container">
        <img src="@/assets/icons/cancel.png" class="cancel-btn" />
        <p class="synq-tips">Tips on Navigating synq.ue</p>
        <p class="share-text">A shareable profile link</p>
        <p class="content-text">
          Did you know that you can actually share links to your profile with<br />
          clients, prospective clients, friends and anyone at all you wish to?.
          Just<br />
          click on the orange button at the top right corner of your screen.
        </p>
        <button class="next-btn">Next</button>
      </div>
      <button class="explore-btn">Explore</button>
    </div>
  </main>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.content {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.logo {
  font-family: Metropolis;
  font-size: 48px;
  font-weight: 700;
  padding-top: 165px;
  margin-bottom: 32px;
}
.synq-tips-container {
  width: 650px;
  height: 300px;
  background: #ffffff;
  margin-bottom: 30px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}
.cancel-btn {
  float: right;
  padding: 16px;
  margin-right: 16px;
}
.synq-tips {
  font-family: Metropolis;
  font-size: 28px;
  font-weight: 700;
  padding-top: 40px;
  margin-bottom: 8px;
}
.share-text {
  font-family: Metropolis;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
}

.content-text {
  font-family: Metropolis;
  font-size: 16px;
  font-weight: 500;
  word-spacing: 2px;
  line-height: 1.8;
  margin-bottom: 40px;
}

.next-btn {
  width: 150px;
  font-size: 16px;
  padding: 12px 10px;
  background-color: #543864;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.explore-btn {
  width: 400px;
  font-size: 16px;
  padding: 12px 10px;
  background-color: #543864;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>