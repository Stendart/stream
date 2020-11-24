<template>
    <div>
        <input type="text" class="inpDate inpText "
               :placeholder="getSelectedHour + ` : ` + getSelectedMinutes" disabled>
        <div class="carousels">
            <hooper class="hooper carousel notActive" ref="carousel"
                    :vertical="true"
                    :itemsToShow="5"
                    :centerMode="true"

                    @slide="setCurentHour"
            >
                <slide v-for="(slide, indx) in generateHour" :key="indx" :index="indx" class="slide">
                    {{ slide }}
                </slide>
            </hooper>


            <hooper class="hooper carousel notActive" ref="carousel"
                    :vertical="true"
                    :itemsToShow="5"
                    :centerMode="true"

                    @slide="setCurentMinutes"
            >
                <slide v-for="(slide, indx) in generateMinutes" :key="indx" :index="indx" class="slide">
                    {{ slide }}
                </slide>
            </hooper>
        </div>
    </div>
</template>

<script>
    import {Hooper, Slide} from "hooper";
    import verticalCarousel from "../roomFilters/verticalCarousel";

    export default {
        name: "timeCarousel",
        data() {
            return {
                hour: [],
                minutes: [],
            }
        },
        methods: {
            setCurentHour(payload) {
                console.log(`After slide `, payload.currentSlide)
                this.$store.commit(`updateSelectedHour`, this.hour[payload.currentSlide])
            },

            setCurentMinutes(payload) {
                console.log(`Minutes `, this.minutes[payload.currentSlide])
                this.$store.commit(`updateSelectedMinutes`, this.minutes[payload.currentSlide])
            },

        },
        computed: {
            /* method for generate days of month*/
            generateHour() {
                for(let i=0; i<24; i++) {
                    this.hour.push(i.toString());
                }
                return this.hour
            },
            generateMinutes() {
                for(let i=0; i<60; i++) {
                    this.minutes.push(i.toString());
                }
                return this.minutes
            },
            getSelectedHour () {
                //console.log(this.$store.getters.getSlidesMinVal)
                return this.$store.getters.getSelectedHour;
            },

            getSelectedMinutes () {
                //console.log(this.$store.getters.getSlidesMaxVal)
                return this.$store.getters.getSelectedMinutes;
            }
        },
        components: {
            Hooper,
            Slide,
            verticalCarousel
        },
    }
</script>

<style scoped>
    .carousels {
        display: flex;
        /*width: 95%;*/
        /*height: 160px;*/
    }

    .mt {
        margin-top: 10px;
    }

    .carousel {
        width: 50%;


        font-size: 24px;
        font-weight: 400;
        line-height: 32px;
    }

    .notActive {
        color: #8e8e93;
    }

    .inpDate {
        display: block;
        margin: auto;
        margin-top: 25px;
        margin-bottom: 30px;

        text-align: center;
        border: none;
    }

    .inpText, .inpText::placeholder {
        height: 43px;

        font-size: 32px;
        font-weight: 400;
        line-height: 43px;
        text-align: center;
        letter-spacing: -0.2782609px;
        color: black;
    }

    .slide {
        display: flex;
        align-items: center;
        justify-content: center;

    }

    .is-current {
        color: black;
    }
</style>
