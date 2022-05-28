<template>
  <aside>
    <img src="@/assets/images/flat-image.png" />
  </aside>
</template>

<script>
export default {
  name: "WelcomeImage",
};
</script>

<style scoped>
aside {
  position: fixed;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 50%;
  background-color: var(--purple);
  position: absolute;
  right: 0;
  overflow: hidden;
}
aside img {
  height: 100%;
  width: 100%;
}
</style>