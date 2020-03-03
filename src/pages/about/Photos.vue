<template>
	<Layout :sidebar="true" :top="false" :bottom="true">
		<h1>Photos</h1>
		<p>Here are some recent snaps on Instagram. Follow <a href="https://instagram.com/smokeyfro" target="_blank" rel="noopener" title="Follow me on Instagram">@SmokeyFro</a> for more.</p>
		<template slot="bottom-shelf">
			<div v-if="$page.posts.edges" class="mt-4 lg:mt-16">
				<silentbox-group class="grid grid-cols-2 gap-1 lg:grid-cols-3 gallery">
					<silentbox-item v-for="edge in $page.posts.edges" :key="edge.node.id" :src="edge.node.display_url" :description="edge.node.title" class="block h-40 overflow-hidden">
						<g-image v-if="edge.node.display_url" :src="edge.node.display_url" width="265" height="300" />
					</silentbox-item>
				</silentbox-group>
			</div>
		</template>
		<template slot="secondary-nav">
			<NavAbout />
		</template>
	</Layout>
</template>

<page-query>
	query Photos{
		posts: allPhoto {
			edges {
				node {
					display_url
				}
			}
		}
}
</page-query>

<script>
import NavAbout from "~/components/NavAbout.vue";
import VueSilentbox from 'vue-silentbox';

export default {
	components: {
		NavAbout,
		VueSilentbox
	},
	metaInfo: {
		title: "",
		bodyAttrs: {
			class: "photos"
		}
	}
};
</script>
<style src="../../css/lightbox.css" />
<style src="../../css/pages/gallery.css" />