<template>
    <div class="border mouseTarg" :style="{borderColor: borerColor}"  @click="select">
        <div class="text" :class="{textSelected:isSelect}">
            {{ text }}
        </div>

    </div>
</template>

<script>
    export default {
        name: "statusElement",
        data () {
            return {
                isSelect: false,
                borerDefaultColor: '#8e8e93',
                borerColor: this.borerDefaultColor
            }
        },
        props: {
            bdCol: String,
            text: String
        },

        methods: {
            select() {
                this.isSelect=!this.isSelect
                if(this.isSelect) {
                    this.borerColor = this.bdCol;
                } else this.borerColor = this.borerDefaultColor
            }
        }
    }
</script>

<style scoped>

    .border {
        border-radius: 30px;
        border-width: 1px;
        border-style: solid;
        border-color: #8e8e93;

        width: 83px;
        height: 35px;
        line-height: 16px;
    }

    .mouseTarg {
        cursor: pointer;
    }

    .text {
        /*font-family: "SFOldRepublic-Bold";*/
        font-size: 12px;
        font-weight: 400;
        line-height: 35px;

        text-align: center;
        color: #8e8e93;
    }

    .textSelected {
        color: #000000;
    }
</style>
