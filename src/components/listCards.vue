<template>
    <div class="canvasList" :class="{fullHeidht: getIsListCardSearch, canvas: !getIsListCardSearch}">
        <br>
        <div class="placeholder">
            <!-- full screen menu -->
            <headerMenu v-if="getIsListCardSearch"
                    :btnMethod="returnToMain"
                    :is-show-list-flat="false"
                    :btnIcon="'X'"
                    :showSwipeLine="false"
                    >
            </headerMenu>
            <headerMenu v-else
                    :btnMethod="returnToRoomMenu"
                    :is-show-list-flat="false"
                    :btnIcon="'←'"
                    :showSwipeLine="true"
                    >
            </headerMenu>

            <div class="search" v-if="getIsListCardSearch">
                <input type="search">
                <span class="icon"><img src="../assets/Search-H-M.png" alt=""></span>
                <div class="searchResultText"><span>Sökresultat </span> <span>(36/100)</span></div>
            </div>

            <flatCard class="flats"></flatCard>
            <flatCard class="flats"></flatCard>
            <flatCard class="flats"></flatCard>
        </div>

    </div>

</template>

<script>
    import flatCard from "./flatInfo/flatCard";
    import swipeLine from "./swipeLine";
    import headerMenu from "./headerMenu"
    export default {
        name: "listCards",
        components: {
            flatCard,
            swipeLine,
            headerMenu
        },
        methods: {
            returnToMain () {
                this.$router.push("/")
            },

            returnToRoomMenu () {
                this.$router.push("/menu/roomMenu")
            },

            hideCanvasMenu () {
                this.$router.push("/");
                let isVisible = this.$store.getters.getVisible;
                this.$store.commit("updateIsVisible", !isVisible)
            },
        },
        computed: {
            getIsListCardSearch () {
                return this.$store.getters.getIsListCardSearch;
            }
        },
    }
</script>

<style scoped>

    .fullHeidht {
        height: 100%;
        width: 360px;
        background-color: #fff;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .canvasList {
        position: absolute;
        bottom: 0;
    }

    .placeholder {
        margin-left: 10px;
        width: 95%;
    }

    .searchResultText {
        margin-top: 20px;
    }

    .search {
        margin-top: 10px;
        position: relative;
    }

    .icon {
        position: absolute;
        top: 12px;
        right: 10px;
    }
    .closeIcn {
        cursor: pointer
    }

    input[type=search] {
        width: 100%;
        height: 48px;
        border-radius: 4px;
        background: #f5f5f7;

        border: none;
    }

    .flats {
        margin-top: 10px;
    }

</style>
