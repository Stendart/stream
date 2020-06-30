<template>
    <div>
        <img src="../../assets/flat/flat.png" alt="" :style="{width: width, height: height }">
    </div>
</template>

<script>
    export default {
        name: "flat",
        props: {
            width: String,
            height: String
        }
    }
</script>

<style scoped>

</style>
