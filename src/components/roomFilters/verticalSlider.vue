<template>
    <div class=" canvasHeight">
        <!--<inputArea class="inpAr"></inputArea>-->
        <div class="carousels carousels-margin">
            <verticalCarousel class="carousel border-r"
                              :slides="slidesMin"
                              name-var-vall="updateSlidesMinVal">
            </verticalCarousel>
            <verticalCarousel class="carousel"
                              :slides="slidesMax"
                              name-var-vall="updateSlidesMaxVal">
            </verticalCarousel>
        </div>

    </div>
</template>

<script>
    import inputArea from "./inputArea";
    import verticalCarousel from "./verticalCarousel";
    export default {
        name: "verticalSlider",
        data() {
            return {
                slidesMin: ['Inged min', '20 m2', '25 m2', '30 m2', '35 m2', '40 m2'],
                slidesMax: ['Inged max', '200 m2', '250 m2', '300 m2', '350 m2', '400 m2'],
            }
        },
        components: {
            inputArea,
            verticalCarousel
        }
    }
</script>

<style scoped>
    .canvasHeight {
        /*height: 360px;*/
    }

    .carousels {
        display: flex;
        /*width: 95%;*/
        height: 160px;
    }

    .carousels-margin {
        margin-top: 30px;
    }

    .carousel {
        width: 50%;
    }

    .border-r {
        border-right: 1px solid #999999;
    }

    .inpAr {
        width: 95%;
    }

</style>
