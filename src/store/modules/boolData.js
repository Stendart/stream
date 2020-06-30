export default {
    actions: {},
    mutations: {
        updateIsShowRensa(state, val) {
            state.isShowRensa = val;
        },
        updateIsVisible(state, val) {
            state.isVisible = val;
        },

        updateIsShowFlat(state, val) {
            state.isShowFlat = val;
        },

        updateisOpenSearch(state, val) {
            state.isOpenSearch = val;
        },

        updateIsListCardSearch(state, val) {
            state.isListCardSearch = val;
        }
    },
    state: {
        isShowRensa: false,
        isVisible: false,
        isShowFlat: false,
        isOpenSearch: false,
        isListCardSearch: false
    },
    getters: {
        getIsShowRensa(state) {
            return state.isShowRensa
        },

        getVisible(state) {
            return state.isVisible
        },

        getIsShowFlat(state) {
            return state.isShowFlat
        },

        getIsOpenSearch(state) {
            return state.isOpenSearch
        },

        getIsListCardSearch(state) {
            return state.isListCardSearch
        }
    },
}
