<template>
	<Layout :sidebar="true" :top="false" :bottom="false">
		<article>
			<h1 class="title">{{ $page.post.title }}</h1>
			<p class="lead" v-html="$page.post.excerpt" />
			<div v-html="$page.post.content" />
		</article>
		<template slot="navgroup">
			Work
		</template>
		<template slot="secondary-nav">
			<NavWork />
		</template>
		<template slot="repo_link">
			<a href="https://github.com/smokeyfro/smokeyfro/blob/master/src/pages/work/Rates.vue">Source</a>
		</template>
	</Layout>
</template>

<script>
import NavWork from "@/components/NavWork";

export default {
	components: {
		NavWork
	},
	metaInfo() {
		return {
			title: `${this.$page.post.title}`,
			bodyAttrs: {
				class: "service post single"
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
	post: service(path: $path) {
		title
		slug
		id
		excerpt
		content
	}
}
</page-query>