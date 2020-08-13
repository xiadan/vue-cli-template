import { version } from '../../../package.json'

let TestModule = {
	// namespaced: true,
	state: {
		testVal: false,
	},
	getters: {
		getTestVal (state) {
			return state.testVal
		},
		getLangLabel: (state) => (val) => {
			return this.$t(val)
		},
		getVersion () {
			return version
		}
	},
	mutations: {
		SET_TEST_STATE (state, val) {
			state.testVal = val
		},
	},
	actions: {
		setTestVal ({ commit, state }, val) {
			commit('SET_TEST_STATE', val)
		},
	}
}

export default TestModule
