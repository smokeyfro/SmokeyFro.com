<template>
	<Layout :sidebar="true" :top="false" :bottom="true">
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
					<ul class="flex flex-wrap items-center justify-start list-reset tags">
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
				<div class="grid w-full grid-cols-1 gap-4 mt-6 mb-6 album-grid md:mb-20 md:mt-10 md:grid-cols-4" :class="$page.post.albumClass">
					<a v-for="(photo, $index) in $page.post.gallery" :key="$index" :href="photo.full.src" :title="photo.title" data-fslightbox="gallery" class="block overflow-hidden transition-all duration-300 ease-in-out border border-white border-solid rounded-md shadow-sm opacity-100 md:h-40 lg:h-64 hover:opacity-75 hover:border-accent hover:shadow-lg image">
						<g-image :src="photo.thumb.src"  :alt="photo.alt" width="250" height="100" class="object-cover w-full h-full rounded-md" />
					</a>
				</div>
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

export default {
	components: {
		NavWork
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
				class: "work single"
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
		gallery {
			thumb
			full
			alt
			title
		}
		launch_date(format: "MMMM, YYYY")
		excerpt
		content
		path
	}
}
</page-query>