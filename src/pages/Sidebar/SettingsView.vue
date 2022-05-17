<template>
  <main>
    <div class="navbar">
      <a href="#notification">Notifications</a>
      <a href="#newfeatures">New Features</a>
      <a href="#help">Help</a>
      <a href="#search">Search</a>
      <a href="#faq">FAQs</a>
    </div>
    <div class="settings">
      <div class="head flex-space-btw w-95">
        <h1>Settings</h1>
        <h3>Hello Morenike,</h3>
        <p>
          Synq.ue is the idael platform for content creators and entrepreneurs
          to display their amazing contents and products
        </p>
        <div class="toggle-wrap">
          <p>Would you like to switch on my Synq.ue page?</p>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
      <div>
        <h3>Profile Settings</h3>
        <form class="form-section">
          <div class="avatar">
            <img src="@/assets/images/profile-img.png" alt="Avatar" />
          </div>

          <div class="columns">
            <div class="column">
              <div class="item">
                <label for="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Morenike Adimmah"
                />
              </div>
              <div class="item">
                <label for="username">Username</label>
                <input
                  id="username"
                  type="text"
                  name="username"
                  placeholder="@Morenike"
                />
              </div>
            </div>
            <div class="column">
              <div class="item">
                <label for="email-address">Email Address</label>
                <input
                  id="email-address"
                  type="text"
                  name="email-address"
                  placeholder="Morenike@gmail.com"
                />
              </div>
              <div class="item">
                <label for="specification">Specifications</label>
                <input
                  id="specification"
                  type="text"
                  name="specification"
                  placeholder="Select Applicable Area (3 Max)"
                />
              </div>
              <div class="profile-btn-align">
                <button class="profile-btn">
                  Tech<img src="@/assets/icons/Cancel-icon.png" />
                </button>
                <button class="profile-btn">
                  Entrepreneur
                  <img src="@/assets/icons/Cancel-icon.png" />
                </button>
              </div>
            </div>
          </div>
        </form>

        <button class="save-d-btn">Save Details</button>
      </div>
      <div class="box">
        <h4>Change Password</h4>
        <div class="align-btn">
          <p>Change your current password to a new one</p>
          <button class="click-btn">Change Password</button>
        </div>
      </div>
      <div class="box">
        <h4>Manage Account</h4>
        <div class="align-btn">
          <p>
            You can add switch to another account you registered on Synq.ue and
            manage them
          </p>
          <button class="click-btn">Manage Account</button>
        </div>
      </div>
      <div class="box">
        <h4>Notifications</h4>
        <div class="align-btn">
          <p>Receive notifications from us via your emails</p>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
      </div>

      <h3>Delete Account</h3>
      <div class="box">
        <div class="align-btn">
          <p>
            Your account will no longer be available, and your data will
            permanently be deleted
          </p>
          <button class="del-btn">Delete Account</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "SettingsView",
};
</script>

<style scoped>
/* Maincontent starts here */

.navbar {
  padding: 56px 0 56px 16px;
  background: #f5f5f5;
  position: sticky;
  top: 0;
  z-index: 2;
  width: 100%;
  display: flex;
  gap: 127px;
  box-shadow: 0px 7px 8px rgba(218, 218, 218, 0.67);
}

.navbar a {
  color: var(--purple);
  font-size: 20px;
}

.settings {
  margin-top: 12px;
  padding: 0rem 5rem 0;
}

.settings h1 {
  margin-bottom: 3.1rem;
  font-size: 30px;
  font-weight: 700;
}
.settings h3 {
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 1.6rem;
}
.toggle-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block: 0.6rem 5rem;
}

.settings p {
  font-size: 16px;
  line-height: 3rem;
}

.switch {
  margin-left: px;
  position: relative;
  display: inline-block;
  width: 77px;
  height: 38px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #d0b5e0;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 30px;
  width: 30px;
  left: 4px;
  bottom: 4px;
  background: #543864;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background: #d0b5e0;
}

input:focus + .slider {
  box-shadow: 0 0 1px #543864;
}

input:checked + .slider:before {
  -webkit-transform: translateX(40px);
  -ms-transform: translateX(40px);
  transform: translateX(40px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.form-section {
  padding: 2.6rem 3.5rem 3.5rem 2.8rem;
  background: #ffffff;
  margin-bottom: 30px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}

.avatar {
  margin-bottom: 36px;
}

.columns {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 16px;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
}

input {
  width: 100%;
  padding: 18px;
  background: #eeeeee;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 400;
}

input::placeholder {
  color: var(--black);
}

.item {
  width: 100%;
}

.item label {
  display: block;
  font-size: 16px;
  margin-bottom: 8px;
}

button {
  border: none;
  cursor: pointer;
  color: #ffffff;
}

.profile-btn-align {
  display: flex;
  gap: 19px;
}

.profile-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffbd69;
  gap: 12px;
  border-radius: 10px;
  cursor: pointer;
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 500;
}

.save-d-btn {
  font-size: 16px;
  padding: 12px 24px;
  background-color: var(--purple);
  margin-bottom: 60px;
  border-radius: 5px;
}
.box {
  background: #ffffff;
  margin-bottom: 30px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  padding-block: 18px;
  padding-inline: 28px 66px;
}

.box h4 {
  font-size: 20px;
  font-weight: 500;
}

.box .align-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 10px;
}

.box button {
  font-size: 16px;
  min-width: 163px;
  padding: 12px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.click-btn {
  border: 1px solid #543864;
  color: var(--purple);
  background: #ffffff;
}

.del-btn {
  background: #f22929;
  color: #ffffff;
}
</style>