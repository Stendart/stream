export default {
    actions: {},
    mutations: {
        updateSlidesMinVal(state, val) {
            state.slidesMinVal = val;
        },
        updateSlidesMaxVal(state, val) {
            state.slidesMaxVal = val;
        }
    },
    state: {
        slidesMinVal: 0,
        slidesMaxVal: 0,
    },
    getters: {
        getSlidesMinVal(state) {
            return state.slidesMinVal
        },
        getSlidesMaxVal(state) {
            return state.slidesMaxVal
        }
    },
}
