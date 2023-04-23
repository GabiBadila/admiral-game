<script>
export default {
    name: "main-page",
    methods: {
        getImageUrl(imagePath) {
            return new URL(`../assets/${imagePath}`, import.meta.url).href
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
                        <img src="https://www.admiralstaging.com/content/files/images/contentpages/p%2Bs%20game%20images/lightgrey-background.gif"
                             width="1100">
                    </router-link>
                </div>
                <div id="game-leaderboard">
                    <div class="leaderboard-ranking">
                        <img :src="getImageUrl('leaderboard-header-firstscreen.png')">
                    </div>
                    <div class="leaderboard-ranking">

                        <div class="leaderboard-trophy-1">
                            <img src="https://www.admiralstaging.com/content/files/images/contentpages/p%2Bs%20game%20images/ranking-first-place.png"
                                 width="180" height="180">
                        </div>
                        <p class="leaderboard-player-name">Player Name 1</p>
                        <p class="leaderboard-times">4:35</p>
                    </div>
                    <div class="leaderboard-ranking">
                        <div class="leaderboard-trophy-2">
                            <img src="https://www.admiralstaging.com/content/files/images/contentpages/p%2Bs%20game%20images/silver-ranking.png"
                                 width="100" height="100">
                        </div>
                        <p class="leaderboard-player-name">Player Name 2</p>
                        <p class="leaderboard-times">5:35</p>
                    </div>
                    <div class="leaderboard-ranking">
                        <div class="leaderboard-trophy-2">
                            <img src="https://www.admiralstaging.com/content/files/images/contentpages/p%2Bs%20game%20images/silver-ranking.png"
                                 width="100" height="100">
                        </div>
                        <p class="leaderboard-player-name">Player Name 2</p>
                        <p class="leaderboard-times">5:35</p>
                    </div>
                    <div class="leaderboard-ranking">
                        <div class="leaderboard-trophy-2">
                            <img src="https://www.admiralstaging.com/content/files/images/contentpages/p%2Bs%20game%20images/silver-ranking.png"
                                 width="100" height="100">
                        </div>
                        <p class="leaderboard-player-name">Player Name 2</p>
                        <p class="leaderboard-times">5:35</p>
                    </div>
                    <div class="leaderboard-ranking">
                        <div class="leaderboard-trophy-2">
                            <img src="https://www.admiralstaging.com/content/files/images/contentpages/p%2Bs%20game%20images/silver-ranking.png"
                                 width="100" height="100">
                        </div>
                        <p class="leaderboard-player-name">Player Name 2</p>
                        <p class="leaderboard-times">5:35</p>
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
    flex: 1;
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
