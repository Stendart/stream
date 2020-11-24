<template>
    <div class="circle"> {{ countRoom }}</div>
</template>

<script>
    export default {
        name: "countRoomCircle",
        props: {
            countRoom: Number
        }
    }
</script>

<style scoped>
    .circle {
        border-radius: 50%;
        width: 56px;
        height: 56px;
        border: solid #c7c7cc;

        text-align: center;
        line-height: 56px;

    }
</style>
