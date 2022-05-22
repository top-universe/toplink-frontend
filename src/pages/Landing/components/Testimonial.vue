<template>
    <div class="Third-Container">
      <img class="elipse3" src="@/assets/images/Ellipse4.png" alt="elipse" />
      <h3>
        Here's what our users <br />
        are saying
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus <br />
        venenatis, lectus magna fringilla urna
      </p>
      <div class="pics-flex">
        <div class="pic1">
          <img
            class="pic"
            src="@/assets/images/Rectangle-9986.png"
            alt="Female Content creator"
          />
          <div class="container-quote">
            <div class="empty"></div>
            <img src="@/assets/images/Ellipse-13.png" alt="elipse" class="quote" />
            <img
              src="@/assets/images/quote-svgrepo-com-2.png"
              alt="quote"
              class="tation"
            />
          </div>
          <div class="Review">
            <p class="review">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel fringilla est ullamcorper eget
            </p>
            <div class="author">
              <p><strong>Michaella</strong> <br />Content creator</p>
            </div>
          </div>
        </div>
        <div class="pic2">
          <img class="pic" src="@/assets/images/Rectangle-9998.png" alt="Hairstylist" />
          <div class="container-quote2">
            <div class="empty"></div>
            <img src="@/assets/images/Ellipse-13.png" alt="" class="quote" />
            <img src="@/assets/images/quote-svgrepo-com-2.png" alt="" class="tation" />
          </div>
          <div class="Review">
            <p class="review">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel fringilla est ullamcorper eget
            </p>
            <div class="author">
              <p><strong>Tobiloba</strong> <br />Hairstylist, Tobi Trendyz</p>
            </div>
          </div>
        </div>
        <div class="pic3">
          <img
            class="pic"
            src="@/assets/images/Rectangle-10001.png"
            alt="Male Content creator"
          />
          <div class="container-quote2">
            <div class="empty"></div>
            <img src="@/assets/images/Ellipse-13.png" alt="" class="quote" />
            <img src="@/assets/images/quote-svgrepo-com-2.png" alt="" class="tation" />
          </div>
          <div class="Review">
            <p class="review">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel fringilla est ullamcorper eget
            </p>
            <div class="author">
              <p><strong>Kingsley Amadi</strong> <br />Content creator</p>
            </div>
          </div>
        </div>
        <div class="pic4">
          <img
            class="pic"
            src="@/assets/images/Rectangle-10004.png"
            alt="Content creator"
          />
          <div class="container-quote2">
            <div class="empty"></div>
            <img src="@/assets/images/Ellipse-13.png" alt="" class="quote" />
            <img src="@/assets/images/quote-svgrepo-com-2.png" alt="" class="tation" />
          </div>
          <div class="Review">
            <p class="review">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel fringilla est ullamcorper eget
            </p>
            <div class="author">
              <p><strong>Michaella</strong> <br />Content creator</p>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="3rd-button">
        <button></button>
        <button></button>
      </div> -->
    </div>
</template>

<script>
import TestimonialCard from './TestimonialCard'
export default {
    components: {
        TestimonialCard,
    }
}
</script>

<style>
    .Third-Container{
    background-color: #543864;
    position: relative;
    text-align: center;
    padding-bottom: 30px;
    margin-bottom: 60px;
    width: 100%;
    overflow: hidden;
}
.Third-Container .elipse3{
    position: absolute;
    top: -100px;
    left: 136px;
    height: 200px;
    width: 200px;
    z-index: 1000;
}
.Third-Container p{
    color: #EBEBEB;
    /* margin-bottom: 20px; */
}
.pics-flex{
    display: flex;
    /* align-items: center;
    justify-content: center; */
    margin-top: 10px;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    overflow-x: auto;
    gap: 20px;
    margin-left: 40px;
}
/* .Third-Container img{
    width: 50px;
    height: px; */

.pic{
    /* border-bottom:10px black; */
    /* border-radius: 8px; */
    width: 370px;
    height: 200px;
    display: block;
padding-left: 20px;
}
.Review p{
    color: #000;
    font-size: 14px;
    padding: 10px;
    text-align: start;

}
.Review{
    border-top:10px black;
    padding: 0px 10px 0px 10px;
    background-color: #EBEBEB;
    margin: 0px 20px; 
    width: 350px;
    height: auto;
    margin-bottom: 20px;   
}
.empty{
    height: 8px;
    width: 370px;
    background-color: #C5AED3;
    margin-left: 20px;
}
.author p{
    text-align: start;
    padding-left: 10px;
    font-size: 14px;
    /* margin-top: 0px; */
    line-height: 3px;
    padding-bottom: 20px;
}
</style>