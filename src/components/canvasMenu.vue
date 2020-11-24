<template>
    <transition name="fade">
        <div class="canvasMenu canvas" v-if="getVisible" >

            <!--<div class="headMenu">
                <div class="button buttonSize" @click="hideCanvasMenu">╳</div>
                <swipeLine></swipeLine>
                <div class="button buttonSize" >
                    &lt;!&ndash; event listener should be use at img, but didnt at div&ndash;&gt;
                    <img src="../assets/List-icon.png" alt="" v-if="!getIsShowFlat" @click="showRoomList">
                </div>
            </div>-->
            <headerMenu :btnMethod="hideCanvasMenu"></headerMenu>
            <router-view />
            <!--<ButtonBottom class="btn-margin"
            :btn_text="`Visa lägenheter`"></ButtonBottom>-->
        </div>
    </transition>
</template>

<script>



    import ButtonBottom from "./buttonBottom";
    import swipeLine from "./swipeLine";
    import headerMenu from "./headerMenu";

    export default {
        name: "canvasMenu",
        components: {
            ButtonBottom,
            swipeLine,
            headerMenu
        },
        data () {
            return {
                isShowRensa: false
            }
        },
        methods: {
            /*showArea () {
                //this.isShowRensa = !this.isShowRensa;
                let isShowRensa = this.$store.getters.getIsShowRensa;
                console.log(isShowRensa)
                this.$store.commit("updateIsShowRensa", !isShowRensa)
            },*/

            hideHeader(e) {
              console.log(`Ghjdthrf`)
              console.log(e)
                e.passive=true

            },
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
        computed: {
            getVisible () {
                return this.$store.getters.getVisible;
            },
            getIsShowFlat () {
                return this.$store.getters.getIsShowFlat;
            }
        },
        mounted() {
            //let isVisible = this.$store.getters.getVisible;
            this.$store.commit("updateIsVisible", true)
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



    .btn-margin {
        margin-top: 25px;
        margin-bottom: 20px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: transform 1.1s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        transform: translateY(100%);
    }
</style>
