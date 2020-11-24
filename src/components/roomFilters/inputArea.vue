<template>
    <div>
        <div>Area</div>
        <input type="text"
               class="inputArea"
               :placeholder="getSlidesMinVal + ` - ` + getSlidesMaxVal">

    </div>
</template>

<script>
    export default {
        name: "inputArea",
        computed: {
            getSlidesMinVal () {
                console.log(this.$store.getters.getSlidesMinVal)
                return this.$store.getters.getSlidesMinVal;
            },

            getSlidesMaxVal () {
                console.log(this.$store.getters.getSlidesMaxVal)
                return this.$store.getters.getSlidesMaxVal;
            }
        }
    }
</script>

<style scoped>
    .inputArea {
        width: 100%;
        height: 48px;
        border-radius: 4px;
        background: #f5f5f7;

        border: none;
        margin-top: 10px;
    }


</style>
