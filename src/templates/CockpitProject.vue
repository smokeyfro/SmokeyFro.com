<template>
	<Layout :sidebar="true" :top="true" :bottom="true">
		<template slot="top-shelf">
			<div class="pt-4 mx-6 md:pt-6 md:mx-10">
				<h1 v-if="$page.post.title">{{ $page.post.title }}</h1>
				<p v-if="$page.post.fields.excerpt">{{ $page.post.fields.excerpt }}</p>
				<p>contact: <span class="block h-2 text-transparent md:inline"> &middot; </span>{{ $page.post.fields.website }}</p>
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
				<!-- <div v-if="$page.post.stack">
					<h2>Stack</h2>
					<ul>
						<li v-for="stack in $page.post.stack" :key="stack">{{ stack }}</li>
					</ul>
				</div> -->
			</div>
			<div class="markdown" v-if="$page.post.fields.content != false">
				<h2>About the Project</h2>
				<div class="cols" v-html="$page.post.fields.content" />
			</div>
		</article>
		<template slot="bottom-shelf">
			<div v-if="$page.post.gallery != ''" class="mx-6 mb-24 md:mx-10">
				<h2>Screenshots</h2>
				<silentbox-group class="grid grid-cols-2 row-gap-6 col-gap-4 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gallery">
					<silentbox-item v-for="(photo, $index) in $page.post.fields.gallery" :key="$index" :src="`https://cockpit.smokeyfro.com/` + photo.path" class="border border-gray-300">
						<g-image v-if="photo.path" :src="`https://cockpit.smokeyfro.com/` + photo.path" width="265" height="200" />
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
			// title: `${this.$page.post.title}`,
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
	post: cockpitProjects(path: $path) {
		title
		slug
		path
		fields {
			excerpt
			content
			highlights
			website
			image {
				path
			}
			gallery {
				path
			}
		}
	}
}
</page-query>