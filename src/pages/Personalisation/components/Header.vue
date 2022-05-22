<template>
    <section class='personalize'>
        <div class="arrow-div">
            <img src="@/assets/images/Arrow-Right2.png" alt="arrow" class="arrow">
            <h1>Personalize</h1>
        </div>
        <button class="save">Save</button>
    </section>
    <div class = 'theme-color'>
            <h3 class = 'theme'>Theme Color</h3>
            <p>select your preferred theme color</p>
        </div>
</template>

<script>
export default {

}
</script>

<style>
.personalize{
    width: 92%;  
    height: 80px;
    border-radius: 0px;
    background: #FCFCFC;
    box-shadow: 4px 0px 50px rgba(0, 0, 0, 0.09);
    margin: 5rem auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 50px 90px;
}

.arrow-div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.arrow{
    margin-right: 20px;
    height: 100%;
    position: relative;
    top: 8px;
    margin-right: 50px;
}
.personalize h1{
font-size: 28px;
line-height: 27px;
color: #121212;
}

.save{
    background: #543864;
    box-shadow: 4px 0px 50px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    padding: 1rem 4rem;
    height: 31.28px;
    color: #FCFCFC;
    font-size: 14px;
    border: none;
}
  .theme-color{
    margin: 30px 50px;
    font-style: normal;
    line-height: 27px;
    padding: 30px;
}

.theme{
    font-family: 'Actor', sans-serif;
    font-weight: bold;
    font-style: normal;
    color: #000000;
    font-size: 26px;  
}

.theme-color p{
font-weight: 400;
font-size: 20px;
}

</style>