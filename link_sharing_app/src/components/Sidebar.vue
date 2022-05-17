<template>
  <aside>
    <div class="logo">
      <img src="@/assets/synque.svg" alt="Company Logo" />
      <img src="@/assets/icons/play.svg" alt="Go Back" />
    </div>
    <div class="flex-btw">
      <ul>
        <li >
          <router-link to="/" class="nav-link w-60" :class="{ active: isActive }">
            <svg
              class="icon"
              width="18"
              height="21"
              viewBox="0 0 18 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0305 1.12925C9.752 0.865948 9.38327 0.719238 9 0.719238C8.61673 0.719238 8.248 0.865948 7.9695 1.12925L0.703501 7.99625C0.481023 8.20678 0.303873 8.46052 0.182905 8.74192C0.0619366 9.02332 -0.000302358 9.32645 1.10438e-06 9.63275V17.9878C0.000398756 18.5842 0.237627 19.1561 0.659541 19.5778C1.08145 19.9994 1.65352 20.2363 2.25 20.2363H4.5C5.09674 20.2363 5.66903 19.9992 6.09099 19.5772C6.51295 19.1553 6.75 18.583 6.75 17.9863V14.2363C6.75 14.0373 6.82902 13.8466 6.96967 13.7059C7.11032 13.5653 7.30109 13.4863 7.5 13.4863H10.5C10.6989 13.4863 10.8897 13.5653 11.0303 13.7059C11.171 13.8466 11.25 14.0373 11.25 14.2363V17.9863C11.25 18.583 11.4871 19.1553 11.909 19.5772C12.331 19.9992 12.9033 20.2363 13.5 20.2363H15.75C16.3467 20.2363 16.919 19.9992 17.341 19.5772C17.7629 19.1553 18 18.583 18 17.9863V9.63125C17.9999 9.3251 17.9373 9.02218 17.8161 8.74105C17.6949 8.45991 17.5176 8.20648 17.295 7.99625L10.0305 1.12625V1.12925Z"
                fill="white"
              />
            </svg>
            <span>Home</span>
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard" class="nav-link w-85">
            <img src="@/assets/icons/dashboard.svg" alt="dashboard" />
            <span>Dashboard</span>
          </router-link>
        </li>
        <li>
          <a href="/" class="nav-link w-85">
            <img src="@/assets/icons/settings.svg" alt="settings" />
            <span>Settings</span>
          </a>
        </li>
        <li>
          <a href="/" class="nav-link w-80">
            <img src="@/assets/icons/account.svg" alt="account" />
            <span>My Account</span>
          </a>
        </li>
        <li>
          <a href="/" class="nav-link">
            <img src="@/assets/icons/commerce.svg" alt="commerce" />
            <span>Commerce</span>
          </a>
        </li>

        <li @click="dropdown()" class="active-tab">
          <div class="active nav-link w-90">
            <img src="@/assets/icons/feedback.svg" alt="feedback" />
            <span>Feedback</span>
            <img
              class="hidden"
              src="@/assets/icons/arrow-down.svg"
              alt="dropdown"
            />
          </div>
          <div >
            <div :class="isDropedDown ? 'drop-down' : 'hide'">
              <a href="/">Contact Us</a>
              <a href="/">Report a bug</a>
              <a href="/">Suggest a feature</a>
              <router-link to="/faq" class="active-dropdown">FAQs</router-link>
            </div>
            
          </div>
        </li>
      </ul>
      <a href="/" class="log-out">
        <img src="@/assets/icons/logout.svg" alt="logout" />
        <span>Logout</span>
      </a>
    </div>
  </aside>

</template>

<script>
export default {
  name: "MainSidebar",
  data() {
    return {
      isActive: false,
      isDropedDown: false
    };
  },
  methods: {
    dropdown() {
      this.isDropedDown = !this.isDropedDown;
      console.log(this.isActive, this.isDropedDown)
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.w-30{
    width: 30%;
}
.w-50{
    width: 50%;
}
.w-60{
    width: 60%;
}
.w-70{
    width: 70%;
}
.w-80{
    width: 80%;
}
.w-85{
    width: 85%;
}
.w-90{
    width: 90%;
}
.w-95{
    width: 95%;
}
.w-100{
    width: 100%;
}
.flex-btw{
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 1px solid #fff; */
}

aside {
  background-color: var(--purple);
  color: var(--white);
  font-size: 2.4rem;
  padding-inline: 2.8rem;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100vh;
  overflow: auto;
}
.log-out{
  margin-left: 4rem;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.5rem;
}

aside ul {
  margin-top: 4.5rem;
}

aside ul li {
  margin-bottom: 1.2rem;
  margin-left: 4rem;
}
aside ul li a{
  padding: .4rem 0;
}
aside .nav-link {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  cursor: pointer;
}



.nav-link span {
  font-size: 1.6rem;
  line-height: 3.2rem;
  text-align: center;
}


.active .icon path {
  fill: white;
  transition: 0.25s;
}

.log-out {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: 1.6rem;
  /* margin-left: 5rem; */
}
.hide{
  visibility: hidden;
}
.active-tab .drop-down {
  /* text-align: left; */
  padding-left: 1.6rem;
  margin: 1.6rem 0 0 2rem;
  border-left: 1px solid var(--white);
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}

.drop-down a {
  display: block;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.5rem;
  letter-spacing: 0.1px;
}

.drop-down a:hover,
.drop-down a:focus,
.drop-down .active-dropdown {
  color: var(--yellow);
  transition: color 0.25s;
}
aside .router-link-exact-active{
    background-color: var(--yellow);
    color: var(--black);
    border-radius: 10px;
    transition: background-color 0.05s ease;
    display: flex;
    justify-content: center;
}
</style>
