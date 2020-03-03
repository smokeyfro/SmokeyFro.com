import DefaultLayout from '~/layouts/Default.vue'
import VueStorage from 'vuestorage'
import KonamiCode from 'vue-konami-code'
import VueRouter from 'vue-router'

require('~/css/global.css')

export default function(Vue, { isClient, router }) {

	Vue.component('Layout', DefaultLayout)
	Vue.use(VueRouter)

	// Confetti
	if(process.isClient) {
		const confetti = require('vue-confetti').default
		Vue.use(confetti)
	}

	// localStorage
	Vue.use(VueStorage)

	// Konami
	if(process.isClient) {
		Vue.use(KonamiCode, {callback: function () {
			router.push({ path: '/easteregg' })
		}})
	}

	// Lightbox
	if (process.isClient) {
		const VueSilentbox = require('vue-silentbox').default;
		Vue.use(VueSilentbox);
	}

	// Register a global custom directive called v-focus
	Vue.directive('focus', {
		inserted: function (el) {
			el.focus()
		}
	})

}
