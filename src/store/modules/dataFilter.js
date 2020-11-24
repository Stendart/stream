export default {
    actions: {},
    mutations: {
        updateSelectedDate(state, val) {
            state.selectedDate = val;
        },
        updateSelectedMounth(state, val) {
            state.selectedMounth = val;
        }
    },
    state: {
        selectedDate: 0,
        selectedMounth: 0,
    },
    getters: {
        getSelectedDate(state) {
            return state.selectedDate
        },
        getSelectedMounth(state) {
            return state.selectedMounth
        }
    },
}
