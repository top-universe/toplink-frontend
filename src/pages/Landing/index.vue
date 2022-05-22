<template>
  <div class="landing">
    <Navbar />
    <Hero />
    <About />
    <Testimonial />
    <Faq />
    <Footer />
  </div>
</template>

<script>
import Hero from "./components/hero";
import Navbar from "./components/Navbar"
import Testimonial from "./components/Testimonial"
import Footer from "./components/Footer"
import Faq from "./components/FAQ"
import About from "./components/About"
export default {
  components: {
    Hero,
    Navbar,
    Testimonial,
    Footer,
    Faq,
    About
  },
};
</script>
<style>

.landing p{
    /* text-align: center; */
    font-size: 20px;
}
.landing button{
    cursor: pointer;
}
.landing h3{
    font-weight: 600px bold;
    font-size: 30px;
    padding-top: 80px;
    margin: 20px;  
    color: #EBEBEB;
    font-weight: 700;
    font-size:50px;
    line-height: 50px;
}
.landing h2{
    font-weight: 400px bold;
    font-size: 40px;
    margin: 20px;
}
.landing li{
    list-style: none;
}
.landing .pics-flex::-webkit-scrollbar{
    width: 1rem;
    /* height: 1rem; */
}
.landing .pics-flex::-webkit-scrollbar-track{
    box-shadow: inset 0 0 6px #C5AED3;
    border-radius: 8px;
}
.landing .pics-flex::-webkit-scrollbar-thumb{
    background-color: #C5AED3;
    outline: 1px solid #C5AED3;
    border-radius: 8px;
}
.landing .Container{
  width: 60%;
  margin: auto;
}
</style>

