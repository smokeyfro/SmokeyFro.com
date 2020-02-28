<template>
	<Layout :sidebar="false" :top="true" bottom="false" class="h-screen">
		<template slot="top-shelf">
		<div class="grid w-full gap-0 md:h-screen">
			<HomeImage />
			<div>
				<h1><span class="block sm:hidden">Howdy. I'm Chris</span><span class="hidden sm:block">Hello. My name  <strong>Chris</strong></span></h1>
				<p>I'm a designer, front-end developer and entrepreneur working remotely from the Garden Route of South Africa.</p>
				<p>This is my home on the web where I showcase my work, share my themes, write tutorials and post updates via my journal.</p>
				<p>As a designer who is passionate about writing clean, performant code, I am able to take an idea from conception to finished product and have worked with clients of all sizes bringing their ideas to life. Need help with yours? <g-link to="/contact" class title="Learn more about me">Get in touch</g-link>.</p>
			</div>
		</div>
		</template>
	</Layout>
</template>


<script>
	import HomeImage from "~/components/HomeImage.vue";
	
	export default {
		components: {
			HomeImage
		},
		metaInfo: {
			title: "Chris Rault, designer, front-end developer and entrepreneur from South Africa",
			bodyAttrs: {
				class: "home two-col"
			}
		}
	};
</script>

<style src="../css/pages/home.css" />