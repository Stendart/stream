<template>
    <div class="flatImg">
        <img src="../../assets/flat/flat.png" alt=""
             :style="{width: width, height: height }">
        <!--<ButtonBottom class="btn-margin"
                      :btn_text="`Visa lägenheter`"></ButtonBottom>-->
    </div>
</template>

<script>
    import ButtonBottom from "../buttonBottom";

    export default {
        name: "flat",
        props: {
            width: String,
            height: String
        },
        components: {
            ButtonBottom
        },
    }
</script>

<style scoped>
    .flatImg {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center
    }

    .flatImg img {
        width: 100%;
        height: 100%;
    }
    .btn-margin {
        margin: auto;
        margin-top: 25px;
        margin-bottom: 20px;

    }
</style>
