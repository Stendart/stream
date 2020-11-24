import Vue from "vue"
import Vuex from "vuex"
import boolData from "./modules/boolData"
import verticalSlierData from "./modules/verticalSlierData"
import dataFilter from "./modules/dataFilter";
import timeFilter from "./modules/timeFilter";

Vue.use(Vuex)

export default new Vuex.Store({

    modules: {
        boolData,
        verticalSlierData,
        dataFilter,
        timeFilter
    }
})
