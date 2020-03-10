<template>
	<Layout :sidebar="true" :top="false" :bottom="false">
		<article class="mb-6 md:mb-10"> 
			<h1 class="m-0">{{ $page.post.title }}</h1>
			<p class="mb-1">{{ $page.post.excerpt }}</p>
			<p class="m-0 mb-5"><a v-if="$page.post.status === 'Online'" :href="$page.post.url" target="_blank" class="btn btn-primary">View the site <img src="/external.svg" class="inline-block w-3 h-3" /></a></p>
			
			<div class="w-full ">
				<ul class="grid grid-cols-2 p-0 m-0 mb-6 reset">
					<li v-if="$page.post.company" class="p-0 m-0 mb-3 truncate"><strong class="block">Company</strong>{{ $page.post.company }}</li>
					<li v-if="$page.post.contact" class="p-0 m-0 mb-3"><strong class="block">Contact</strong>{{ $page.post.contact }}</li>
					<li v-if="$page.post.launch_date" class="p-0 m-0 mb-3"><strong class="block">Date</strong>{{ $page.post.launch_date }}</span></li>
					<li v-if="$page.post.duration" class="p-0 m-0 mb-3"><strong class="block">Duration</strong>{{ $page.post.duration }}</li>
					<li v-if="$page.post.url" class="p-0 m-0 mb-3 truncate"><strong class="block">Url</strong>{{ $page.post.url }}</li>
					<li v-if="$page.post.project_type" class="p-0 m-0"><strong class="block">Type</strong>{{ $page.post.project_type }}</li>
					<li v-if="$page.post.status" class="p-0 m-0"><strong class="block">Status</strong>{{ $page.post.status }}</li>
				</ul>
			</div>
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
		<!-- <template slot="bottom-shelf">
			<div v-if="$page.post.gallery != ''" class="mx-6 mb-24 md:mx-10 lg:mx-20">
				<h2>Screenshots</h2>
				<silentbox-group class="grid grid-cols-2 row-gap-6 col-gap-4 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gallery">
					<silentbox-item v-for="(photo, $index) in $page.post.gallery" :key="$index" :src="photo.full.src" :description="photo.title" class="border border-gray-300">
						<g-image v-if="photo.thumb.src" :src="photo.thumb" :alt="photo.alt" width="265" height="200" />
					</silentbox-item>
				</silentbox-group>
			</div>
		</template> -->
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

export default {
	components: {
		NavWork
	},
	metaInfo() {
		return {
			title: `${this.$page.post.title}`,
			bodyAttrs: {
				class: "work single"
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
		company
		contact
		url
		status
		services
		stack
		launch_date(format: "MMMM, YYYY")
		excerpt
		content
		path
	}
}
</page-query>
<!--@<style src="../css/lightbox.css"></style>-->

<style scoped>
/* .work .gallery > span {
	height: 160px;
	overflow: hidden;
} */
.work article > div:first-of-type > div:first-of-type {
	margin-right: 5rem;
}
.work main {
	display: flex;
	flex-direction: column;
}
.work article {
	width: 100%;
}
.work .markdown,
.work .image {
	width: 100%;
	margin-top: 1.5rem;
}
@media (min-width: 1280px) {
	.work main.main {
		position: relative;
	}
	.work .image {
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
	.work article {
		order: 1;
		width: 70%;
		position: relative;
	}
}

/* .work div#silentbox-overlay__embed img,
.work div#silentbox-overlay__embed iframe {
	max-height: fit-content;
	width: 100%;
	position: static !important;
}
.work div#silentbox-overlay__container {
	height: fit-content;
	overflow: scroll;
}
@media ( max-width: 480px ) {
	.work .gallery > span {
		height: 100px;
	}
} */
</style>