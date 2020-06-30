<template>
    <div>
        <div class="prise">Pris</div>
        <vue-range-slider
                v-model="value"
                :min="min"
                :max="max"
                :enable-cross="enableCross"
                :bg-style="{ }"
                :slider-style="{ backgroundColor: '#000'}"
                :process-style="{ backgroundColor: '#000'}"
                :tooltip-style="tooltipStyle"
                :tooltip-dir="'bottom'"
                :tooltip-merge="false"
                :formatter="formatter"
                :dot-size="20"
        ></vue-range-slider>
    </div>
</template>

<script>
    import 'vue-range-component/dist/vue-range-slider.css'
    import './inputRange.css'
    import VueRangeSlider from 'vue-range-component'

    export default {
        name: "inputRange",
        data() {
            return {
                value: [0,15]
            }
        },
        created() {
            this.min = 0
            this.max = 15
            this.enableCross = false
            this.formatter = value => `${value} milj`
            this.tooltipStyle = {
                backgroundColor:'rgba(255, 255, 128, 0)',
                color: '#000',
                borderColor: 'rgba(255, 255, 128, 0)'
            }
        },
        components: {
            VueRangeSlider
        }
    }
</script>

<style scoped>
    .prise {
        margin-bottom: 10px;
    }
</style>
