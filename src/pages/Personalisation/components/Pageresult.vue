<template>
    <div class="sample-page">
        <div class="main-background">
            <section class="about change-color">
                <div class="share-buttons">
                    <button class='round-button'></button>
                    <button class="share">share</button>
                </div>
                <section class='golden-color'>
                    <div class="golden-box"></div>
                    <div class="golden-circle"></div>
                </section>
                <button class = "edit-profile">Edit profile</button>
                <div class="writeup">
                    <h3>Jane Doe</h3>
                    <h4>@ Jdoe</h4>
                    <p>I am a UI/UX design specialist practicing for 7 years. You can connect with me on social media and check out my design portfolios and projects through my links. In my spare time, i enjoy reading and listening to music. You can also check out my playlist and bookshelf through my links.</p>
                </div>
            </section>
            <section class = "button-section change-color">
                <div class = "social-media">
                    <button> <img src = "@/assets/images/Facebook.png">Jane Doe</button>
                    <button> <img src = "@/assets/images/LinkedInCircled.png">Jane Doe</button>
                    <button> <img src="@/assets/images/TwitterCircled.png" > @janedoe21</button>
                    <button><img src="@/assets/images/YouTube.png" > Jane Doe</button>
                    <button> <img src="@/assets/images/instagram.png"> Jane_doe_21</button>
                </div>
            </section>
        </div>

    
        <div class = "my-links-sec" id = "change-text-color">
            <p class = "my-links" >My Links</p>
            <p class = "media ">Media</p>
        </div>

        <section class = 'topskill'>
            
            <div class = "topskill-div change-color">
                <img src="@/assets/images/Component138.png" alt="icon" class = "rectangles">    
                <h4>Topskill</h4>
                <p>Topskill.com/acc/234?89/jane?doe#2</p>
            </div>
            <img src="@/assets/images/Adekunle.png" alt="icon" class = "arrow-icon">

        </section>

    </div>
</template>

<script>
export default {

}
</script>

<style>
.sample-page{
    width: 50%;
    border-radius: 5px;
    margin-top: 55px;
    background: #FDFBFB;
}

.main-background{
    border-radius: 5px;
}

.about{
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    height: 395px;
    filter: drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.25));
}

.share-buttons{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px 25px 10px;
    border: none;


}
.round-button{
    width: 22.09px;
    height: 21px;
    background: #543864;
    border-radius: 50%;
    border: none;
}

.share{
    background: #543864;
    box-shadow: 4px 0px 50px rgba(0, 0, 0, 0.05);
    border-radius: 30px;
    color: #FCFCFC;
    width: 75px;
    height: 22px;
    border: none;
    outline: none;
}
.golden-color{
    margin-bottom: 70px;
}

.golden-box{
    width: 100%;
    height: 161px;
    background: conic-gradient(from 180deg at 50% 50%, #674779 0deg, #FFBD69 142.5deg, #674779 360deg);
    border-radius: 5px;
    position: absolute;
}

.golden-circle{
    width: 102px;
    height: 102px;
    border-radius: 50%;
    background: conic-gradient(from 180deg at 50% 50%, #FFBD69 -121.88deg, #6A4979 90deg, #FFBD69 238.12deg, #6A4979 450deg);
    position: relative;
    top: 100px;
    left: 25px;
    border: 3px solid white;

}

.edit-profile{
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 27px;
    position: relative;
    left: 80%;
    background: #543864;
    /* box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25); */
    border-radius: 8px;
    color: #FCFCFC;
    padding: 5px 15px;
    border: none;
    margin-left: auto;

}

.writeup{
    margin: 10px 40px;
    line-height: 30px;
    padding-bottom: 20px;
    
}

.writeup h3{
    font-weight: 700;
}

.writeup p{
    margin-top: 10px;
    line-height: 15px;
    font-weight: 500;
    font-size: 8px;
}

.writeup h4{
    font-family: "Actor", sans-serif;
    font-weight: 400;
}


.button-section{
    height: 47px;
    background: #FCFCFC;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    filter: drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.25));

    
}

.social-media{
    display: flex;
    align-items: center;
    border-radius: 5px;
    height: 40px;
    padding: 10px;

    
}
.social-media button{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px 10px;
    background: #F5F5F5;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    border: none;
    color: #121212;
    font-size: 10px;
    font-weight: 500;
    margin:  auto;

}

.my-links-sec{
    height: 35px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background: #FFFFFF;
    /* box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25); */
    box-shadow: 4px 0px 50px rgba(0, 0, 0, 0.06);
    font-family: "Actor", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    filter: drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.25));
    border-radius: 5px;
    border-bottom: 5px solid;
    border-image: linear-gradient( to right,  #FFBD69 50%, #543864 50%) 1;
}



.my-links{
    font-weight: bolder;
}

.media{
    opacity: 0.7;
}

.topskill{
    /* width: 483px; */
    height: 115px;
    background: #FFFFFF;
    box-shadow: 4px 0px 50px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    padding-top: 5px;
    filter: drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.25));

}

.topskill img{
    height: 10px;
    width: 10px;
}


.rectangles{
    position: relative;
    top: 20px;
    right: 20px;
}

.arrow-icon{
    position: relative;
    bottom: 48px;
    left: 430px;
}

.topskill-div{
    width: 432px;
    height: 55px;
    border-radius: 8px;
    background: #FFFFFF;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: row;
    margin:  10px auto 0;
    padding: 0 30px;
}



.topskill h4{
    font-size: 10px;
    font-weight: 400;
    margin-top: 4px;
}

.topskill p{
    font-size: 14px;
    line-height: 60px;
    font-weight: bold;
    position: relative;
    right: 35px;


}
</style>