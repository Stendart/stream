<template>
    <div >
        <span> Status </span>
        <div class="ststusFilter mt">
            <statusElement bd-col="#70b846" text="Till salu"></statusElement>
            <statusElement bd-col="#ff9500" text="Bokad"></statusElement>
            <statusElement bd-col="#0519df" text="Reserverad"></statusElement>
            <statusElement bd-col="#ff3b30" text="Såld"></statusElement>
        </div>



    </div>
</template>

<script>
    import statusElement from "./statusElement";
    export default {
        name: "statusFilter",
        components: {
            statusElement
        }
    }
</script>

<style scoped>
    .ststusFilter {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }

    .mt {
        margin-top: 10px;
    }
</style>
