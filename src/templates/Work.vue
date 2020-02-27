<template>
	<Layout :sidebar="true" :top="true" :bottom="true">
		<template slot="top-shelf">
			<div class="pt-4 mx-6 md:pt-6 md:mx-10">
				<h1>{{ $page.post.title }}</h1>
				<p>{{ $page.post.excerpt }}</p>
				<p>Client: {{ $page.post.client }}<span class="block h-2 text-transparent md:inline"> &middot; </span>{{ $page.post.url }}</p>
			</div>
		</template>
		<article> 
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				<div v-if="$page.post.services">
					<h2>Services</h2>
					<ul>
						<li v-for="service in $page.post.services" :key="service">{{ service }}</li>
					</ul>
				</div>
				<div v-if="$page.post.stack">
					<h2>Stack</h2>
					<ul>
						<li v-for="stack in $page.post.stack" :key="stack">{{ stack }}</li>
					</ul>
				</div>
			</div>
			<div class="markdown" v-if="$page.post.content != false">
				<h2>About the Project</h2>
				<div class="cols" v-html="$page.post.content" />
			</div>
		</article>
		<template slot="bottom-shelf">
			<div v-if="$page.post.gallery != ''" class="mx-6 mb-24 md:mx-10 lg:mx-20">
				<h2>Screenshots</h2>
				<silentbox-group class="grid grid-cols-2 row-gap-6 col-gap-4 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gallery">
					<silentbox-item v-for="(photo, $index) in $page.post.gallery" :key="$index" :src="photo.full.src" :description="photo.title" class="border border-gray-300">
						<g-image v-if="photo.thumb.src" :src="photo.thumb" :alt="photo.alt" width="265" height="200" />
					</silentbox-item>
				</silentbox-group>
			</div>
		</template>
		<template slot="navgroup">Work</template>
		<template slot="secondary-nav">
			<NavWork />
		</template>
		<template slot="repo_link">
			<a href="https://github.com/smokeyfro/smokeyfro/blob/master/src/templates/Work.vue">Source</a>
		</template>
	</Layout>
</template>

<script>
import NavWork from "@/components/NavWork";
// import Browser from "@/components/Browser";

export default {
	components: {
		NavWork,
		// Browser
	},
	metaInfo() {
		return {
			title: `${this.$page.post.title}`,
			bodyAttrs: {
				class: "project single"
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
	post: work(path: $path) {
		title
		slug
		project_type
		client
		url
		status
		services
		stack
		launch_date
		excerpt
		content
		path
		gallery {
			thumb
			full
			alt
			title
		}
	}
}
</page-query>
<style src="../css/lightbox.css"></style>

<style scoped>
.gallery > span {
	height: 160px;
	overflow: hidden;
}
article > div:first-of-type > div:first-of-type {
	margin-right: 5rem;
}
main {
	display: flex;
	flex-direction: column;
}
article {
	width: 100%;
}
.markdown,
.image {
	width: 100%;
	margin-top: 1.5rem;
}
@media (min-width: 1280px) {
	main.main {
		position: relative;
	}
	.image {
		max-width: 500px;
		order: 2;
		padding-top: 0;
		position: absolute;
		top: 1rem;
		height: 100vh;
		right: -8rem;
		.browser {
			height: fit-content;
		}
	}
	article {
		order: 1;
		width: 70%;
		position: relative;
	}
}

/* .lead {
	display: none;
} */

div#silentbox-overlay__embed img,
div#silentbox-overlay__embed iframe {
	max-height: fit-content;
	width: 100%;
	position: static !important;
}
div#silentbox-overlay__container {
	height: fit-content;
	overflow: scroll;
}
@media ( max-width: 480px ) {
	.gallery > span {
		height: 100px;
	}
}
</style>