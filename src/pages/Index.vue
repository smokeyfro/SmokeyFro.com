<template>
	<Layout :sidebar="false" :top="true" bottom="false" class="md:h-screen">
		<template slot="top-shelf">
		<div class="block w-full md:grid md:gap-0 content md:h-screen">
			<HomeImage />
			<div class="content">
				<h1><span class="block sm:hidden">Howdy. I'm Chris</span><span class="hidden sm:block">Hello. My name  <strong>Chris Rault</strong></span></h1>
				<p>I am an independent designer and front-end developer, working remotely from my farm in the Garden Route of South Africa.</p>
				<p>This is my home on the web where I showcase my <g-link to="/work" class="link" title="View a selection of my work">work</g-link>, share my WordPress and Gridsome <g-link to="/themes" class="link" title="Browse my growing collection of WordPress and JAMstack themes">themes</g-link>, write web-dev <g-link to="/tutorials" class="link" title="Read my journal">tutorials</g-link> and post updates via my <g-link to="/journal" class="link" title="Check out my web development tutorials">journal</g-link>.</p>
				<p>As a designer who codes, I am able to take an idea from conception to finished product and have worked with clients of all sizes bringing their ideas to life.</p>
				<p><strong>Need help with yours?</strong></p>
				<p><g-link to="/work/services" class="btn btn-large btn-primary" title="Explore my services">Explore My Services</g-link> <span class="hidden mx-2 text-sm md:block">or</span> <g-link to="/work" class="btn btn-large btn-secondary" title="View My Work">View My Work</g-link></p>
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