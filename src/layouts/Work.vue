<template>
	<div>
		<div id="app" class="overflow-hidden md:h-screen md:overflow-hidden layout app">
			<header role="banner" class="relative z-50 flex flex-row items-center justify-between sm:h-screen dark:bg-black sm:flex-col">
				<Logo class="text-white sm:mx-auto sm:mt-6 " />
				<NavPrimary />
				<NavMobile />
				<NavTertiary />
			</header>
			<aside role="navigation" class="relative z-40 flex items-center overflow-x-auto md:overflow-hidden dark:bg-gray-900 sm:justify-center" v-if="sidebar">
				<slot name="secondary-nav" />
			</aside>
			<main class="relative z-30 w-full h-screen overflow-hidden overflow-y-scroll">
				<vuescroll>
					<div v-if="top">
						<slot name="top-shelf" />
					</div>
					<div class="px-5 pt-4 md:px-10 lg:px-20 lg:pt-12 md:pt-6">
						<slot />
					</div>
					<div v-if="bottom">
						<slot name="bottom-shelf" />
					</div>					
				</vuescroll>
			</main>
		</div>
	</div>
</template>

<script>
import NavPrimary from "~/components/NavPrimary.vue"
import NavMobile from "~/components/NavMobile.vue"
import NavTertiary from "~/components/NavTertiary.vue"
import Logo from "~/components/Logo.vue"
import { mixin as clickaway } from 'vue-clickaway'
import vuescroll from 'vuescroll/dist/vuescroll-native';

export default {
    mixins: [ clickaway ],
  	props: [
		'sidebar',
		'top',
		'bottom'
	],
	components: {
		NavPrimary,
		NavMobile,
		NavTertiary,
		NavMobile,
		Logo,
		vuescroll
	},
	data() {
		return {
			// settings: {
			// 	maxScrollbarLength: 60
			// },
			randomCss: '',
			randomQuote: '',
			quotes: [
				'Curiosity Killed The Cat',
				'↑↑↓↓←→←→BA'
			],
			css: [
				'color: red; background: #f7f7f7; border: 1px solid #ddd; font-size: medium; padding: 2px 5px; border-radius: 2px; font-family: Georgia',
				'color: green; background: #f7f7f7; border: 1px solid #ddd; font-size: medium; padding: 2px 5px; border-radius: 2px; font-family: Georgia',
				'color: orange; background: #f7f7f7; border: 1px solid #ddd; font-size: medium; padding: 2px 5px; border-radius: 2px; font-family: Georgia',
				'color: blue; background: #f7f7f7; border: 1px solid #ddd; font-size: medium; padding: 2px 5px; border-radius: 2px; font-family: Georgia',
				'color	pink; background: #f7f7f7; border: 1px solid #ddd; font-size: medium; padding: 2px 5px; border-radius: 2px; font-family: Georgia',
				'color: lilac; background: #f7f7f7; border: 1px solid #ddd; font-size: medium; padding: 2px 5px; border-radius: 2px; font-family: Georgia',
				'color: orange; background: #f7f7f7; border: 1px solid #ddd; font-size: medium; padding: 2px 5px; border-radius: 2px; font-family: Georgia',
				'color: turquoise; background: #f7f7f7; border: 1px solid #ddd; font-size: medium; padding: 2px 5px; border-radius: 2px; font-family: Georgia',
				'color: purple; background: #f7f7f7; border: 1px solid #ddd; font-size: medium; padding: 2px 5px; border-radius: 2px; font-family: Georgia'
			]
		}
	},
	mounted() {
		var outputCss = this.randomCss;
		var outputQuote = this.randomQuote;
		setTimeout(console.log.bind(console, '%c \n  %c' + outputQuote + ' %c  \n', 'background: none;', outputCss, 'background: none;'));
	},
    created(){
		const idx = Math.floor(Math.random() * this.quotes.length);
		this.randomQuote = this.quotes[idx];
		const idxcss = Math.floor(Math.random() * this.css.length);
        this.randomCss = this.css[idxcss];
	}
}
</script>

<static-query>
query Static {,
	metadata {
		siteName
	}
}
</static-query>
