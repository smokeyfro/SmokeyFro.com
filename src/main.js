import DefaultLayout from '~/layouts/Default.vue'
import VueStorage from 'vuestorage'


export default function(Vue, { isClient }) {

	Vue.component('Layout', DefaultLayout)

	// localStorage
	Vue.use(VueStorage)

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
