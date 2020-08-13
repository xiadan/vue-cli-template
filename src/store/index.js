import Vue from 'vue'
import Vuex from 'vuex'
import TestModule from '~s/modules/TestModule'

Vue.use(Vuex)

export default new Vuex.Store({ 
	modules: {
		TestModule
	},
	state: {},
	mutations: {},
	getters: {}
})
