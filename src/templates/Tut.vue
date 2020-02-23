<template>
	<Layout :sidebar="true" :top="true" :bottom="false">
		<template slot="top-shelf">
			<g-image :src="$page.post.coverImage" :alt="$page.post.title" />
		</template>
		<article>
			<h1>{{ $page.post.title }}</h1>
			<p>{{ $page.post.description }}</p>
			<div class="mb-10 markdown" v-html="$page.post.html" />
			<p class="mb-10 text-2xl italic text-gray-800">Send a tweet to <a href="https://twitter.com/smokeyfro" target="_blank" rel="nofollow noopener"> @SmokeyFro</a>  on Twitter if you have anything to add.</p>
		</article>
		<template slot="navgroup">
			Tutorials
		</template>
		<template slot="secondary-nav">
			<NavTuts />
		</template>
		<template slot="repo_link">
			<a href="https://github.com/smokeyfro/smokeyfro/blob/master/src/templates/Tut.vue">Source</a>
		</template>
	</Layout>
</template>

<script>
import NavTuts from "@/components/NavTuts";
import config from '~/.temp/config.js'

export default {
	components: {
		NavTuts
	},
	metaInfo() {
		return {
			title: this.$page.post.title,
			meta: [
				{
					name: "description",
					content: this.$page.post.excerpt
				},
				{
					property: "og:title",
					content: this.$page.post.title
				},
				{
					property: "og:description",
					content: this.$page.post.excerpt
				},
				{
					property: "og:image",
					content: this.$page.post.feature_image || ""
				},
				{
					property: "og:type",
					content: 'article'
				},
				{
					property: "og:url",
					content: this.postUrl
				},
				{
					property: "fb:app_id",
					content: "1385144068322348"
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				},
				{
					name: "twitter:site",
					content: "smokeyfro"
				},
				{
					name: "twitter:domain",
					content: "smokeyfro.com"
				},
				{
					name: "twitter:title",
					content: this.$page.post.title
				},
				{
					name: "twitter:image:src",
					content: this.$page.post.feature_image || ""
				},
				{
					property: "twitter:url",
					content: this.postUrl
				},
				{
					name: "twitter:creator",
					content: "@smokeyfro"
				}
			],
			style: [
			  { src: "/prism.css", defer: false, rel: "stylesheet", type: "text/css" }
			],
			script: [
				{ src: "/prism.js", defer: false, type: "text/javascript" }
			],
			bodyAttrs: {
				class: "tutorials tutorial single"
			}
		};
	},
	computed: {
		config () {
			return config
		},
		postUrl () {
			let siteUrl = this.config.siteUrl
			let postSlug = this.$page.post.slug
			return postSlug ? `${siteUrl}/tuts/${postSlug}/` : `${siteUrl}/${this.$page.post.path}/`
		},
		ogImageUrl () {
			return this.$page.post.coverImage || `${this.config.siteUrl}/images/sf-card.png`
		}
	}
};
</script>

<page-query>
query Post ($path: String) {
	post: ghostPost(path: $path) {
		title
		slug
		path
		id
		html
		excerpt
		coverImage: feature_image
		date: published_at (format: "D. MMMM YYYY")
	}
}
</page-query>