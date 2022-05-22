<template>
  <section class="Fourth-Container">
      <h2>
        Frequently asked <br />
        questions
      </h2>
      <div class="fourP">
        <p>If you have any further questions, please feel free to contact us</p>
      </div>
      <div class="grid">
        <div class="gridBox grid1">
          <p>What is Synque?</p>
          <img
            src="@/assets/images/Frame1.png"
            alt="add logo"
            height="60px"
            width="60px"
          />
        </div>
        <div class="gridBox grid2">
          <p>
            When I deactivate my account, do I lose <br />
            all my information?
          </p>
          <img
            src="@/assets/images/Frame1.png"
            alt="add logo"
            height="60px"
            width="60px"
          />
        </div>
        <div class="gridBox grid3">
          <p>How do I launch or get my page published or seen by others?</p>
          <!-- <img
            src="@/assets/images/Frame1.png"
            alt="add logo"
            height="60px"
            width="60px"
          /> -->
        </div>
        <div class="gridBox grid4">
          <p>
            How do I get the link to my page in order <br />
            to share it?
          </p>
          <img
            src="@/assets/images/Frame1.png"
            alt="add logo"
            height="60px"
            width="60px"
          />
        </div>
      </div>
      <img class="elipse4" src="@/assets/images/Ellipse4.png" alt="elipse" />
    </section>
</template>

<script>
export default {

}
</script>

<style>
    .Fourth-Container{
    text-align: center;
    position: relative;
    margin-bottom: 200px;

}
.grid{
    display: grid;
    grid-template-columns: 400px 60%;
    justify-content: center;
    gap: 20px;
}
.gridBox{
    border: #543864 solid 2px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
}
.gridBox p{
    text-align: start;
    padding-left: 10px;
}
.grid3{
    height: 250px;
    display: inline;
}
.fourP{
    margin-bottom: 40px;
}
.grid4{
    width: 100%;
    height: 95px;
}
.elipse4{
    position: absolute;
    height: 200px;
    width: 200px;
    bottom: -300px;
    left: 136px;
}
</style>