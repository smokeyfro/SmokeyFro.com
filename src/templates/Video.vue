<template>
	<Video top="true">
		<h1 class="mt-12">{{ $page.post.title }}</h1>
		<p class="mb-5" v-html="$page.post.excerpt" />
		<div class="mb-12" v-html="$page.post.content" />
		<template slot="navgroup">
			Work
		</template>
		<template slot="secondary-nav">
			<NavAbout />
		</template>
		<template slot="repo_link">
			<a href="https://github.com/smokeyfro/smokeyfro/blob/master/src/templates/Video.vue">Source</a>
		</template>
	</Video>
</template>

<script>
import NavAbout from "@/components/NavAbout";
import Video from "~/layouts/Video.vue";

export default {
	components: {
        NavAbout,
		Video
	},
	metaInfo() {
		return {
			title: `${this.$page.post.title}`,
			bodyAttrs: {
				class: "about service post single"
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
	post: video(path: $path) {
		title
		slug
		id
		excerpt
        duration
        content
	}
}
</page-query>