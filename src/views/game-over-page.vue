<template>
    <div class="bg-image"></div>
    <div class="blur-bg-image"></div>
    <div class="actual-game-container">
        <div class="game-screen-divider-container">
            <div class="randomizer-build-end-left-screen end-screen-flexbox">
                <div>
                    <img src="https://www.admiralstaging.com/content/files/images/contentpages/p%2Bs%20game%20images/end-screen-congratulations-stars.gif">
                </div>
                <div id="final-score-title"> ━ YOUR TIME ━</div>
                <div id="user-final-score">00:03:56</div>
                <button class="input-button orange" style="margin-top:120px;">new game</button>
            </div>
            <div class="randomizer-build-end-right-screen leaderboard-background">
                <div class="leaderboard-ranking ranking-title">TOP 10 BEST TIMES</div>
                <div class="leaderboard-ranking">

                    <p class="leaderboard-player-name">Player Name 1</p>
                    <p class="leaderboard-times">4:35</p>
                </div>
                <div class="leaderboard-ranking">
                    <p class="leaderboard-player-name">Player Name 2</p>
                    <p class="leaderboard-times">5:35</p>
                </div>
                <div class="leaderboard-ranking">

                    <p class="leaderboard-player-name">Player Name 2</p>
                    <p class="leaderboard-times">5:35</p>
                </div>
                <div class="leaderboard-ranking">

                    <p class="leaderboard-player-name">Player Name 2</p>
                    <p class="leaderboard-times">5:35</p>
                </div>
                <div class="leaderboard-ranking">

                    <p class="leaderboard-player-name">Player Name 2</p>
                    <p class="leaderboard-times">5:35</p>
                </div>
                <div class="leaderboard-ranking">

                    <p class="leaderboard-player-name">Player Name 2</p>
                    <p class="leaderboard-times">5:35</p>
                </div>
                <div class="leaderboard-ranking">

                    <p class="leaderboard-player-name">Player Name 2</p>
                    <p class="leaderboard-times">5:35</p>
                </div>
                <div class="leaderboard-ranking">

                    <p class="leaderboard-player-name">Player Name 2</p>
                    <p class="leaderboard-times">5:35</p>
                </div>
                <div class="leaderboard-ranking">

                    <p class="leaderboard-player-name">Player Name 2</p>
                    <p class="leaderboard-times">5:35</p>
                </div>
                <div class="leaderboard-ranking">

                    <p class="leaderboard-player-name">Player Name 2</p>
                    <p class="leaderboard-times">5:35</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "game-over-page"
}
</script>

<style scoped>
.bg-image {
    background-image: url("https://www.admiralstaging.com/content/files/images/contentpages/p%2Bs%20game%20images/pexels-rahul-pandit-1680412.jpg");
    background-color: #111517;
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size:cover;

}


.actual-game-container {
    /* background-color: #ededed; */
    background-image: url("https://www.admiralstaging.com/content/files/images/contentpages/p%2Bs%20game%20images/lightgrey-background.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size:cover;
    color: #111517;
    font-weight: bold;
    position: absolute;
    top: 10%;
    left: 10%;
    z-index: 2;
    width: 80%;
    height: 80%;
    padding: 20px;
    text-align: center;
    /* border-radius: 8px;
   box-shadow: 0 0 40px -10px rgba(0, 0, 0, .4); */
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
}

#game-intro-info{
    font-size:40px;
    font-weight: 400;
    padding: 24px 120px;
    margin:0;
}

#form{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
}

.input-form{
    background: #ededed;
    outline: 0;
    width: 30%;
    border: 0;
    margin: 0 0 40px;
    padding: 26px;
    box-sizing: border-box;
    font-size: 40px;
    font-family: 'Rubik', sans-serif;
}

.input-form:focus{
    background: #fff;
}


.orange{
    background:  #da5715;
    border-radius: 4px;
    border: none;
    color: #fff;
    font-weight:700;
    font-size: 60px;
    text-transform: uppercase;
    font-family: 'Rubik', sans-serif;
    cursor: pointer;
    margin-top: 40px;
    padding: 24px 40px;
    box-shadow: 0 0 0 0 rgba(255, 121, 63, 1);
}

