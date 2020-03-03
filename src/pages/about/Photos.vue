<template>
	<Layout :sidebar="true" :top="false" :bottom="true">
		<h1>Photos</h1>
		<p>Here are some recent snaps on Instagram. Follow @SmokeyFro for more.</p>
		<template slot="bottom-shelf">
			<div v-if="$page.posts.edges" class="mt-4lg:mt-16">
				<silentbox-group class="grid grid-cols-3 gap-1 gallery">
						<silentbox-item v-for="edge in $page.posts.edges" :key="edge.node.id" :src="edge.node.display_url" :description="edge.node.title">
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
		posts: allPhoto{
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

export default {
	components: {
		NavAbout
	},
	metaInfo: {
		title: "",
		bodyAttrs: {
			class: "photos"
		}
	}
};
</script>
<style src="../../css/pages/gallery.css" />