<template>
	<Video>
		<article class="relative">
			<figure v-html="$page.post.content" class="md:mt-10 lg:mt-20" />
            <!-- <div class="hidden">
                <h1 class="title">{{ $page.post.title }}</h1>
			    <p class="lead" v-html="$page.post.excerpt" />
            </div> -->
		</article>
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
        video_url
	}
}
</page-query>