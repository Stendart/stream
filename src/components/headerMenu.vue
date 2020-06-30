<template>
    <div class="headMenu">
        <div class="button buttonSize" @click="btnMethod">{{ btnIcon }}</div>
        <swipeLine v-if="showSwipeLine"></swipeLine>
        <div class="button buttonSize" >
            <!-- event listener should be use at img, but didnt at div-->
            <img src="../assets/List-icon.png" alt="" v-if="isShowListFlat" @click="showRoomList">
        </div>
    </div>
</template>

<script>
    import swipeLine from "./swipeLine";
    export default {
        name: "headerMenu",
        components: {
            swipeLine
        },
        methods: {
            hideCanvasMenu () {
                this.$router.push("/");
                let isVisible = this.$store.getters.getVisible;
                this.$store.commit("updateIsVisible", !isVisible)
            },

            showRoomList () {
                this.$router.push("/listCard");
                this.$store.commit("updateIsListCardSearch", false)
            }
        },
        props: {
            btnMethod: {
                type: Function,
                default: ()=> {
                    console.log(`function is not transferred`)
                },

            },
            isShowListFlat: {
                type: Boolean,
                default: true
            },
            btnIcon: {
                type: String,
                default: `╳`
            },
            showSwipeLine: {
                type:Boolean,
                default: true
            }
        },
        computed: {
            getIsShowFlat () {
                return this.$store.getters.getIsShowFlat;
            }
        },

    }
</script>

<style scoped>
    .headMenu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 95%;
    }

    .button {
        /*margin-top: 5px;*/
        color: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
        outline: none;
        cursor: pointer;
    }

    .buttonSize {
        width: 44px;
        height: 44px;
    }

</style>
