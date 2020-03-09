<template>
	<Layout :sidebar="true" :top="false" :bottom="true">
		<article>
			<h1 class="title">{{ $page.post.title }}</h1>
			<p class="lead" v-html="$page.post.excerpt" />
            <div class="grid w-full grid-cols-4 gap-px" v-if="$page.post.photos">
                <a v-for="(photo, $index) in $page.post.photos" :key="$index" :href="photo.full" data-fslightbox="gallery" class="block image">
                    <g-image :src="photo.thumb" width="250" />
                </a>
            </div>
		</article>
		<template slot="navgroup">
			About
		</template>
		<template slot="secondary-nav">
			<NavAbout />
		</template>
		<template slot="repo_link">
			<a href="https://github.com/smokeyfro/smokeyfro/blob/master/src/pages/about/Photos.vue">Source</a>
		</template>
	</Layout>
</template>

<script>
import NavAbout from "@/components/NavAbout";

export default {
	components: {
		NavAbout
	},
    data() {
		return {
			toggler: false,
			options : {
				closeText : 'X'
			}
		}
	},
	metaInfo() {
		return {
			title: `${this.$page.post.title}`,
			bodyAttrs: {
				class: "photos single"
			},
			script: [
				{ src: "/fslightbox.js", defer: true, type: "text/javascript" },
			]
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
	post: album(path: $path) {
		title
		slug
		id
		excerpt
		content
        photos {
			full
			thumb
		}
        path
	}
}
</page-query>