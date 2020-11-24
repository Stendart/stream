<template>
    <div class="card">
        <div class="vertLine"></div>
        <div  class="img img-cont">
            <flatImg></flatImg>
        </div>
        <div class="cardText">
            <div class="prise"><span>Nr 61402</span> <span class="till">Till salu</span></div>
            <div class="rok-kvm">2 rok, 55 kvm</div>
            <div class="prise"> <span >Pris 5 395 000 kr </span> <span class="avgift">Avgift 3 357 kr</span></div>
        </div>
        <div class="arrow-2">
            <div class="arrow-2-top"></div>
            <div class="arrow-2-bottom"></div>
        </div>
    </div>
</template>

<script>
    import flatInfo from './flatInfo.vue'
    import flatImg from './flatImg.vue'

    export default {
        name: "flatCard",
        data () {
            return {
                isShow: false
            }
        },
        methods: {
            showArea () {
                this.isShow = !this.isShow;
            }
        },
        components: {
            flatInfo,
            flatImg
        },

        computed: {
            getVisible () {
                return this.$store.getters.getVisible;
            },

            getIsShowFlat () {
                return this.$store.getters.getIsShowFlat;
            }
        }
    }
</script>

<style scoped>
    .card {
        display: flex;
        height: 85px;
        align-items: center;
    }

    .vertLine {
        width: 2px;
        height: 83px;
        border: 2px solid #a74e4e;
        background-color: #a74e4e;
    }

    .img {
        margin-top: 7px;
        height: 60px;
    }

    .img-cont {
        width:83px;
        height:60px;
    }

    .prise {
        color: #222222;
        font-family: SFOldRepublic;
        font-size: 11px;
        font-weight: 400;
        line-height: 15px;
    }

    .rok-kvm {
        color: #222222;
        font-family: "SFOldRepublic-Bold";
        font-size: 13px;
        font-weight: 400;
        line-height: 17px;
    }

    .cardText {
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        margin-top: 13px;
        height: 50px;
    }

    .till {
        margin-left: 50%;
    }

    .avgift {
        margin-left: 32px;
    }


    .arrow-2 {
        cursor: pointer;
        height: 20px;
        width: 15px;
        position: relative;
        margin-top: -15px;
    }
    .arrow-2-top,
    .arrow-2-bottom {
        background: #337AB7;
        height: 3px;
        /*left: -6px;*/
        position: absolute;
        top: 6px;
        width: 10px;
    }
    .arrow-2-top {
        /*top: 20px;*/
    }
    .arrow-2-top {
        transform: rotate(45deg);
        transform-origin: bottom right;
    }
    .arrow-2-bottom {
        transform: rotate(-45deg);
        transform-origin: top right;
    }
    .arrow-2-top::after,
    .arrow-2-bottom::after {
        background: #000;
        content: '';
        height: 100%;
        position: absolute;
        top: 0;
        transition: all 0.15s;
    }
    .arrow-2-top::after {
        left: 100%;
        right: 0;
        transition-delay: 0s;
    }
    .arrow-2-bottom::after {
        left: 0;
        right: 100%;
        transition-delay: 0.15s;
    }

</style>