.blob.orange {
    animation: pulse-orange 2s infinite;
    /* margin-top: 20px !important; */
}

@keyframes pulse-orange {
    0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(255, 121, 63, 0.7);
    }

    70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(255, 121, 63, 0);
    }

    100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(255, 121, 63, 0);
    }
}

/* #contact-info-input{
  display: none;
} */

#random-cart-checklist{
    font-size: 48px;
    list-style-position: inside;
    display: inline-block;
    margin: 0 auto;
    text-align: left;
    line-height: 1.6;
    font-family: 'Rubik', sans-serif;
}

dd {
    display: list-item;
    list-style-image: url("https://www.admiralstaging.com/content/files/images/contentpages/p%2Bs%20game%20images/icons8-checkmark-32.png");
    padding-inline-start: 1ch;
    padding: 4px 0;
    margin:0;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;

}

#random-cart-info{
    display: none;
}

.random-cart-title{
    margin: 6px 0 20PX 0;
    font-size: 100px;
    font-weight: bold;
}


.game-container-flexbox{
    display:flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    padding-bottom:0 !important;
}

.game-steps-choices{
    flex: 8 0;
    width: 96%;
}

.game-steps-progress{
    flex: 1 0;
    display:flex;
    align-items: center;
    flex-direction: row;
    color: #fff;
    width:60%;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    position: relative;
    bottom: -32px;
}

.bottom-steps{
    flex: 1 0;
    font-size: 26px;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    background-color: #3b3b3c;
}

.step1-image{
    background-image: url("https://www.admiralstaging.com/content/files/images/contentpages/p%2Bs%20game%20images/iconstep1-inactive.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size:contain;
    height: 80px;
    border-right: 3px solid #fff;
}

.step1-image.active{
    background-image: url("https://www.admiralstaging.com/content/files/images/contentpages/p%2Bs%20game%20images/iconstep1-active.png");
}
.step2-image{
    background-image: url("https://www.admiralstaging.com/content/files/images/contentpages/p%2Bs%20game%20images/iconstep2-inactive.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size:contain;
    height: 80px;
    border-right: 3px solid #fff;
}

.step2-image.active{
    background-image: url("https://www.admiralstaging.com/content/files/images/contentpages/p%2Bs%20game%20images/iconstep2-active.png");
}

.step3-image{
    background-image: url("https://www.admiralstaging.com/content/files/images/contentpages/p%2Bs%20game%20images/iconstep3-inactive.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size:contain;
    height: 80px;
    border-right: 3px solid #fff;
}

.step3-image.active{
    background-image: url("https://www.admiralstaging.com/content/files/images/contentpages/p%2Bs%20game%20images/iconstep3-active.png");
}


.step4-image{
    background-image: url("https://www.admiralstaging.com/content/files/images/contentpages/p%2Bs%20game%20images/iconstep4-inactive.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size:contain;
    height: 80px;
}

.step4-image.active{
    background-image: url("https://www.admiralstaging.com/content/files/images/contentpages/p%2Bs%20game%20images/iconstep4-active.png");
}

.bottom-steps.active{
    background-color: #da5715;
}


.game-screen-divider-container{
    display: flex;
    flex-direction: row;
}

.randomizer-build-end-left-screen{
    flex: 1 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.randomizer-build-end-right-screen{
    flex: 1 0;
    padding:  32px 80px 0 80px;
}

#steps-grid-title{
    /* background: #DDDDDD; */
    color: #dddddd;
    font-size: 40px;
    text-align: left;
    padding: 8px 36px;
    margin: 12px 30px 12px 30px;
    text-align: center;
    /* box-shadow: rgba(17,21,23, 0.3) 0px 5px 15px 0px; */
}

#steps-grid-container{
    background-color: #3b3b3c;
    /* background-color: #757576; */
    padding:14px 12px 14px 12px;
    border-radius: 4px;
}

#game-timer-container{
    position:absolute;
    left: 3%;
    top: 4%;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    background: rgba(59,59,60,.2);

}

#timer-icon{
    /* grid-area: 1 / 1 / 2 / 2; */
    /* background-image: url("https://www.admiralstaging.com/content/files/images/contentpages/p%2Bs%20game%20images/icons8-timer-58%20%283%29.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size:contain; */
    padding: 6px 0 6px 12px;
}

#actual-game-timer{
    grid-area: 1 / 2 / 2 / 4;
    /* background: rgba(59,59,60,.2); */
    font-size: 60px;
    padding: 6px 60px 6px 0;
}

