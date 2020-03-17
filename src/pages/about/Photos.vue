<template>
	<Layout :sidebar="true" :top="false" :bottom="true">
		<h1>Photos</h1>
		<p>I've had a fascination with photography since a young age and while I'd never consider myself more than an amateur, it's a past time I enjoy and so I pursue it.</p>
		<div class="mt-6 mb-0 photos-wrap md:mt-10 md:mb-20">
			<AlbumsByCategory category="farm" title="Forest Glade Farm" summary="My small piece of paradise, where I live off-grid, grow my own food and slowly-but-surely edge closer to being fully self-sufficient." />
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