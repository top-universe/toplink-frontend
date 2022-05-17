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