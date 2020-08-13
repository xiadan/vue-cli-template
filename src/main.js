import Vue from 'vue'
import App from './App.vue'
import store from '~s'
import router from '~r'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

Vue.config.productionTip = false

Vue.use(ViewUI)

new Vue({
	render: h => h(App),
	store,
	router
}).$mount('#app')
