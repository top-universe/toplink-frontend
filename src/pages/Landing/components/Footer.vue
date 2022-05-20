<template>
    <section class="Footer-Container">
      <div class="social-media">
        <ul>
          <li>
            <img
              class="topschool-logo"
              src="@/assets/images/top-universe-logo1.png"
              alt="TopSkill Universe Logo"
            />
          </li>
          <li class="topschool-logo">
            <img src="@/assets/images/facebook-square.png" alt="Facebook" />
            <img src="@/assets/images/twitter-square.png" alt="Twitter" />
            <img src="@/assets/images/instagram.png" alt="Instagram" />
            <img src="@/assets/images/linkedin.png" alt="Linkedin" />
          </li>
          <li>www.topuniverse.org</li>
        </ul>
      </div>
      <div class="footerQuickLink">
        <h4>Quick Links</h4>
        <ul>
          <li>Features</li>
          <li>How it works</li>
          <li>Testimonies</li>
          <li>Frequently Asked Questions</li>
        </ul>
      </div>
      <div class="footerSub">
        <h4>Subscribe to get the latest updates</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur <br />
          adipiscing elit ut aliquam, purus sit amet luctus <br />
          venenatis.
        </p>
        <form action="process">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </form>
      </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.Footer-Container{
    background-color: #543864;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #EBEBEB;
    padding: 30px;
    align-items: flex-end;
}
.footerSub{
    background-color: #fff;
    color: #000;
    /* text-align: ; */
}
.footerSub h4{
text-align: center;
}
.footerSub p, h4{
    text-align: start;
    padding: 20px;
}
.footerSub form{
    display: flex;
    align-content: center;
    margin: 20px 80px 40px 80px;
}
input{
    background-color: #EEEEEE;
    color: #525252;
    border: solid #EEEEEE;
    border-radius: 8px;
    padding: 10px;
    height: 10px;
}
.footerSub button{
    background-color: #543864;
    color: #FFFFFF;
    border-radius: 8px;
    width: 100px;
    border: 0px;
}
.topschool-logo{
    margin-bottom: 2rem;
}

</style>