<template>

    <transition name="fade">
    <div class="canvas" >

        <flatInfo v-if="getIsShowFlat" class="flatInfo"></flatInfo>
        <div class="line"></div>

        <!--<flatImg v-if="getIsShowFlat"></flatImg>-->
        <FilterRoom v-if="!getIsShowFlat"></FilterRoom>
        <verticalSlider v-if="isShowRensa"></verticalSlider>

        <!--<ButtonBottom class="btn-margin"></ButtonBottom>-->
    </div>
    </transition>
</template>

<script>
    import FilterRoom from './roomFilters/FilterRoom.vue'
    import ButtonBottom from './buttonBottom.vue'
    import flatInfo from './flatInfo/flatInfo.vue'
    import flatImg from './flatInfo/flatImg.vue'
    import verticalSlider from './roomFilters/verticalSlider'

    export default {
        name: "roomMenu",

        data () {
            return {
                //isShowRensa: false
            }
        },
        methods: {
            showArea () {
                //this.isShowRensa = !this.isShowRensa;
            },

            hideCanvasMenu () {
                this.$router.push("/")
                let isVisible = this.$store.getters.getVisible;
                this.$store.commit("updateIsVisible", !isVisible)
            }
        },
        components: {
            FilterRoom,
            ButtonBottom,
            flatInfo,
            flatImg,
            verticalSlider
        },

        computed: {
            getVisible () {
                return this.$store.getters.getVisible;
            },

            getIsShowFlat () {
                return this.$store.getters.getIsShowFlat;
            },

            isShowRensa () {
                return this.$store.getters.getIsShowRensa;
            },
        }
    }
</script>

<style scoped>
    .canvas {
        width: 360px;

        border-radius: 30px 30px 0 0;
        background-color: #fff;
        /*height: 200px;*/
        display: flex;
        flex-direction: column;
        align-items: center;

        transition: all 1.1s;
    }
.ca {
    height: 1000px;
}
    .canvas .flatInfo {
        width: 90%;
    }

    .fade-enter-active, .fade-leave-active {
        transition: all 1.1s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        height: 100%;
    }

    .headMenu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 95%;
    }

    .swipeLine {
        width: 53px;
        height: 0.1px;
        border: solid 1px #d0d0d0;
        cursor: pointer
    }

    .line {
        width: 100%;
        height: .1px;
        border: solid 1px #e5e5ea
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

    .btn-margin {
        margin-top: 25px;
        margin-bottom: 20px;
    }

    .anim {
        transition-property: transform;
        transition-duration: 1.1s;
    }
    .hide{
        transform: translateY(100%);
    }
</style>
