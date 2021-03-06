<template>
	<Layout :sidebar="true" :top="true" :bottom="false">
		<article class="lg:w-2/3">
			<h1>{{ $page.post.title }}</h1>
			<p v-html="$page.post.excerpt" />
			<p class="demo-link" v-if="$page.post.group === 'beans'">
				<a :href="$page.post.demo_url" target="_blank" title="View the theme demo">View Demo <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="inline-block w-5 h-5" viewBox="0 0 24 24"><defs/><path d="M7 17L17 7M7 7h10v10"/></svg>
				</a>
			</p>
			<p class="text-sm"><strong>Requirements:</strong> {{ $page.post.requirements }} </p>
			<div v-if="$page.post.group === 'beans'" class="grid grid-cols-1 gap-8 mb-6 md:grid-cols-2">
				<div class="resources">
					<h2 class="text-2xl">Resources</h2>
					<a href="https://www.sitepoint.com/faster-wordpress-theme-development-beans-framework/" class="block link" target="_blank" rel="nofollow noopener" title="Get an overview of the Beans framework for WordPress">Intro to Beans <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="inline-block w-5 h-5" viewBox="0 0 24 24"><defs/><path d="M7 17L17 7M7 7h10v10"/></svg></a>
					<a href="https://www.getbeans.io/documentation/" class="block link" target="_blank" rel="nofollow noopener" title="Read the official Beans documentation">Beans Documentation <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="inline-block w-5 h-5" viewBox="0 0 24 24"><defs/><path d="M7 17L17 7M7 7h10v10"/></svg></a>
					<a href="https://www.getbeans.io/code-snippets/" class="block link" target="_blank" rel="nofollow noopener" title="View code-snippets on the official Beans site">Code Snippets <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="inline-block w-5 h-5" viewBox="0 0 24 24"><defs/><path d="M7 17L17 7M7 7h10v10"/></svg></a>
					<!-- <a href="/tuts/beans-setup-guide" class="block link" title="Check out my general Beans setup guide">Setup Guide</a> -->
					<a href="http://localhost:8080/tuts/about/beans" class="block link" title="Check out my Beans tutorials">Beans Tutorials</a>
				</div>
				<div class="downloads">
					<h2 class="text-2xl">Downloads</h2>
					<a v-if="$page.post.group === 'beans'" class="block link" href="http://www.getbeans.io/download-beans/?no_cache=1" download>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="inline-block w-3 h-3"><defs/><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg> Beans Parent Theme
					</a>
					<a :href="$page.post.download_theme" class="block link" download>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="inline-block w-3 h-3" viewBox="0 0 24 24">
						<defs/>
						<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
						</svg> {{ $page.post.title }} <span v-if="$page.post.group === 'beans'">Child Theme</span> <span v-if="$page.post.group === 'jamstack'">Starter</span>
					</a>
					<a :href="$page.post.download_source" class="block mr-4 link " download>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="inline-block w-3 h-3" viewBox="0 0 24 24">
							<defs/>
							<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
						</svg> {{ $page.post.title }} Source
					</a>
				</div>
			</div>
			<div v-if="$page.post.group === 'jamstack'" class="pt-6 mt-10 mb-6 border-t-2 md:mb-10">
				<h2 class="2xl">Easy tiger!</h2>
				<p>My JAMstack themes aren't quite ready yet. Subscribe to my newsletter to be notified when they are ready.</p>
				<Newsletter title="" summary="" layout="inline" />
			</div>
			<div v-html="$page.post.content" />
		</article>
		<figure v-if="$page.post.image" class="hidden md:top-0 md:right-0 md:w-40 md:fixed theme-image">
			<g-image :src="$page.post.image" :alt="$page.post.title" />
		</figure>
		<template slot="top-shelf">
			<figure v-if="$page.post.thumb" class="block border-t border-b md:hidden">
				<g-image :src="$page.post.thumb" :alt="$page.post.title" width="360" height="274" />
			</figure>
		</template>
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
import Newsletter from '@/components/Newsletter'
import { mixin as clickaway } from 'vue-clickaway'

export default {
  	mixins: [ clickaway ],
	components: {
		NavThemes,
		Newsletter,
		Browser
	},
	metaInfo() {
		return {
		title: `${this.$page.post.title}`,
		bodyAttrs: {
			class: "themes freebies theme single"
		}
		};
	},
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
	thumb
	image
  }
}
</page-query>