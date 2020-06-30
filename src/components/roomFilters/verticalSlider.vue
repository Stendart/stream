<template>
    <div class="canvas canvasHeight">
        <!--<inputArea class="inpAr"></inputArea>-->
        <div class="carousels carousels-margin">
            <verticalCarousel class="carousel border-r"></verticalCarousel>
            <verticalCarousel class="carousel"></verticalCarousel>
        </div>

    </div>
</template>

<script>
    import inputArea from "./inputArea";
    import verticalCarousel from "./verticalCarousel";
    export default {
        name: "verticalSlider",
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
        width: 95%;
        height: 120px;
    }

    .carousels-margin {
        margin-top: 30px;
    }

    .carousel {
        width: 100%;
    }

    .border-r {
        border-right: 1px solid #999999;
    }

    .inpAr {
        width: 95%;
    }
</style>
