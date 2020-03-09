<template>
	<Layout :sidebar="true" :top="false" :bottom="true">
		<h1>Photos</h1>
		<p>I've always had a fascination with photography and as such can usually be found happy snapping away. This is the world through my <strike>eyes</strike> lens.</p>
		<div class="mt-10 mb-20">
			<AlbumsByCategory category="farm" title="The Farm" summary="Photos taken from around the farm." />
			<AlbumsByCategory category="south-africa" title="South Africa" summary="Photos taken from around the farm." />
			<AlbumsByCategory category="travel" title="Travel" summary="Photos taken from around the farm." />
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