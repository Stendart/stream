<template>
    <div>
        <!--<div class="slide-border"></div>

        <hooper class="hooper" ref="carousel"
                :vertical="true"
                :itemsToShow="5"
                :centerMode="true"

                @slide="getCurentVal"
        >
            <slide v-for="(slide, indx) in slides" :key="indx" :index="indx" class="slide">
                {{ slide }}
            </slide>
        </hooper>-->

        <!--<verticalCarousel :slides="generateDays()" :is-show="false" class="carousel notActive"></verticalCarousel>
        <verticalCarousel :slides="mounth" :is-show="false" class="carousel notActive"></verticalCarousel>
-->
        <input type="text" class="inpDate inpText " :placeholder="getCurentDate + ` ` + getCurentMounth" disabled>
        <div class="carousels">
            <hooper class="hooper carousel notActive" ref="carousel"
                    :vertical="true"
                    :itemsToShow="5"
                    :centerMode="true"

                    @slide="setCurentDate"
            >
                <slide v-for="(slide, indx) in generateDays" :key="indx" :index="indx" class="slide">
                    {{ slide }}
                </slide>
            </hooper>


            <hooper class="hooper carousel notActive" ref="carousel"
                    :vertical="true"
                    :itemsToShow="5"
                    :centerMode="true"

                    @slide="setCurentMounth"
            >
                <slide v-for="(slide, indx) in mounth" :key="indx" :index="indx" class="slide">
                    {{ slide }}
                </slide>
            </hooper>
        </div>

    </div>
</template>

<script>
    import verticalCarousel from "../roomFilters/verticalCarousel";
    import { Hooper, Slide } from 'hooper';
    import 'hooper/dist/hooper.css';

    export default {
        name: "dataCarousel",
        data() {
            return {
                days: [],
                mounth: ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                    'August', 'September', 'October', 'November', 'December'],
            }
        },

        props: {
            //slides: Array,

        },
        watch: {

        },
        methods: {
            setCurentDate(payload) {
                console.log(`After slide `, payload.currentSlide)
                this.$store.commit(`updateSelectedDate`, this.days[payload.currentSlide])
            },

            setCurentMounth(payload) {
                console.log(`Mounth `, this.mounth[payload.currentSlide])
                this.$store.commit(`updateSelectedMounth`, this.mounth[payload.currentSlide])
            },

        },
        computed: {
            /* method for generate days of month*/
            generateDays() {
                for(let i=0; i<30; i++) {
                    this.days.push(i.toString());
                }
                return this.days
            },
            getCurentDate () {
                //console.log(this.$store.getters.getSlidesMinVal)
                return this.$store.getters.getSelectedDate;
            },

            getCurentMounth () {
                //console.log(this.$store.getters.getSlidesMaxVal)
                return this.$store.getters.getSelectedMounth;
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
