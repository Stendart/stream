<template>
    <div class="filter">
        <div>Rum</div>
        <div class="roomsCircle">
            <countRoomCircle v-for="n in 5" :count-room = "n"></countRoomCircle>
        </div>
        <br>
        <inputRange></inputRange>
        <br>
        <inputArea class="inpAr" v-if="isShowRensa"></inputArea>
    </div>
</template>

<script>
    import countRoomCircle from "./countRoomCircle";
    import inputRange from "./inputRange";
    import inputArea from "./inputArea";



    export default {
        name: "FilterRoom",
        /*props: {
            isShowRensa: Boolean
        },*/
        components: {
            countRoomCircle,
            inputRange,
            inputArea
        },
        computed: {
            isShowRensa () {
                return this.$store.getters.getIsShowRensa;
            },
        }
    }
</script>

<style scoped>
    .filter {
        width: 90%;
        margin-top: 10px;
    }

    .roomsCircle {
        display: flex;
        justify-content: space-between;
    }

    #roomRange {
        width: 80%;
    }

    .inpAr {
        margin-top: 30px;
    }

</style>
