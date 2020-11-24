<template>
    <div class="flatMenu">
        <div class="card">
            <div class="vertLine"></div>
            <flatInfo class="flatInf"></flatInfo>
        </div>

        <flatImg class="flatImg-cont"></flatImg>
        <ButtonBottom class="btn-margin"
                      :btn_text="`Titta inuti lägenheten`"></ButtonBottom>
    </div>
</template>

<script>
    import flatInfo from "./flatInfo";
    import flatImg from "./flatImg";
    import ButtonBottom from "../buttonBottom";

    export default {
        name: "flatMenu",
        components: {
            flatInfo,
            flatImg,
            ButtonBottom
        },
    }
</script>

<style scoped>
    .flatMenu {
        width: 95%;
        align-content: center;
    }

    .flatMenu>* {
        margin: 10px auto;
    }
    .vertLine {
        width: 2px;
        height: 83px;
        border: 2px solid #a74e4e;
        background-color: #a74e4e;
    }

    .flatImg-cont {
        height: 60%;
        width: 60%;
    }

    .flatInf {
        width: 100%;
    }
    .card {
        display: flex;
        height: 85px;
        /*align-items: center;*/
    }
</style>
