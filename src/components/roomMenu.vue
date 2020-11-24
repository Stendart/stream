<template>
        <div class="canvas " >
            <flatInfo v-if="getIsShowFlat" class="flatInfo"></flatInfo>
            <div class="line"></div>
            <!--:class="{canvUp: isShowRensa, canvDown: !isShowRensa}"-->
            <!--<flatImg v-if="getIsShowFlat"></flatImg>-->
            <FilterRoom v-if="!getIsShowFlat"></FilterRoom>
        </div>

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
            //ButtonBottom,
            flatInfo,
            //flatImg,
            //verticalSlider
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
        display: flex;
        flex-direction: column;
        align-items: center;

        transition: all 1.1s;
    }

    .canvas .flatInfo {
        width: 90%;
    }


    .line {
        width: 99.5%;
        height: .1px;
        border: solid 1px #e5e5ea
    }

</style>
