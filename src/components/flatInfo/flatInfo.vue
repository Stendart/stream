<template>
    <div>
        <div class="nr"><span>Nr 61402</span> <span class="till">Till salu</span></div>
        <div class="rok-kvm">2 rok, 55 kvm</div>
        <div class="prise"> <span >Pris 5 395 000 kr </span> <span class="avgift">Avgift 3 357 kr</span></div>
    </div>
</template>

<script>
    export default {
        name: "flatInfo"
    }
</script>

<style scoped>
    .nr {
        color: #8e8e93;
        font-family: "SFOldRepublic-Bold";
        font-size: 13px;
        font-weight: 400;
        line-height: 17px;
    }
    .rok-kvm {
        color: #222222;
        font-family: "SFOldRepublic-Bold";
        font-size: 24px;
        font-weight: 400;
        line-height: 32px;
    }

    .prise {
        color: #707070;
        font-family: SFOldRepublic;
        font-size: 13px;
        font-weight: 400;
        line-height: 17px;
    }

    .avgift {
        margin-left: 32px;
    }

    .till {
        margin-left: 70%;
    }
</style>
