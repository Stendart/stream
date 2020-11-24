<template>
    <div>
        <div class="mainMenu" :class="{opened: open}">
            <div class="leftMenuPart">
                <div class="button" @click=""><img src="../assets/MainMenu/marker.png" alt=""></div>
                <div class="button" @click="openCanvasMenu"><img src="../assets/Filter-icon.png" alt=""></div>
            </div>
            <div class="rightMenuPart">
                <div class="button"><img src="../assets/Sun.png" alt=""></div>
                <div class="button" @click="openSearch"><img src="../assets/Search-H-M.png" alt=""></div>
            </div>
            <!--  primary button -->
            <div class="openMenuButton" @click="openMenu">
                <span class="openMenuButtonIcon"></span>
            </div>
        </div>

        <div class="button reloadBtn">
            <img src="../assets/MainMenu/reloadArr.png" alt="" >
        </div>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        data () {
            return {
                open: false
            }
        },
        methods: {
            openMenu () {
                this.open = !this.open;
            },

            openCanvasMenu () {
                this.$router.push("/menu/roomMenu")
               /* let isVisible = this.$store.getters.getVisible;
                this.$store.commit("updateIsVisible", !isVisible)*/
            },

            openSearch () {
                this.$router.push("/listCard")

                //let isOpenSearch = this.$store.getters.getIsListCardSearch;
                this.$store.commit("updateIsListCardSearch", true)
            }
        }
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    .mainMenu {
        min-height: 62px;

        position: absolute;
        bottom: 10%;
    }

    .opened {
        z-index: 2;
    }

    .reloadBtn {
        background: #fff;
        border-radius: 50%;

        position: absolute;
        bottom: 11%;
        left: 60%;
        box-shadow: 0px 4px 16px rgba(0,0,0,0.2);
        z-index: 0;
    }

    .openMenuButton {
        width: 62px;
        height: 62px;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        left: calc(50% - 25px);
        box-shadow: 0px 4px 16px rgba(0,0,0,0.2);
    }

    .openMenuButtonIcon {
        color: #1d2127;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        font-size: 20px;
        font-weight: bold;
        user-select: none;
        overflow: hidden;
    }

    .openMenuButtonIcon:hover {
        color: #fff;
        background-color: #0002;
        border-radius: 50%;
    }

    @keyframes rollMenu {
        from {
            transform: rotate(-90deg);
        }

        to {
            transform: rotate(0deg);
        }
    }

    @keyframes rollCross {
        from {
            transform: rotate(-90deg);
        }

        to {
            transform: rotate(0deg);
        }
    }

    .mainMenu:not(.opened) .openMenuButtonIcon::after {
        content: url("../assets/Squares-icon.png");
        padding-top: 6px;
        /*animation: rollMenu 300ms linear both;*/
    }

    .mainMenu.opened .openMenuButtonIcon::after {
        content: "╳";
        animation: rollCross 300ms linear both;
    }


    /* menu content */

    .leftMenuPart,
    .rightMenuPart {
        position: absolute;
        width: fit-content;
        height: 44px;
        /*bottom: 10px;*/
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        background: #fff;
        transition: width 1s;
        overflow: hidden;
    }

    .leftMenuPart {
        right: calc(50%);
        padding-right: 25px;
        border-radius: 20px 0 0 20px;
    }

    .rightMenuPart {
        left: calc(50%);
        padding-left: 35px;
        border-radius: 0 20px 20px 0;
    }

    .rightMenuPart .button {
        margin-right: 5px;
    }

    .leftMenuPart .button {
        margin-left: 5px;
    }

    .mainMenu:not(.opened) .button {
        /*display: none;*/
    }

    .mainMenu:not(.opened) .leftMenuPart,
    .mainMenu:not(.opened) .rightMenuPart {
        max-width: fit-content;
        width: 0;
    }

    .mainMenu.opened .leftMenuPart,
    .mainMenu.opened .rightMenuPart {
        width: 100px;
        max-width: fit-content;
    }

    .button {
        width: 44px;
        height: 44px;
        /*margin-top: 5px;*/
        color: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
        outline: none;
    }

    .button:hover {
        color: #fff;
        background-color: #0006;
        border-radius: 50%;
    }

</style>
