<template>
	<Work :sidebar="true" :top="false" :bottom="true">
		<article class="px-10 mb-6 md:mb-10"> 
			<div class="content">
				<h1 class="mb-5">{{ $page.post.title }}</h1>
				<p class="mb-5">{{ $page.post.excerpt }}</p>
				<p class="mb-10 mt-10"><a v-if="$page.post.status === 'Online'" :href="$page.post.url" target="_blank" class="btn btn-large btn-primary">View the site <img src="/external.svg" class="inline-block w-3 h-3" /></a></p>
				
				<div class="w-full pt-6 my-5">
					<ul class="grid grid-cols-2 p-0 m-0 mb-6 reset">
						<li v-if="$page.post.company" class="p-0 m-0 mb-3 truncate"><strong class="block">Company</strong>{{ $page.post.company }}</li>
						<li v-if="$page.post.contact" class="p-0 m-0 mb-3"><strong class="block">Contact</strong>{{ $page.post.contact }}</li>
						<li v-if="$page.post.launch_date" class="p-0 m-0 mb-3"><strong class="block">Date</strong>{{ $page.post.launch_date }}</span></li>
						<li v-if="$page.post.duration" class="p-0 m-0 mb-3"><strong class="block">Duration</strong>{{ $page.post.duration }}</li>
						<li v-if="$page.post.url" class="p-0 m-0 mb-3 truncate"><strong class="block">Url</strong><a :href="$page.post.url" class="font-normal" target="_blank" rel="nofollow noopener">{{ $page.post.url }}</a></li>
						<li v-if="$page.post.project_type" class="p-0 m-0"><strong class="block">Type</strong>{{ $page.post.project_type }}</li>
						<li v-if="$page.post.status" class="p-0 m-0"><strong class="block">Status</strong>{{ $page.post.status }}</li>
					</ul>
				</div>

				<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
					<div v-if="$page.post.services">
						<h2 class="text-base font-bold my-3">Skills Used</h2>
						<ul class="text-lg">
							<li v-for="service in $page.post.services" :key="service">{{ service }}</li>
						</ul>
					</div>
					<div v-if="$page.post.stack">
						<h2 class="text-base font-bold my-3">Stack</h2>
						<ul class="flex flex-wrap items-center justify-start list-reset tags">
							<li v-for="stack in $page.post.stack" :key="stack">{{ stack }}</li>
						</ul>
					</div>
				</div>
				<div class="markdown pt-6 my-5" v-if="$page.post.content != false">
					<h2 class="text-base font-bold my-3">About</h2>
					<div class="text-xl" v-html="$page.post.content" />
				</div>
			</div>
			<div class="gallery">
				<div v-if="$page.post.gallery != ''" class="">
					<div class="grid w-full grid-cols-1 gap-6 mt-6 mb-6 album-grid md:mb-20 md:mt-10 md:grid-cols-3" :class="$page.post.albumClass">
						<a v-for="(photo, $index) in $page.post.gallery" :key="$index" :href="photo.full.src" :title="photo.title" data-fslightbox="gallery" class="bg-white shadow-sm block overflow-hidden transition-all duration-300 ease-in-out border border-gray-300 p-2 border-solid ring-4 ring-gray-200 ring-opacity-100 rounded-xl opacity-100 md:h-40 lg:h-64 hover:opacity-75 hover:border-accent hover:shadow-xl image">
							<g-image :src="photo.thumb.src"  :alt="photo.alt" width="250" height="100" fit="cover" class="object-cover w-full h-full rounded-md" />
						</a>
					</div>
				</div>
			</div>
		</article>
		
		<template slot="navgroup">Work</template>
		<template slot="secondary-nav">
			<NavWork />
		</template>
		<template slot="repo_link">
			<a href="https://github.com/smokeyfro/smokeyfro/blob/master/src/templates/Work.vue">Source</a>
		</template>
	</Work>
</template>

<script>
import NavWork from "@/components/NavWork";
import Work from "~/layouts/Work.vue";

export default {
	components: {
		NavWork,
		Work
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