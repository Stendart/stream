<template>
    <div class="mFrame">
        <button @click="showFlat">Show flat</button>
        <button @click="showData">Show data</button>
        <!--<button @click="showCarousel">Show carousel</button>-->

        <router-view />
    </div>
</template>

<script>
    export default {
        name: "mountFrame",
        methods: {
            showFlat() {
                this.$router.push("/menu/showFlat")
                /*let isShowFlat = this.$store.getters.getIsShowFlat;
                console.log('isShowFlat ', isShowFlat)
                this.$store.commit("updateIsShowFlat", !isShowFlat)*/
            },

            showCarousel() {
                this.$router.push("/menu/verticalSlider")
            },

            showData() {
                this.$router.push("/menu/showDataTime")
            }
        },
        computed: {
            getVisible () {
                return this.$store.getters.getVisible;
            },

            getIsOpenSearch () {
                return this.$store.getters.getIsOpenSearch;
            }
        }
    }
</script>

<style scoped>
    .mFrame {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
