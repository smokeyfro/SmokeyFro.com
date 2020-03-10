<template>
	<Layout :sidebar="true" :top="false" :bottom="true">
		<h1>Photos</h1>
		<p>I've always had a fascination with photography and as such can usually be found happy snapping away. See the world through my lens.</p>
		<div class="mt-10 mb-20">
			<AlbumsByCategory category="farm" title="Forest Glade Farm" summary="My small piece of paradise, where I live off-grid, grow my own food and slowly-but-surely, edge closer to being full self-sufficient." />
			<!-- <AlbumsByCategory category="south-africa" title="South Africa" summary="Photos taken from around the farm." />
			<AlbumsByCategory category="travel" title="Travel" summary="Photos taken from around the farm." /> -->
		</div>
		<template slot="secondary-nav">
			<NavAbout />
		</template>
	</Layout>
</template>

<script>
import NavAbout from "~/components/NavAbout.vue";
import AlbumsByCategory from "@/components/AlbumsByCategory";

export default {
	components: {
		NavAbout,
		AlbumsByCategory
	},
	metaInfo: {
		title: "",
		bodyAttrs: {
			class: "about photos"
		}
	}
};
</script>