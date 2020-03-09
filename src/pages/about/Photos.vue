<template>
	<Layout :sidebar="true" :top="false" :bottom="true">
		<h1>Photos</h1>
		<p>Here are some recent snaps on Instagram. Follow <a href="https://instagram.com/smokeyfro" target="_blank" rel="noopener" title="Follow me on Instagram">@SmokeyFro</a> for more.</p>
		<div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
			<article v-for="post in $page.posts.edges" :key="post.node.id">
				<g-image v-if="post.node.image" :src="post.node.image" />
				<h2>{{ post.node.title }}</h2>
				<p>{{ post.node.excerpt }}</p>
				<p><g-link :to="`${post.node.path}`">View Album</g-link></p>
			</article>
		</div>
		<template slot="secondary-nav">
			<NavAbout />
		</template>
	</Layout>
</template>

<page-query>
	query Photos{
		posts: allAlbum {
			edges {
				node {
					title
					excerpt
					image
					id
					path
				}
			}
		}
	}
</page-query>

<script>
import NavAbout from "~/components/NavAbout.vue";

export default {
	components: {
	    FsLightbox: () => import('fslightbox-vue'),
		NavAbout
	},
	metaInfo: {
		title: "",
		bodyAttrs: {
			class: "about photos"
		}
	},
	data() {
		return {
			photos: this.$page.posts.edges.node.display_url,
			toggler: false,
			options : {
				closeText : 'X'
			}
		}
	}
};
</script>