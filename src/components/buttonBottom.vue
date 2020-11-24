<template>
    <div class="contBtn">
        <div class="btn visa" :class="{smalBtn: isVisin}" @click="isVisin=!isVisin">
            <img src="../assets/Button_bottom/Search-H-M-white.png" alt="">
            <span> {{ btn_text }}</span>
        </div>
        <div class="btn hideOnVisa">
            <span >Rensa</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "buttonBottom",
        data () {
            return {
                isVisin: false
            }
        },
        props: {
            btn_text: String,
            clickFn: {
                type: Function,
                default: () => {
                    this.isVisin=!this.isVisin
                }
            }
        }
    }
</script>

<style scoped>
    .contBtn {
        position: relative;
        width: 289px;
        height: 44px;
    }

    .btn {
        height: 44px;
        border-radius: 22px;

        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
        outline: none;

        box-shadow: 0px 2px 16px rgba(98,107,128,0.2);
    }
    .visa {
        position: absolute;
        width: 289px;
        background: #222222;
        color: #fff;
        z-index: 2;
    }
    .visa span {
        margin-left: 5%;
    }

    .smalBtn {
        width: 195px;
        margin-left: 94px;
    }

    .hideOnVisa {
        position: absolute;
        top: 0;
        z-index: 1;
        width: 125px;
        background-color: #fff;
        border-color: #fff;
    }
</style>
