import DefaultLayout from '~/layouts/Default.vue'
import VueStorage from 'vuestorage'
import KonamiCode from 'vue-konami-code'
import VueRouter from 'vue-router'

require('~/css/global.css')

export default function(Vue, { router }) {

	Vue.component('Layout', DefaultLayout)
	
	Vue.use(VueRouter)
	Vue.use(VueStorage)

	// Non SSR Packages
	if(process.isClient) {

		const DrawerLayout = require('vue-drawer-layout').default;
		Vue.use(DrawerLayout);
		
	}

	// if(process.isClient) {

	// 	const vueCustomScrollbar = require('vue-custom-scrollbar').default;
	// 	Vue.use(vueCustomScrollbar);

	// }

	if(process.isClient) {
		const confetti = require('vue-confetti').default;
		const VueExpand = require('vue-expand').default;

		Vue.use(confetti);
		Vue.use(VueExpand);

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
