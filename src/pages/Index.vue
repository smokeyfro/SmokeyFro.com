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