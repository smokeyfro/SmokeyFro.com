<template>
	<div class="overflow-x-auto overflow-x-hidden md:h-screen md:overflow-hidden layout app">
		<header class="relative z-50 flex flex-row items-center justify-between dark:bg-black sm:flex-col">
			<Logo class="text-white sm:mx-auto sm:mt-6 " />
			<NavPrimary />
			<NavMobile />
			<NavTertiary />
		</header>
		<aside class="relative z-40 flex items-center dark:bg-gray-900 sm:justify-center" v-if="sidebar">
			<slot name="secondary-nav" />
		</aside>
		<main class="relative z-30 w-full h-screen overflow-x-hidden overflow-y-auto">
			<div v-if="top">
				<slot name="top-shelf" />
			</div>
			<div class="px-5 pt-4 lg:max-w-screen-lg md:px-10 lg:px-20 lg:pt-12 md:pt-6">
				<slot />
			</div>
			<div v-if="bottom">
				<slot name="bottom-shelf" />
			</div>
		</main>
	</div>
</template>

<script>
import NavPrimary from "~/components/NavPrimary.vue";
import NavMobile from "~/components/NavMobile.vue";
import NavTertiary from "~/components/NavTertiary.vue";
import Logo from "~/components/Logo.vue";

export default {
  	props: [
		'sidebar',
		'top',
		'bottom'
	],
	data() {
		return {
			quotes: [
				'Curiosity Killed The Cat',
				'Early Bird Gets The Worm',
				'Use CONSOLE for 20% Off',
				'Garbage In, Garbage Out',
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
			],
			randomCss: '',
			randomQuote: ''
		}
	},
	mounted() {
			var outputCss = this.randomCss;
			var outputQuote = this.randomQuote;
			setTimeout(console.log.bind(console, '%c \n  %c' + outputQuote + ' %c  \n', 'background: none;', outputCss, 'background: none;'));
			// setTimeout(console.log.bind(console, '\n%c' + outputQuote + '\nFind the code for this page here:\nhttps://github.com/smokeyfro/smokeyfro/blob/master/src/pages/Devtools.vue\n\n', css));
	},
    created(){
		const idx = Math.floor(Math.random() * this.quotes.length);
		this.randomQuote = this.quotes[idx];
		const idxcss = Math.floor(Math.random() * this.css.length);
        this.randomCss = this.css[idxcss];
	},
	components: {
		NavPrimary,
		NavMobile,
		NavTertiary,
		NavMobile,
		Logo
	}
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>