<template>
    <main>
        <div class="bg-image"></div>
        <div class="blur-bg-image"></div>
        <div class="actual-game-container">
            <img :src="productImage">
            <div id="contact-info-input" v-if="showContactInfo">
                <p id="game-intro-info"> Get ready to show off your assembly skills and race against the clock in our
                    fast-paced transportation cart challenge!<br> Press on RANDOMIZE to play now and see if you have
                    what it takes to be the ultimate cart builder.</p>
                <div id="form">
                    <input type="text" placeholder="Player name" class="input-form" id="input-name"
                           v-model="store.currentPlayer.name"/>
                    <input type="email" placeholder="Email address" class="input-form" id="input-email"
                           v-model="store.currentPlayer.email"/>
                    <button class="input-button orange" @click="randomize">randomize</button>
                </div>
            </div>

            <div id="random-cart-info" v-if="showCart">
                <h1 class="random-cart-title">{{ store.randomizedProduct.name }}</h1>
                <dl id="random-cart-checklist">
                    <dd v-for="component in store.randomizedProduct.components">{{ component.name }}</dd>
                </dl>
                <br>
                <router-link to="game">
                    <button class="input-button blob orange">Start game</button>
                </router-link>
            </div>
        </div>
    </main>

</template>

<script>
import {store} from '../state/store.ts'

export default {
    name: "randomizer-page",
    computed: {
        store() {
            return store
        },
        productImage() {
            return new URL(`../assets/${this.imagePath}`, import.meta.url).href
        }

    },
    data() {
        return {
            imagePath: "timer-icon.png",
            showContactInfo: true,
            showCart: false
        }
    },
    methods: {
        randomize() {
            console.log('RANDOMIZE ME', store);
            this.showContactInfo = false;
            this.showCart = true;
            const randomIndex = Math.floor(Math.random() * store.allProducts.length)
            store.randomizedProduct = store.allProducts[0]
            this.imagePath = store.randomizedProduct.imagePath
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


#random-cart-checklist {
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
    list-style-image: url("@/assets/checkmark-icon-randomizerpage.png");
    padding-inline-start: 1ch;
    padding: 4px 0;
    margin: 0;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;

}


.random-cart-title {
    margin: 6px 0 20PX 0;
    font-size: 100px;
    font-weight: bold;
}


hr {
    border: 0;
    height: 2px;
    background: #757576;;
    margin: 20px 30px 20px 30px;
}
</style>