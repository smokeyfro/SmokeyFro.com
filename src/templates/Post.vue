<template>
	<Layout :sidebar="true" :top="false" :bottom="false">
		<article>
			<h1>{{ $page.post.title }}</h1>
			<p v-html="$page.post.description" />
			<div v-html="$page.post.html" />
			<nav>
					<g-link :to="tag.path" v-for="tag in $page.post.tags" v-bind:key="tag.id">#{{ tag.name }}</g-link>
			</nav>
			<!-- <h2>Comments</h2>
			<div id="commento"></div> -->
			<Newsletter title="Never miss a post" summary="Signup below to be notified when new posts are posted" />
		</article>
		<template slot="navgroup">
			Journal
		</template>
		<template slot="secondary-nav">
			<NavJournal />
		</template>
		<template slot="repo_link">
			<a href="https://github.com/smokeyfro/smokeyfro/blob/master/src/templates/Post.vue">Source</a>
		</template>
	</Layout>
</template>

<script>
import NavJournal from "@/components/NavJournal";
import Newsletter from "@/components/Newsletter";

export default {
	components: {
		NavJournal,
		Newsletter
	},
	metaInfo() {
		return {
			title: `${this.$page.post.title}`,
			// script: [{ src: "https://cdn.commento.io/js/commento.js", defer: true }],
			bodyAttrs: {
				class: "journal post single"
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
	post: ghostPage(path: $path) {
		title
		slug
		id
		html
		description: excerpt
		date: published_at (format: "D. MMMM YYYY")
	}
}
</page-query>
