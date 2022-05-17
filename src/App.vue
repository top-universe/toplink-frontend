<template>
  <main-sidebar v-show="isLoggedin"></main-sidebar>
  <router-view @show-sidebar="showMenu" />
</template>

<script>
import MainSidebar from "@/components/Sidebar.vue";
export default {
  name: "App",
  components: {
    "main-sidebar": MainSidebar,
  },
  data() {
    return {
      isLoggedin: false,
    };
  },
  methods: {
    showMenu() {
      this.isLoggedin = !this.isLoggedin;
    },
  },
};
</script>

<style>
@font-face {
  font-family: Metropolis;
  src: url(@/assets/fonts/Metropolis-Regular.otf);
  font-weight: 400;
}

@font-face {
  font-family: Metropolis;
  src: url(@/assets/fonts/Metropolis-SemiBold.otf);
  font-weight: 500;
}

@font-face {
  font-family: Metropolis;
  src: url(@/assets/fonts/Metropolis-Bold.otf);
  font-weight: 700;
}

:root {
  --purple: #391d49;
  --yellow: #ffbd69;
  --white: #fcfcfc;
  --black: #121212;
  --grey: #eeeeee;
}

/* CSS RESET */

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Metropolis, sans-serif;
}

html {
  font-size: 10px;
}

#app {
  height: 100vh;
  width: 100vw;
  display: flex;
}

a {
  text-decoration: none;
  color: inherit;
}

p {
  line-height: 2.4rem;
  letter-spacing: 0.5px;
}

li {
  list-style-type: none;
}

button {
  cursor: pointer;
}

main {
  flex: 1;
  height: 100%;
  background-color: #fcfcfc;
  overflow-x: hidden;
  margin-left: 331px;
}

.form-area {
  width: 50%;
  display: grid;
  place-items: start center;
  margin-top: 71px;
}
.form-container {
  min-width: 500px;
  height: 100%;
}

.form-container h1 {
  font-size: 48px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form label {
  color: #121212;
  display: block;
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 400;
}

label[for="remember"] {
  color: #121212;
  display: inline-block;
  margin-left: 16px;
}

.form-control input,
.form-control select {
  border: none;
  border-radius: 8px;
  font-size: 20px;
  padding: 26px 16px;
  background: var(--grey);
}

.form-control input {
  width: 100%;
}

input[type="checkbox"] {
  height: 14px;
  display: inline-block;
  background-color: var(--purple);
  width: 14px;
}

.form button {
  height: 7.2rem;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  width: 100%;
}

.btn {
  background: var(--purple);
  color: white;
}

.short-link {
  font-weight: bold;
  color: var(--purple);
}

.no-account {
  font-size: 20px;
}

.form span {
  text-align: center;
  font-size: 20px;
}
</style>
