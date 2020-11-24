export default {
    actions: {},
    mutations: {
        updateSelectedHour(state, val) {
            state.selectedHour = val;
        },
        updateSelectedMinutes(state, val) {
            state.selectedMinutes = val;
        }
    },
    state: {
        selectedHour: 0,
        selectedMinutes: 0,
    },
    getters: {
        getSelectedHour(state) {
            return state.selectedHour
        },
        getSelectedMinutes(state) {
            return state.selectedMinutes
        }
    },
}
