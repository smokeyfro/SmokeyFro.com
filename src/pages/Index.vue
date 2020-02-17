<template>
	<Layout :sidebar="false" :image="false" class="h-screen">
		<div class="relative w-full h-full lg:flex lg:flex-row md:items-center lg:overflow-hidden">
			<div class="pt-2 lg:mt-24 lg:max-w-2xl lg:mr-24">
				<h1><span class="block sm:hidden">Howdy. I'm Chris</span><span class="hidden sm:block">Hello. My name  <strong>Chris</strong></span></h1>
				<p>I'm a designer, front-end developer and entrepreneur working remotely from the Garden Route of South Africa.</p>
				<p>This is my home on the web, where I showcase my work, share my themes, write tutorials and post updates via my journal.</p>
				<p>As a designer who codes, I'm able to take an idea from conception to production code and have worked with clients of all sizes bringing their ideas to life. Need help with yours? <g-link to="/contact" class title="Learn more about me">Get in touch</g-link>.</p>
			</div>
			<HomeImage />
		</div>
	</Layout>
</template>

<script>
	import HomeImage from "~/components/HomeImage.vue";
	export default {
	components: {
		HomeImage
	},
		metaInfo: {
			title: "",
			bodyAttrs: {
				class: "home"
			}
		}
	};
</script>

<style>
	.home main {
		background: #f3f7f9;
	}
	:root [data-theme=dark].home main {
		background-color: rgba(19, 19, 19,0.98);
	}
	@media ( min-width: 768px ) and ( max-width: 1024px ) {
		.app header {
			height: 100vh;
		}
		.home main > div {
			height: 100%;
		}
	}
	@media ( min-width: 640px ) {
		.home .app {
			grid-template-columns: 80px 1fr;
			grid-template-areas:
			"header main main"
			"header main main";
		}
	}

	@media ( max-width: 640px ) {
		.home .app main div p > a {
			z-index: 99999;
			display: block;
			margin-top: 1.5rem;
			text-align: center;
			padding: 0;
			height: 50px;
			line-height: 46px;
			font-size: 1.3rem;
			background: #fff;
			opacity: 1;
			position: relative;
			border: 2px solid;
			border-radius: 2px;
		}
		.home main figure {
			position: absolute;
			bottom: 0;
			z-index: 0;
			opacity: .2;
			width: 100%;
		}
		.home main figure svg {
			position: absolute;
			z-index: 0;
		}
		.home main {
			height: calc( 100vh - 52px);
			position: relative;
		}
		.home main > div,
		.home main > div > div {
			height: 100%;
		}
		.home main > div > div {
			display: flex;
			align-items: center;
			justify-content: flex-start;
		}
	}
	@media ( min-width: 1024px ) {
		.home main figure {
			flex-grow: 1;
			flex-basis: 50%;
			min-width: 670px;
			position: relative;
			width: 700px;
			height: 100vh;
			margin: 0 2rem 0 -80px;
		}
		.home main figure svg {
			display: block;
			max-width: 100%;
			max-height: 700px;
			position: fixed;
			width: 700px;
			bottom: 0;
			left: 50px;
		}
		:root [data-theme=dark].home main figure svg {
			filter: drop-shadow(2px 4px 26px black);
		}
		.home main > div {
			max-width: 100%;
			height: 100%;
			margin: 0;
			display: flex;
			padding: 0!important;
		}
		.home main > div > div > div {
			flex-grow: 1;
			flex-basis: 50%;
			min-width: 300px;
			order: 2;
			max-width: 700px;
			padding-left: 2rem;
		}
	}
	:root [data-theme=dark].home main {
		filter: unset;
	}
	:root [data-theme=dark].home main h1 strong {
		color: #ffc800;
	}
</style>