<template>
    <div class="filter">
        <div>Rum</div>
        <div class="roomsCircle">
            <countRoomCircle v-for="n in 5" :count-room = "n"></countRoomCircle>
        </div>

        <inputRange class="mt" title="Prise"></inputRange>
        <br>
        <transition name="fade1">
            <div v-if="isShowRensa" class="canvUp">
                <inputArea class="inpAr"></inputArea>
                <verticalSlider></verticalSlider>
                <statusFilter class="statusFilter"></statusFilter>
                <inputRange class="mt" title="Våning"></inputRange>
            </div>
        </transition>

        <ButtonBottom class="btn-margin"
                      :btn_text="`Visa lägenheter`"></ButtonBottom>
    </div>
</template>

<script>
    import countRoomCircle from "./countRoomCircle";
    import inputRange from "./inputRange.vue";
    import inputArea from "./inputArea";
    import verticalSlider from './verticalSlider'
    import statusFilter from "./statusFilter";
    import ButtonBottom from "../buttonBottom";

    export default {
        name: "FilterRoom",
        /*props: {
            isShowRensa: Boolean
        },*/
        components: {
            countRoomCircle,
            inputRange,
            inputArea,
            verticalSlider,
            statusFilter,
            ButtonBottom
        },
        computed: {
            isShowRensa () {
                return this.$store.getters.getIsShowRensa;
            },
        }
    }
</script>

<style scoped>
    .btn-margin {
        margin: auto;
        margin-top: 25px;
        margin-bottom: 20px;

    }

    .filter {
        width: 95%;
        margin-top: 10px;
    }

    .roomsCircle {
        display: flex;
        justify-content: space-between;
    }

    #roomRange {
        width: 80%;
    }

    .mt {
        margin-top: 15px;
    }

    .inpAr {
        margin-top: 30px;
    }



    .canvUp {
        max-height: 100vh;
    }

    .statusFilter {
        margin-top: 20px;
    }

    .fade1-enter-active, .fade1-leave-active {
        transition: max-height .1s;
    }
    .fade1-enter, .fade1-leave-to /* .fade1-leave-active до версии 2.1.8 */ {
        max-height: 0;
    }
</style>
