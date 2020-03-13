import DefaultLayout from '~/layouts/Default.vue'
import VueStorage from 'vuestorage'
import KonamiCode from 'vue-konami-code'
import VueRouter from 'vue-router'

require('~/css/global.css')

export default function(Vue, { isClient, router }) {

	Vue.component('Layout', DefaultLayout)
	
	Vue.use(VueRouter)
	Vue.use(VueStorage)

	// Non SSR Packages
	if(process.isClient) {

		const DrawerLayout = require('vue-drawer-layout').default
		const confetti = require('vue-confetti').default
		const VueExpand = require('vue-expand').default;

		Vue.use(DrawerLayout)
		Vue.use(confetti)
		Vue.use(VueExpand)

		Vue.use(KonamiCode, {callback: function () {
			router.push({ path: '/easteregg' })
		}})

	}


	// Add v-focus directive
	Vue.directive('focus', {
		inserted: function (el) {
			el.focus()
		}
	})

}
