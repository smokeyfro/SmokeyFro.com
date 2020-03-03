<template>
	<Layout :sidebar="true" :top="false" :bottom="false">
		<article class="mb-6 md:mb-10">
			<h1>{{ $page.post.title }}</h1>
			<p>{{ $page.post.excerpt }}</p>
			<p><a :href="$page.post.url" target="_blank">{{ $page.post.url }}</a></p>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
					<div v-if="$page.post.services" class="mr-10">
							<h2>Skills Used</h2>
							<ul>
									<li v-for="service in $page.post.services" :key="service" >
											{{ service }}
									</li>
							</ul>
					</div>
					<div class="stack" v-if="$page.post.stack">
							<h2>The Stack</h2>
							<ul>
									<li v-for="stack in $page.post.stack" :key="stack" >
											{{ stack }}
									</li>
							</ul>
					</div>
			</div>
			<div class="markdown" v-if="$page.post.content">
					<h2>About the Project</h2>
					<div v-html="$page.post.content" />
			</div>
			<!-- <div v-if="$page.post.gallery != ''">
				<h2>Screenshots</h2>
				<silentbox-group class="grid grid-cols-2 row-gap-6 col-gap-4 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gallery">
					<silentbox-item v-for="(photo, $index) in $page.post.gallery" :key="$index" :src="photo.full.src" :description="photo.title">
						<g-image v-if="photo.thumb.src" :src="photo.thumb" :alt="photo.alt" width="265" height="200" class="object-cover" />
					</silentbox-item>
				</silentbox-group>
				<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
					<a href="#" data-fslightbox v-for="(photo, $index) in $page.post.gallery" :key="$index" :src="photo.full.src" :description="photo.title" class="block overflow-hidden">
						<g-image :src="photo.thumb.src" :alt="photo.alt" width="265" height="200" class="object-cover h-40" />
					</a>
				</div>
				<button @click="toggler = !toggler">
					Toggle Lightbox
					</button>

				<ClientOnly>
					<FsLightbox
					:toggler="toggler"
					:sources="$page.post.testgallery"
					/>
				</ClientOnly>
			</div> -->
		</article>
		<template slot="navgroup">
			Work
		</template>
		<template slot="secondary-nav">
			<NavWork />
		</template>
		<template slot="repo_link">
			<a href="https://github.com/smokeyfro/smokeyfro/blob/master/src/pages/work/Rates.vue">Source</a>
		</template>
	</Layout>
</template>

<script>
import NavWork from "@/components/NavWork";
import Browser from '@/components/Browser';
import FsLightbox from "fslightbox-vue";

export default {
	components: {
		NavWork,
		Browser,
		FsLightbox 
		//FsLightbox: () => import('fslightbox-vue')
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
query Project ($path: String) {
	post: project(path: $path) {
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
		image
		testgallery
		gallery {
			thumb
			full
			alt
			title
		}
	}
}
</page-query>