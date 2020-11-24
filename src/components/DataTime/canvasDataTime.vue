<template>
    <div class="canvasMenu canvas" >

        <headerMenu :btnMethod="backToDataTimeFilter"></headerMenu>
        <router-view />
    </div>
</template>

<script>
    import ButtonBottom from "../buttonBottom";
    import swipeLine from "../swipeLine";
    import headerMenu from "../headerMenu";

    export default {
        name: "canvasDataTime",
        components: {
            ButtonBottom,
            swipeLine,
            headerMenu
        },

        methods: {
            backToDataTimeFilter() {
                this.$router.push("/menu/showDataTime");
            }
        }
    }
</script>

<style scoped>
    .canvasMenu {
        position: absolute;
        bottom: 0;
        max-height: 100%;

        overflow-y: auto;
        overflow-x: auto;
    }

</style>
