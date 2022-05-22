<template>
    <div class = 'left-side'> 
        <div class = 'color-div'>
            <div class = 'color-options'>
                <button id='white'></button>
                <button id='light-green'></button>
                <button id='dark-grey'></button>
                <button id='orange'></button>
                <button id='deep-green'></button>
                <button id='light-blue'></button>
                <button id='light-grey'></button>
                <button id='lemon'></button>
                <button id='light-red'></button>
                <button id='deep-lemon'></button>
                <button id='light-yellow'></button>
                <button id='deep-navy-blue'></button>
                <button id='deep-pink'></button>
                <button id='lighter-green'></button>
                <button id='blue-bay'></button>
                <button id='lightest-green'></button>
                <button id='pukinator-gold'></button>
                <button id='pink'></button>
                <button id='dark-blue'></button>
                <button id='lighest-pink'></button>
                <button id='yellow-gold'></button>
                <button id='dark-orange'> </button>
                <button id='light-pink'></button>
                <button id='red'></button>
            </div>

            <button class='more-colors'>More colours</button>
        </div>

        <div class = 'apply-theme'>
            <div class = "apply-text">
                <h3>Apply theme to visitor's page</h3>
                <p>Apply theme to profile page viewed by other users visiting your profile page</p>
            </div>
            <div class = 'apply-image'>
                <img src="@/assets/images/Component195.png" alt="button">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  
.left-side{
    width: 50%;
}
/* color buttons */

.color-div{

    background: #FFFFFF;
    box-shadow: 4px 0px 50px rgba(0, 0, 0, 0.09);
    border-radius: 5px;
    padding: 10px;
    margin: 30px 0;
}

.color-options{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 10px;
    margin-top: 20px;
}
.color-options button{
width: 160px;
height: 117px;
border: none;
box-shadow: 4px 0px 50px rgba(0, 0, 0, 0.05);
border-radius: 5px;
margin: 10px;
cursor: pointer;
transform: scale(1);
transition:  transform 250ms;
}

.color-options button:hover,
.color-options button:focus{
    transform: scale(1.1);
}

#white{
    background: #FFFFFF;
}


#light-green{
    background: #89B6A5;
}

#dark-grey{
    background: #423E3B;
}
#orange{
    background: #E67F0D;
}

#deep-green{
    background: #227A4A;
}

#light-blue{
    background: #17BEBB;   
}

#light-grey{
    background: #726E60;
}

#lemon{
    background: #B6E86B;
}

#light-red{
    background: #AF1B3F;

}

#deep-lemon{
    background: #04AB3D;
}

#light-yellow{
    background: #FCFF78;
}

#deep-navy-blue{
    background: #340068;
}

#deep-pink{
    background: #A54657;
}

#lighter-green{
    background: #ABE188;
}
#blue-bay{
    background: #6184D8;
}

#lightest-green{
    background: #CBE896;
}

#pukinator-gold{
    background: #767800;
}
#pink{
    background: #EA526F;
}

#dark-blue{
    background: #0A1045;
}

#lighest-pink{
    background: #DBCBD8;
}

#yellow-gold{
    background: #E1CE7A;
}

#dark-orange{
    background: #FF8811;
}

#light-pink{
    background: #DD7373; 
}

#red{
    background: #E9190F;
}

.more-colors{
    font-weight: 500;
    display: flex;
    text-align: center;
    margin: 80px auto;
    color: #FCFCFC;
    background: #543864;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding: 15px 20px;
    border: none;
    outline: none;
}

/* apply theme */


.apply-theme{
    height: 139px;
    background: #FFFFFF;
    box-shadow: 4px 0px 50px rgba(0, 0, 0, 0.09);
    border-radius: 5px;
    padding: 20px 15px;
    margin: 30px 0px;
    line-height: 27px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.apply-image{
    position: relative;
    top: 17px;
}

.apply-theme h3{
    font-family: 'Actor', sans-serif;
    font-weight: bold;
    font-size: 26px;
}

</style>