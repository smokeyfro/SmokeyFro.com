<template>
	<Video top="true">
		<article class="relative">
            <div>
                <h1 class="title">{{ $page.post.title }}</h1>
			    <p class="lead" v-html="$page.post.excerpt" />
            </div>
			<Comments />
		</article>
		<template slot="top-shelf">
			<figure v-html="$page.post.content" />
			<!-- <ClientOnly>
				<videoplayer>
					<div class="plyr__video-embed">
					<iframe
						:src="$page.post.video_url"
						allowfullscreen
						allowtransparency
						allow="autoplay"
					></iframe>
					</div>
				</videoplayer>
			</ClientOnly> -->
		</template>
		<template slot="navgroup">
			Work
		</template>
		<template slot="secondary-nav">
			<NavAbout />
		</template>
		<template slot="repo_link">
			<a href="https://github.com/smokeyfro/smokeyfro/blob/master/src/pages/work/Rates.vue">Source</a>
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
	}
}
</page-query>

<style src="../../node_modules/plyr/dist/plyr.css"></style>