#parts-grid-container{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    padding: 0 24px 20px 24px;
}

.individual-parts{
    /* grid-area: 1 / 1 / 2 / 2;  */
    /* border: 2px solid #BCBCBD; */
    /* border: 2px solid #da5715; */
    border: 2px solid #757576;
}

hr{
    border: 0;
    height: 2px;
    background: #757576;;
    margin: 20px 30px 20px 30px;
}

#part-title{
    font-size: 40px;
    color: #dddddd;
    text-transform: uppercase;
    align-self: center;
    grid-area: part-title;
    font-weight:200;
}

.quantity-part{
    display: grid;
    width:  100%;
    padding: 20px 0 20px 20px;
    grid-template-columns: 3fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 8px 10px;
    grid-template-areas:
    "part-title quantity-amount plus-field"
    "part-title quantity-amount minus-field";
    /*
      align-items: center;
      justify-content: center;
      margin-bottom: 32px; */
    margin: auto;

}

#actual-quantity{
    font-size: 32px;
    color: #dddddd;
    font-weight: 200;

}

.quantity-fields{
    display: flex;
    background: #DDDDDD;
    width: 80px;
    height: 74px;
    font-size: 40px;
    align-items: center;
    justify-content: center;
    /* border: 2px solid #757576; */
    cursor: pointer;
    color: #111517;
    font-weight: 200;
}

#quantity-amount{
    width: 100px;
    height:156px;
    justify-self: end;
    grid-area: quantity-amount;
    background: #DDDDDD;
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #111517;
    font-weight: 200;
}

#minus-field{
    align-self: start;
    grid-area: minus-field;
}

#plus-field{
    align-self: end;
    grid-area: plus-field;
}

#parts-information-container{
    margin-bottom: 20px;
}

#final-score-title{
    text-transform: uppercase;
    font-size: 120px;
    color: #3b3b3c;
    margin-top:40px;
}

#user-final-score{
    font-size: 90px;
    /* background: rgba(59,59,60,.2); */
    margin-top: 20px;
    padding: 12px 24px;
}

.orange.add{
    margin-top: 20px !important;
    font-size: 48px !important;
    padding: 24px 100px !important;
}

.end-screen-flexbox{
    flex-direction: column;
    margin-top: 140px;
    flex: 2 0 !important;
    justify-content: flex-start;
}

.leaderboard-background{
    background-color: #3b3b3c;
    height: 80.4vh;
    position: relative;
    bottom: 20px;
    right: -20px;
    text-align: LEFT;
    margin: auto;
}

.ranking-title{
    color: #dddddd;
    font-size: 60px;
    /* padding: 8px 36px; */
    /* margin: 30px; */
    margin-top: 130px;
    text-align: center;
    padding-bottom: 100px;
}


.game-container{
    max-width: 70%;
    margin: auto;
    text-align: center;
    padding-top: 240px;
}

.main-page-container{
    display: flex;
    flex-direction: row;
    margin-top: 100px;
    justify-content: center;
    align-items: center;
    height: 1200px;
}

.flexbox-image{
    flex: 2;
    text-align: center;

}

#game-leaderboard{
    flex: 1 0;
    margin: 32px 12px;
    background-color: #3b3b3c;
    border-radius: 8px;
    box-shadow: 0 0 40px -10px rgba(0, 0, 0, .4);
    display:flex;
    flex-direction: column;
    text-align: center;
    height: 100%;
    padding: 0 12px;
}

.leaderboard-ranking{
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
}

.leaderboard-player-name{
    color: white;
    font-size: 40px;
    flex: 3;
    font-weight: 200;
}

.leaderboard-times{
    flex: 1;
    color: white;
    font-size: 40px;
    font-weight: 200;
}
</style>