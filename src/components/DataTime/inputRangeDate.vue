<template>
    <div>
        <div class="prise"> {{ title }}</div>
        <vue-range-slider
                v-model="value"
                :slider-style="{ backgroundColor: '#000'}"
                :process-style="{ backgroundColor: '#000'}"
                :tooltip="false"
                :dot-size="20"
        ></vue-range-slider>
    </div>
</template>

<script>
    import 'vue-range-component/dist/vue-range-slider.css'
    import '../roomFilters/inputRange.css'

    import VueRangeSlider from '../roomFilters/inputRange'

    export default {
        name: "inputRangeDate",
        data() {
            return {
                value: 0
            }
        },
        props: {
            title: String
        },
        created() {
            this.min = 0
            this.max = 15
            this.enableCross = false


        },
        components: {
            VueRangeSlider
        }
    }
</script>

<style scoped>

</style>
