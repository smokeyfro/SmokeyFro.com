<template>
	<Video top="true">
		<h1 class="title">{{ $page.post.title }}</h1>
		<p class="lead" v-html="$page.post.excerpt" />
		{{ videoUrl }}
		<Comments />
		<template slot="top-shelf">
			<!-- <figure v-html="$page.post.content" /> -->
			<ClientOnly>
				<videoplayer>
					<div class="plyr__video-embed">
						<iframe
							:src="videoUrl"
							allowfullscreen
							allowtransparency
							allow="autoplay"
							sandbox="allow-scripts allow-same-origin"
						></iframe>
					</div>
				</videoplayer>
			</ClientOnly>
		</template>
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
import Comments from "@/components/Comments";

export default {
	components: {
        NavAbout,
		Video,
		Comments,
		videoplayer: () => import("vue-plyr/dist/vue-plyr.ssr.js")
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
		},
		videoUrl() {
			let videoId = this.$page.post.video_id;
			return `https://www.youtube.com/embed/${videoId}?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1`
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
        video_url
		video_id
	}
}
</page-query>

<style src="../../node_modules/plyr/dist/plyr.css"></style>