<template>
	<Layout :sidebar="true" :top="false" :bottom="true">
		<h1>Photos</h1>
		<p>Here are some recent snaps on Instagram. Follow <a href="https://instagram.com/smokeyfro" target="_blank" rel="noopener" title="Follow me on Instagram">@SmokeyFro</a> for more.</p>
		<template slot="bottom-shelf">
			<div v-if="$page.posts.edges" class="mt-4 lg:mt-16">
				<div>
					<button @click="toggler = !toggler">
					Toggle Lightbox
					</button>

					<ClientOnly>
						<FsLightbox
						:toggler="toggler"
						:sources="$page.posts.edges"
						:showThumbsOnMount="true"
						/>
					</ClientOnly>
				</div>
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
			toggler: false,
			options : {
				closeText : 'X'
			}
		}
	}
};
</script>