<template>
    <div >
        <dataCarousel></dataCarousel>

        <ButtonBottom class="btn-margin"
                      :btn_text="`Klar`"></ButtonBottom>
    </div>
</template>

<script>
    import dataCarousel from "./dataCarousel";
    import ButtonBottom from "../buttonBottom";
    export default {
        name: "DataFilter",
        data() {
            return {

            }
        },
        methods: {


        },

        components: {
            dataCarousel,
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
