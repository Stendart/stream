import Vue from "vue"
import Vuex from "vuex"
import boolData from "./modules/boolData"

Vue.use(Vuex)

export default new Vuex.Store({

    modules: {
        boolData
    }
})
