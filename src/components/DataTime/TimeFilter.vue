<template>
    <div>
        <timeCarousel></timeCarousel>
        <ButtonBottom class="btn-margin"
                      :btn_text="`Klar`"></ButtonBottom>
    </div>
</template>

<script>
    import timeCarousel from "./timeCarousel";
    import ButtonBottom from "../buttonBottom";

    export default {
        name: "TimeFilter",
        components: {
            timeCarousel,
            ButtonBottom
        }
    }
</script>

<style scoped>
    .btn-margin {
        margin: auto;
        margin-top: 70px;
        margin-bottom: 20px;
    }
</style>
