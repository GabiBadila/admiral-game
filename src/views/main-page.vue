<script>
import {store} from "@/state/store";

export default {
    name: "main-page",
    created() {
        const stringifiedLeaderboard = localStorage.getItem('leaderboard')
        if (stringifiedLeaderboard) {
            store.leaderboard.players = JSON.parse(stringifiedLeaderboard)
        }
    },
    computed: {
        store() {
            return store
        },
        sortedLeaderboard() {
            return store.leaderboard.players.sort((a, b) => {
                return a - b
            }).slice(0, 5)
        }
    },
    methods: {
        getImageUrl(imagePath) {
            return new URL(`../assets/${imagePath}`, import.meta.url).href
        },
        timeString(seconds) {
            return new Date(seconds * 1000).toISOString().slice(14, 19);
        },
    }
}

</script>

<template>
    <main>
        <div class="game-container">
            <img :src="getImageUrl('mainpage-gametitle-white.png')"
                 height="400">

            <div class="main-page-container">

                <div class="flexbox-image">
                    <router-link to="randomizer">
                        <img :src="getImageUrl('main-page-press-to-play.png')">
                    </router-link>
                </div>
                <div id="game-leaderboard">
                    <div class="leaderboard-ranking">
                        <img :src="getImageUrl('leaderboard-transparent-background.png')">
                    </div>
                    <div class="leaderboard-ranking" v-for="(player,index) in sortedLeaderboard">
                        <div :class="(index===0) ? 'leaderboard-trophy-1' : 'leaderboard-trophy-2'">
                            <img :src="getImageUrl('trophy-leaderboard.png')"
                                 width="180" height="180">
                        </div>
                        <p class="leaderboard-player-name">{{ player.name }}</p>
                        <p class="leaderboard-times">{{ timeString(player.time) }}</p>
                    </div>
                </div>
            </div>
        </div>

    </main>
</template>

<style scoped>
.game-container {
    max-width: 70%;
    margin: auto;
    text-align: center;
    padding-top: 240px;
}

.main-page-container {
    display: flex;
    flex-direction: row;
    margin-top: 100px;
    justify-content: center;
    align-items: center;
    height: 1200px;
}

.flexbox-image {
    flex: 2;
    text-align: center;

}

#game-leaderboard {
    flex: 1 0;
    margin: 32px 12px;
    background-color: #3b3b3c;
    border-radius: 8px;
    box-shadow: 0 0 40px -10px rgba(0, 0, 0, .4);
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100%;
    padding: 0 12px;
    /* font-size: 48px; */
}

.leaderboard-ranking {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
}

.leaderboard-trophy-1 {
    flex: 1;
    text-align: center;
}

.leaderboard-trophy-2 {
    flex: 1;
    text-align: center;
    visibility: hidden;
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
