<template>
	<Layout :sidebar="true" :top="false" :bottom="false">
		<article class="mb-12">
			<h1 class="mb-6">{{ $page.post.title }}</h1>
			<div v-html="$page.post.content" />
			<nav>
				<g-link :to="tag.path" v-for="tag in $page.post.tags" v-bind:key="tag.id">#{{ tag.name }}</g-link>
			</nav>

			<Newsletter layout="inline" class="p-6 bg-white border border-t-2 md:p-10 md:my-24" title="Subscribe to my Journal" summary="Signup below and I'll let you know when new content is added." buttonText="Signup, it's free" />

			<!-- <Comments /> -->
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
// import Comments from "@/components/Comments";

export default {
	components: {
		NavJournal,
		Newsletter,
		// Comments
	},
	metaInfo() {
		return {
			title: `${this.$page.post.title}`,
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
	post: ghostPost (path: $path) {
		title
		slug
		id
		content: html
		excerpt
		date: published_at (format: "D MMMM, YYYY")
	}
}
</page-query>
