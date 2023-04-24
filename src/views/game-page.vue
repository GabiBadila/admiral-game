<template>
    <main>
        <div class="bg-image"></div>
        <div class="blur-bg-image"></div>
        <div class="actual-game-container game-container-flexbox">
            <div>
                <div>
                    <div id="game-timer-container">
                        <div id="timer-icon">
                            <img :src="getImageUrl(`timer-icon.png`)">
                        </div>
                        <div id="actual-game-timer">{{ timeString }}</div>
                    </div>
                    <span ref="wrongTimeAddition" class="penalization-time">+5</span>
                </div>

                <img class="randomized-product-image" :src="getImageUrl(store.randomizedProduct.imagePath)">
            </div>

            <div class="game-screen-divider-container">
                <div class="randomizer-build-end-left-screen">
                    <img :src="getImageUrl(builtProductImagePath)">
                </div>
                <div class="randomizer-build-end-right-screen">
                    <div id="steps-grid-container">
                        <div id="steps-grid-title"> SELECT SIDE PANELS</div>
                        <div id="parts-grid-container">
                            <div class="individual-parts" v-for="component in componentListForActiveStep"
                                 v-on:click="clickedComponent(component)"
                                 :class="{active:selectedComponent.articleCode === component.articleCode}">
                                <img :src="getImageUrl(component.imagePath)">
                            </div>
                        </div>
                        <hr>
                        <div id="parts-information-container">
                            <div class="quantity-part">
                                <div id="part-title">
                                    <span style="padding-right: 32px;">
                                        {{ selectedComponent.name }}
                                </span>
                                </div>
                                <div id="quantity-amount">{{ selectedComponent.qty }}</div>
                                <button class="quantity-fields" id="plus-field" v-on:click="selectedComponent.qty++">+
                                </button>
                                <button class="quantity-fields" id="minus-field" v-on:click="selectedComponent.qty--"
                                        :disabled="selectedComponent.qty === 1">-
                                </button>
                            </div>
                            <button class="input-button orange add" v-on:click="addSelectedComponent">Add</button>
                            <span class="components-per-step">{{
                                completedUniqueComponentsForStep
                                }}/{{ uniqueComponentsInCurrentStep }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <img ref="wrongIcon" class="wrong-indicator" :src="getImageUrl('incorrect-choice-image.png')">
            <div class="game-steps-progress">
                <div class="bottom-steps step1-image" :class="{active:isActiveStep(1)}"></div>
                <div class="bottom-steps step2-image" :class="{active:isActiveStep(2)}"></div>
                <div class="bottom-steps step3-image" :class="{active:isActiveStep(3)}"></div>
                <div class="bottom-steps step4-image" :class="{active:isActiveStep(4)}"></div>
            </div>
        </div>
    </main>
</template>

<script>
import {store} from "@/state/store";

export default {
    name: "game-page",
    mounted() {
        clearInterval(this.timer)
        this.startTimer()
    },
    computed: {
        store() {
            return store
        },
        builtProductImagePath() {
            if (store.builtProduct.components.length >= 1) {
                return store.builtProduct.components.join('') + '.png'
            } else {
                return 'buildyourcart-placeholder-left.gif'
            }
        },
        componentListForActiveStep() {
            let componentList = []
            switch (this.activeStep) {
                case 1:
                    componentList = store.step1Components
                    break
                case 2:
                    componentList = store.step2Components
                    break
                case 3:
                    componentList = store.step3Components
                    break
                case 4:
                    componentList = store.step4Components
                    break
            }
            return componentList
        },
        timeString() {
            return new Date(store.secondsElapsed * 1000).toISOString().slice(11, 19);
        }
    },
    data() {
        return {
            timer: null,
            showContactInfo: true,
            showCart: false,
            activeStep: 1,
            selectedComponent: {
                name: "",
                qty: 0,
                articleCode: ""
            },
            completedUniqueComponentsForStep: 0,
            uniqueComponentsInCurrentStep: 1,
            completeArticleCodesForStep: []
        }
    },
    methods: {
        writeLeaderboardToLocalStorage() {
            const sortedLeaderboard = store.leaderboard.players.sort((a, b) => {
                return a - b
            })
            const stringifiedLeaderboard = JSON.stringify(sortedLeaderboard)
            localStorage.setItem('leaderboard', stringifiedLeaderboard)
        },
        startTimer() {
            this.timer = setInterval(this.incrementTime, 1000)
        },
        incrementTime() {
            store.secondsElapsed++
        },
        getImageUrl(imagePath) {
            return new URL(`../assets/${imagePath}`, import.meta.url).href
        },
        isActiveStep(step) {
            return step === this.activeStep
        },
        clickedComponent(component) {
            this.selectedComponent.name = component.name
            this.selectedComponent.articleCode = component.articleCode
            this.selectedComponent.qty = 1
        },
        addSelectedComponent() {
            if (this.isSelectedComponentCorrect()) {
                this.completedUniqueComponentsForStep++;
                const repeatedArticleCode = this.selectedComponent.articleCode.repeat(this.selectedComponent.qty)
                this.completeArticleCodesForStep.push(repeatedArticleCode)
                if (this.isSelectedComponentLastForStep()) {
                    store.builtProduct.components.push(...this.completeArticleCodesForStep)
                    this.completeArticleCodesForStep = []
                    if (this.activeStep !== 4) {
                        this.nextStep()
                    } else {
                        this.endReached()
                    }
                }
            } else {
                this.penalizePlayer()
            }
        },
        nextStep() {
            this.activeStep++
            this.completedUniqueComponentsForStep = 0
            this.uniqueComponentsInCurrentStep = store.randomizedProduct.componentsPerStep[this.activeStep].length
        },
        isSelectedComponentLastForStep() {
            const index = store.randomizedProduct.componentsPerStep[this.activeStep.toString()].findIndex((component) => {
                return component.articleCode === this.selectedComponent.articleCode
            })
            if (index !== -1) {
                store.randomizedProduct.componentsPerStep[this.activeStep.toString()].splice(index, 1)
            } else console.error(`invalid last component, could not find ${this.selectedComponent.articleCode} in componentsPerStep for step ${this.activeStep}`)
            return store.randomizedProduct.componentsPerStep[this.activeStep.toString()].length === 0
        },
        endReached() {
            clearInterval(this.timer)
            let leaderboardEntry = {
                name: store.currentPlayer.name,
                email: store.currentPlayer.email,
                time: store.secondsElapsed
            }
            store.leaderboard.players.push(leaderboardEntry)
            this.writeLeaderboardToLocalStorage()
            this.$router.push('/game-over')
        },
        penalizePlayer() {
            store.secondsElapsed += 5
            this.$refs.wrongIcon.style.visibility = "visible"
            this.$refs.wrongIcon.animate(
                {opacity: [0, 1, 0]},
                {duration: 2000, easing: "ease-in-out", iterations: 1}
            ).onfinish = () => {
                this.$refs.wrongIcon.style.visibility = "hidden"
            }

            this.$refs.wrongTimeAddition.style.visibility = "visible"
            this.$refs.wrongTimeAddition.animate(
                [
                    {opacity: 0, transform: "translateY(0px)"},
                    {opacity: 1, transform: "translateY(-50px)"},
                    {opacity: 0, transform: "translateY(-100px)"}
                ],
                {
                    duration: 2000,
                    easing: "ease-in-out",
                    iterations: 1,
                    fill: "forwards"
                }
            ).onfinish = () => {
                this.$refs.wrongTimeAddition.style.visibility = "hidden"
            }


        },
        isSelectedComponentCorrect() {
            const filteredComponents = store.randomizedProduct.components.filter((component) => {
                return component.articleCode === this.selectedComponent.articleCode
            })
            return filteredComponents.length === this.selectedComponent.qty
        }
    }
}

</script>

<style scoped>
.penalization-time {
    visibility: hidden;
    position: absolute;
    left: 18%;
    top: 4%;
    font-size: 64px;
    color: darkred;
}

.wrong-indicator {
    position: absolute;
    top: 17%;
    right: 14%;
    visibility: hidden;
}

.components-per-step {
    color: white;
    position: absolute;
    font-size: 36px;
    bottom: 8px;
    right: 8px;
}

/*.wrong-indicator.fade-in-and-out{*/
/*    animation: fade 2s linear;*/
/*}*/

/*@keyframes fade {*/
/*    0%, 100% {*/
/*        visibility: hidden;*/
/*        opacity: 0*/
/*    }*/
/*    50% {*/
/*        visibility: visible;*/
/*        opacity: 1*/
/*    }*/
/*}*/

.randomized-product-image {
    width: 600px;
    height: 500px;
    position: absolute;
    bottom: -1%;
    left: -3%;
}

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

.game-container-flexbox {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    padding-bottom: 0 !important;
}

.game-steps-progress {
    flex: 1 0;
    display: flex;
    align-items: center;
    flex-direction: row;
    color: #fff;
    width: 60%;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    position: relative;
    bottom: -32px;
}

.bottom-steps {
    flex: 1 0;
    font-size: 26px;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    background-color: #3b3b3c;
}

.step1-image {
    background-image: url("@/assets/iconstep1-inactive.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 80px;
    border-right: 3px solid #fff;
}

.step1-image.active {
    background-image: url("@/assets/iconstep1-active.png");
}

.step2-image {
    background-image: url("@/assets/iconstep2-inactive.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 80px;
    border-right: 3px solid #fff;
}

.step2-image.active {
    background-image: url("@/assets/iconstep2-active.png");
}

.step3-image {
    background-image: url("@/assets/iconstep3-inactive.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 80px;
    border-right: 3px solid #fff;
}

.step3-image.active {
    background-image: url("@/assets/iconstep3-active.png");
}


.step4-image {
    background-image: url("@/assets/iconstep4-inactive.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 80px;
}

.step4-image.active {
    background-image: url("@/assets/iconstep4-active.png");
}

.bottom-steps.active {
    background-color: #da5715;
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

.randomizer-build-end-left-screen img {
    width: 90%;
}

.randomizer-build-end-right-screen {
    flex: 1 0;
    padding: 32px 80px 0 80px;
}

#steps-grid-title {
    color: #dddddd;
    font-size: 40px;
    text-align: left;
    padding: 8px 36px;
    margin: 12px 30px 12px 30px;
    text-align: center;
}

#steps-grid-container {
    background-color: #3b3b3c;
    padding: 14px 12px 14px 12px;
    border-radius: 4px;
    position: relative;
}

#game-timer-container {
    position: absolute;
    left: 3%;
    top: 4%;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    background: rgba(59, 59, 60, .2);

}

#timer-icon {
    padding: 6px 0 6px 12px;
}

#actual-game-timer {
    grid-area: 1 / 2 / 2 / 4;
    font-size: 60px;
    padding: 6px 60px 6px 0;
}

#parts-grid-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    padding: 0 24px 20px 24px;
}

.individual-parts {
    border: 2px solid #757576;
}

.individual-parts.active {
    border-color: #da5715;
    border-width: 8px;
}

.individual-parts img {
    width: 100%;
    height: 100%;
}

hr {
    border: 0;
    height: 2px;
    background: #757576;;
    margin: 20px 30px 20px 30px;
}

#part-title {
    font-size: 40px;
    color: #dddddd;
    text-transform: uppercase;
    align-self: center;
    grid-area: part-title;
    font-weight: 200;
}

.quantity-part {
    display: grid;
    width: 100%;
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

.quantity-fields {
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

#quantity-amount {
    width: 100px;
    height: 156px;
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

#minus-field {
    align-self: start;
    grid-area: minus-field;
}

#plus-field {
    align-self: end;
    grid-area: plus-field;
}

#parts-information-container {
    margin-bottom: 20px;
}

.orange.add {
    margin-top: 20px !important;
    font-size: 48px !important;
    padding: 24px 100px !important;
}
</style>