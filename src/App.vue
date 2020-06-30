<template>
  <div id="app" >

      <!--<Menu class="menu"></Menu>-->
      <button @click="showFlat">Show flat</button>
      <!--<button @click="showCarousel">Show carousel</button>-->

    <router-view />


  </div>
</template>

<script>
import Menu from './components/Menu.vue'



export default {
  name: 'App',
  components: {
    Menu,

  },
    methods: {
        showFlat() {
            this.$router.push("/menu/showFlat")
            /*let isShowFlat = this.$store.getters.getIsShowFlat;
            console.log('isShowFlat ', isShowFlat)
            this.$store.commit("updateIsShowFlat", !isShowFlat)*/
        },

        showCarousel() {
            this.$router.push("/menu/verticalSlider")
        }
    },
    computed: {
        getVisible () {
            return this.$store.getters.getVisible;
        },

        getIsOpenSearch () {
            return this.$store.getters.getIsOpenSearch;
        }
    }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}


#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;
    color: #2c3e50;
    margin-top: 60px;*/

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: antiquewhite;
    background-image: url("assets/bg.png");
    background-repeat: no-repeat;
    /*height: 100vh;*/
    min-height: 100vh;
    /* mobile viewport bug fix */
    min-height: -webkit-fill-available;

    position: relative;
    overflow-y: hidden;


}
/*.cl {
    height: 100%;
    width: 100%;
    padding-left: 100px;

}*/
.menu {
    position: absolute;
    bottom: 10%;
}

.canvas {
    width: 360px;

    border-radius: 30px 30px 0 0;
    background-color: #fff;

    display: flex;
    flex-direction: column;
    align-items: center;


}



input, input:before, input:after {
    -webkit-user-select: initial;
    -khtml-user-select: initial;
    -moz-user-select: initial;
    -ms-user-select: initial;
    user-select: initial;
}
</style>
