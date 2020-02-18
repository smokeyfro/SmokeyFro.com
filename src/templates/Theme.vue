<template>
	<Layout :sidebar="true" :top="false" :bottom="false">
		<article>
			<h1>{{ $page.post.title }}</h1>
			<p v-html="$page.post.excerpt" />
			<p class="demo-link">
				<a :href="$page.post.demo_url">View Demo <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="inline-block w-5 h-5" viewBox="0 0 24 24">
					<defs/>
					<path d="M7 17L17 7M7 7h10v10"/>
					</svg><noscript><g-image src="/external-link.svg" /></noscript>
				</a>
			</p>
			<div class="meta">
				<div class="resources">
					<h2>Resources</h2>
					<a href="">Intro to Beans</a>
					<a href="">Setup Guide</a>
					<a href="">Beans Documentation</a>
					<a href="">Code Snippets</a>
					<a href="">Beans Tutorials</a>
				</div>
				<div class="downloads">
					<h2>Downloads</h2>
					<a v-if="$page.post.group === 'beans'" href="http://www.getbeans.io/download-beans/?no_cache=1" download>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
							<defs/>
							<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
						</svg> Beans Parent Theme
					</a>
					<a :href="$page.post.download_theme" download>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="inline-block w-3 h-3" viewBox="0 0 24 24">
						<defs/>
						<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
						</svg> {{ $page.post.title }} <span v-if="$page.post.group === 'beans'">Child Theme</span> <span v-if="$page.post.group === 'jamstack'">Starter</span>
					</a>
					<a :href="$page.post.download_source" class="mr-4" download>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="inline-block w-3 h-3" viewBox="0 0 24 24">
							<defs/>
							<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
						</svg> {{ $page.post.title }} Source
					</a>
				</div>
			</div>
		</article>
		<figure v-if="$page.post.image" class="theme-image">
			<g-image :src="$page.post.image" :alt="$page.post.title" />
		</figure>
		<!-- <section id="demo" class="demo-wrap" v-on-clickaway="showDemo" v-if="showDemo === true">
		<div class="device-toggle">
			<button v-on:click="preview = 'fluid'" v-bind:class="{ 'active': preview == 'fluid'}" title="Fluid" tabindex="30">Fluid</button>
			<button v-on:click="preview = 'desktop'" v-bind:class="{ 'active': preview == 'desktop'}" title="Desktop" tabindex="31">Desktop</button>
			<button v-on:click="preview = 'tablet'" v-bind:class="{ 'active': preview == 'tablet'}" title="Tablet" tabindex="32">Tablet</button>
			<button v-on:click="preview = 'mobile'" v-bind:class="{ 'active': preview == 'mobile'}" title="Mobile" tabindex="33">Mobile</button>
			<button v-on:click="showDemo = false" title="Close" class="close-button" aria-label="Close Demo" tabindex="34"><svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><defs/><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg></button>
		</div>
		<!-- <iframe v-if="preview === 'mobile'" :src="$page.post.demo_url" width="320" height="100%" class="mobile" sandbox="allow-scripts allow-popups allow-forms" />
		<iframe v-if="preview === 'tablet'" :src="$page.post.demo_url" width="768" height="100%" class="tablet" sandbox="allow-scripts allow-popups allow-forms" />
		<iframe v-if="preview === 'desktop'" :src="$page.post.demo_url" width="1024" height="100%" class="desktop" sandbox="allow-scripts allow-popups allow-forms" />
		<iframe v-if="preview === 'fluid'" :src="$page.post.demo_url" width="100%" height="100%" class="fluid" sandbox="allow-scripts allow-popups allow-forms" /> -->
	</section> -->
	<template slot="navgroup">
	  Freebies
	</template>
	<template slot="secondary-nav">
	  <NavThemes />
	</template>
	<template slot="repo_link">
	  <a href="https://github.com/smokeyfro/smokeyfro/blob/master/src/pages/Freebies/Theme.vue">Source</a>
	</template>
  </Layout>
</template>

<script>
import NavThemes from "@/components/NavThemes";
import Browser from '@/components/Browser'
import { mixin as clickaway } from 'vue-clickaway'

export default {
  	mixins: [ clickaway ],
	components: {
		NavThemes,
		Browser
	},
	metaInfo() {
		return {
		title: `${this.$page.post.title}`,
		bodyAttrs: {
			class: "freebies theme single"
		}
		};
	},
	// stored: {
	// 	showDemo: {
	// 		type: String,
	// 		key: 'show-demo',
	// 		default: false
	// 	}
	// },
	// data () {
	// 	return {
	// 		preview: 'fluid',
	// 		isVisible: false,
	//   		focusedIndex: 0
	// 	}
	// },
	// methods: {
	// 	toggleVisibility() {
	// 		  this.isVisible = !this.isVisible
	// 	},
	// 	hideDemo() {
	//   		this.isVisible = false
	// 	}
	// },
	// watch: {
	// 	showDemo: function() {
	// 		if(this.showDemo){
	// 			document.documentElement.style.overflow = 'hidden'
	// 			return
	// 		}
	// 		document.documentElement.style.overflow = 'auto'
	// 	}
	// },
	computed: {
		config() {
			return config;
		}
	}
};
</script>

<page-query>
query Post ($path: String) {
  post: theme(path: $path) {
	title
	slug
	excerpt
	content
	type
	path
	release_date
	requirements
	demo_url
	platform
	group
	download_theme
	download_source
	image ( width: 625)
  }
}
</page-query>
<style>
.main {
	position: relative;
	/* h1 {
		margin-top: 40px;
	} */
}
.meta {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
}
.meta > div a {
	display: block;
}
.demo-wrap {
	position: fixed;
	top: 0;
	bottom: 0;
	z-index: 9999;
	left: 83px;
	right: 0;
	/* width: calc(100%-81px); */
	background: #fff;
}
.device-toggle {
	background: #f7f7f7;
	position: relative;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	padding: 10px 5px;
}
.device-toggle button {
	background: #f7f7f7;
	border: 0;
	padding: 0 0 0 .6rem;
	&:focus {
		outline: none;
	}
}
.device-toggle button.active {
	font-weight: bold;
}
.demo-wrap iframe {
	border: 0;
}
.close-button {
	margin: 0 15px 0 auto;
	svg {
		width: 20px;
	}
}
@media (min-width: 480px) {

}

/* main {
  height: calc(100vh - 200px);
} */
.downloads a {
  display: block;
}
.demo-link svg,
.downloads svg {
	width: 12px;
}
</style>