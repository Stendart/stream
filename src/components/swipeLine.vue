<template>
    <div>

        <v-touch @swipeup="showArea" @swipedown="hideArea">
            <div class="button swipeLine" @click="showArea"></div>
        </v-touch>

    </div>

</template>

<script>


    export default {
        name: "swipeLine",

        methods: {
            showArea() {
                //this.isShowRensa = !this.isShowRensa;
                //let isShowRensa = this.$store.getters.getIsShowRensa;
                //console.log(isShowRensa)
                this.$store.commit("updateIsShowRensa", true)

            },
            hideArea() {
                this.$store.commit("updateIsShowRensa", false)
            },
        },
        components: {

        }
    }
</script>

<style scoped>
    .swipeLine {
        width: 53px;
        height: 0.1px;
        border: solid 1px #d0d0d0;
        cursor: pointer
    }

    .button {
        color: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
        outline: none;
        cursor: pointer;
    }
</style>
