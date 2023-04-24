<template>
    <main>
        <div class="bg-image"></div>
        <div class="blur-bg-image"></div>
        <div class="actual-game-container">
            <div class="game-screen-divider-container">
                <div class="randomizer-build-end-left-screen end-screen-flexbox">
                    <div>
                        <img :src="productImage">
                    </div>
                    <div id="final-score-title"> ━ YOUR TIME ━</div>
                    <div id="user-final-score">{{ timeString(store.secondsElapsed, true) }}</div>
                    <button class="input-button orange" style="margin-top:120px;"><a
                            href="https://gabibadila.github.io/admiral-game/">New game</a></button>
                </div>
                <div class="randomizer-build-end-right-screen leaderboard-background">
                    <div class="leaderboard-ranking ranking-title">TOP 10 BEST TIMES</div>
                    <div class="leaderboard-ranking" v-for="player in sortedLeaderboard">

                        <p class="leaderboard-player-name">{{ player.name }}</p>
                        <p class="leaderboard-times">{{ timeString(player.time, false) }}</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import {store} from "@/state/store";

export default {
    name: "game-over-page",
    computed: {
        store() {
            return store
        },
        productImage() {
            return new URL(`../assets/${this.imagePath}`, import.meta.url).href
        },
        sortedLeaderboard() {
            return store.leaderboard.players.sort((playerA, playerB) => {
                return playerA.time - playerB.time
            }).slice(0, 10)
        }
    },
    data() {
        return {
            imagePath: "congratulations-header-endscreen.gif",
        }
    },
    methods: {
        timeString(seconds, showHours) {
            if (showHours) return new Date(seconds * 1000).toISOString().slice(11, 19);
            return new Date(seconds * 1000).toISOString().slice(14, 19);
        },
    }
}
</script>

<style scoped>
.bg-image {
    background-image: url("@/assets/background-image-allpages.jpg");
    background-color: #111517;
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

}


.actual-game-container {
    /* background-color: #ededed; */
    background-image: url("@/assets/lightgreybackground-gamecontainer.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
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

#game-intro-info {
    font-size: 40px;
    font-weight: 400;
    padding: 24px 120px;
    margin: 0;
}

#form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
}

.input-form {
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

.input-form:focus {
    background: #fff;
}


.orange {
    background: #da5715;
    border-radius: 4px;
    border: none;
    color: #fff;
    font-weight: 700;
    font-size: 60px;
    text-transform: uppercase;
    font-family: 'Rubik', sans-serif;
    cursor: pointer;
    margin-top: 40px;
    padding: 24px 40px;
    box-shadow: 0 0 0 0 rgba(255, 121, 63, 1);
}

.orange a {
    text-decoration: none;
    text-underline: none;
    color: #fff;
}

.blob.orange {
    animation: pulse-orange 2s infinite;
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


dd {
    display: list-item;
    list-style-image: url("@/assets/checkmark-icon-randomizerpage.png");
    padding-inline-start: 1ch;
    padding: 4px 0;
    margin: 0;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;

}


.game-screen-divider-container {
    display: flex;
    flex-direction: row;
}

.randomizer-build-end-left-screen {
    flex: 1 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.randomizer-build-end-right-screen {
    flex: 1 0;
    padding: 32px 80px 0 80px;
}

hr {
    border: 0;
    height: 2px;
    background: #757576;;
    margin: 20px 30px 20px 30px;
}

#final-score-title {
    text-transform: uppercase;
    font-size: 120px;
    color: #3b3b3c;
    margin-top: 40px;
}

#user-final-score {
    font-size: 120px;
    /* background: rgba(59,59,60,.2); */
    margin-top: 20px;
    padding: 12px 24px;
}

.orange.add {
    margin-top: 20px !important;
    font-size: 48px !important;
    padding: 24px 100px !important;
}

.end-screen-flexbox {
    flex-direction: column;
    margin-top: 140px;
    flex: 2 0 !important;
    justify-content: flex-start;
}

.leaderboard-background {
    background-color: #3b3b3c;
    height: 80.4vh;
    position: relative;
    bottom: 20px;
    right: -20px;
    text-align: LEFT;
    margin: auto;
}

.ranking-title {
    color: #dddddd;
    font-size: 60px;
    /* padding: 8px 36px; */
    /* margin: 30px; */
    margin-top: 130px;
    text-align: center;
    padding-bottom: 100px;
}

.leaderboard-ranking {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
}

.leaderboard-player-name {
    color: white;
    font-size: 40px;
    flex: 3;
    font-weight: 200;
}

.leaderboard-times {
    flex: 1;
    color: white;
    font-size: 40px;
    font-weight: 200;
}
</style>