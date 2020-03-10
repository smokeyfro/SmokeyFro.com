<template>
	<Layout :sidebar="true" :top="false" :bottom="true">
		<article>
			<h1 class="title">{{ $page.post.title }}</h1>
			<p class="lead" v-html="$page.post.excerpt" />
            <div class="grid w-full grid-cols-4 gap-px" :class="$page.post.albumClass">
                <a v-for="(photo, $index) in $page.post.photos" :key="$index" :href="photo.full.src" data-fslightbox="gallery" class="block image">
                    <g-image :src="photo.full.src" width="250" />
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
		albumClass
        photos {
			full
			thumb
		}
        path
	}
}
</page-query>

<style>
main .grid {
	@apply mt-10 mb-20
}
main .grid-style1 > a:first-of-type,
main .grid-style1 > a:nth-of-type(7),
main .grid-style1 > a:nth-of-type(13) {
  grid-column: span 2;
  grid-row: span 2;
}

main .grid-style2 > a:nth-of-type(3),
main .grid-style2 > a:nth-of-type(6),
main .grid-style2 > a:nth-of-type(13) {
  grid-column: span 2;
  grid-row: span 2;
}

main .grid-style3 > a:nth-of-type(2),
main .grid-style3 > a:nth-of-type(5),
main .grid-style3 > a:nth-of-type(10) {
  grid-column: span 3;
  grid-row: span 3;
}

main .grid > a img {
    object-fit: cover;
    width: 100%;
}
</style>