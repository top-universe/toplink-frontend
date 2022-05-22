<template>
    <div class="Second-Container">
      <h3>Here's what you can do with Synque</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, <br />
        lectus magna fringilla urna
      </p>
      <div class="rectangle-flex">
        <div class="first-set">
          <div class="box box1">
            <img src="@/assets/images/top-left.png" alt="arrow" />
            <h4>My Account</h4>
            <p>
              You are able to customize your account, change themes and modes,
              edit links and profile information. Also, add or remove elements
              to your taste.
            </p>
          </div>
          <div class="box box2">
            <img src="@/assets/images/bottom-left.png" alt="arrow" />
            <h4>Dashboard</h4>
            <p>
              Free access to check and read analytics such as number of clicks,
              CTR (Click Through Rate), total profile views and other
              activities.
            </p>
          </div>
        </div>
        <div class="Container-iphone">
          <img src="@/assets/images/iPhone-pionts.png" alt="dots" class="dot1" />
          <img src="@/assets/images/iPhone-pionts.png" alt="dots" class="dot2" />
          <img src="@/assets/images/iPhone-pionts.png" alt="dots" class="dot3" />
          <img src="@/assets/images/iPhone-pionts.png" alt="dots" class="dot4" />
          <img class="iPhone" src="@/assets/images/iPhone11Pro@2x.jpg" alt="iPhone" />
        </div>
        <div class="second-set">
          <div class="box box3">
            <img src="@/assets/images/top-right.png" alt="arrow" />
            <h4>Feedback</h4>
            <p>
              Report bugs to notify us of certain inadequacies experienced with
              the platform. You also get to suggest additional features you want
              to see on synque
            </p>
          </div>
          <div class="box box4">
            <img src="@/assets/images/bottom-right.png" alt="arrow" />
            <h4>Tips Card Available</h4>
            <p>
              Availability of Quick Tips Cards to providetips on how to navigate
              the platform easily in order to give you the best experience
            </p>
          </div>
        </div>
      </div>
      <img class="elipse3" src="@/assets/images/Ellipse4.png" alt="elipse" />
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .Second-Container{
    text-align: center;
    margin-top: 60px;
    margin-bottom: 80px;
    position: relative;
    z-index: -1;
}
.Second-Container .elipse3{
    width: 200px;
    position: absolute;
    bottom: -180px;
    left: 136px;
    z-index: 100;
}
.Second-Container h3{
    color: black;
}
.container-quote{
    position: relative;
}
.quote{
    position: absolute;
    top: -25px;
    left: 40px;
    width: 50px;
    height: auto;
}
.tation{
    position: absolute;
    top: -23px;
    left: 43px;
    width: 45px;
    height: auto;
}
.container-quote2{
    position: relative;
}
.quote{
    position: absolute;
    top: -25px;
    left: 40px;
    width: 50px;
    height: auto;
}
.tation{
    position: absolute;
    top: -23px;
    left: 43px;
    width: 45px;
    height: auto;
}
.container-quote3{
    position: relative;
}
.quote{
    position: absolute;
    top: -25px;
    left: 40px;
    width: 50px;
    height: auto;
}
.tation{
    position: absolute;
    top: -23px;
    left: 43px;
    width: 45px;
    height: auto;
}
.container-quote4{
    position: relative;
}
.quote{
    position: absolute;
    top: -25px;
    left: 40px;
    width: 50px;
    height: auto;
}
.tation{
    position: absolute;
    top: -23px;
    left: 43px;
    width: 45px;
    height: auto;
}
.iPhone{
    margin-top: 40px;
    width: 411px;
    height: 848px;
}
.box{
    height: 161px;
    width: 325px;
    border-radius: 8px;
    border: 1px solid #543864;
    margin: 60px 40px;
}
.box h4{
    padding: 15px 10px 5px 10px;
}
.box1{
    position: relative;
}
.box1 img{
    position: absolute;
    top: 10px;
    right: -178px;
}
.box2{
    position: relative;
}
.box2 img{
    position: absolute;
    top: -10px;
    right: -178px;
}
.box3{
    position: relative;
}
.box3 img{
    position: absolute;
    top: -55px;
    left: -176px;
}
.box4{
    position: relative;
}
.box4 img{
    position: absolute;
    top: 75px;
    left: -176px;
}
.box p{
    font-size: 15px;
    padding-left: 10px;
    text-align: start;
    line-height: 25px;
}
.box2{
    margin-top: 140px;
}
.box4{
    margin-top: 140px;
}
.dot1{
    position: absolute;
    left: 544px;
    top: 1433px;
}
.dot2{
    position: absolute;
    left: 544px;
    top: 1715px;
}
.dot3{
    position: absolute;
    right: 540px;
    top: 1468px;
}
.dot4{
    position: absolute;
    right: 540px;
    top: 1970px;
}
.first-set{
    margin-top: 120px;
}
.second-set{
    margin-top: 220px;
}
.rectangle-flex{
    display: flex;
    justify-content: space-between;
}

</style>