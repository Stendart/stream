<template>
    <div class="hooper-wraper">
        <div class="slide-border"></div>

        <!--<div class="head"> Inged min </div>-->
        <hooper class="hooper" ref="carousel" @slide="updateCarousel" @afterSlide="aft"
                :vertical="true"
                :itemsToShow="2.5"

                :infiniteScroll="true"
        >
            <slide v-for="(slide, indx) in slides" :key="indx" :index="indx" class="slide">
                {{ slide }} m2
            </slide>
        </hooper>
    </div>
</template>

<script>
    import { Hooper, Slide } from 'hooper';
    import 'hooper/dist/hooper.css';

    export default {
        name: "verticalCarousel",
        data() {
            return {
                slides: ['Inged min', '20', '25', '30', '35', '40'],
                hooperSettings: {
                    itemsToShow: 2,
                    centerMode: true,
                    breakpoints: {
                        800: {
                            centerMode: false,
                            itemsToShow: 3
                        },
                        1000: {
                            itemsToShow: 6,
                            pagination: 'fraction'
                        }
                    }
                },
                bol:false,

            }
        },
        watch: {
            carouselData () {
                this.$refs.carousel.slideTo(this.carouselData);
            }
        },
        components: {
            Hooper,
            Slide
        },
        methods: {
            slidePrev() {
                this.$refs.carousel.slidePrev();
            },
            slideNext() {
                this.$refs.carousel.slideNext();
            },
            updateCarousel(payload) {

                console.log(`myCarouselData `, this.$refs)
                this.$refs.carousel = payload.currentSlide
                //this.$refs.carousel.classList.add("class")

                //this.myCarouselData.style.backgroundCollor = '#c746bf';
                console.log(`SLIDING `, payload)
            },
            aft(payload) {
                console.log(`After slide `, payload)
            }
        }
    }
</script>

<style scoped>
    .hooper-wraper {
        text-align: center;
        background-color: #fff;

        position: relative;
    }

    .hooper {
        height: 100%;

        box-shadow:  0px -14px 25px -25px rgba(122,122,122,1) inset ;
    }

    .slide {
        display: flex;
        align-items: center;
        justify-content: center;

    }

    .slide-border {
        position: absolute;

        border-right: 1px solid #999999;
        border-top: 1px solid #999;
        border-bottom: 1px solid #999;
        width: 100%;
        height: calc(100%/2.5);
    }

    /*.is-current {
        border-right: 1px solid #999999;
        border-top: 1px solid #999;
        border-bottom: 1px solid #999;

        font-weight: 600;
    }*/
</style>
