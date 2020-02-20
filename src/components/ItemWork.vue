<template>
	<article class="item" :class="post.fields.group">
		<g-link :to="`${post.path}`" class="image">
			<div class="card-image" v-if="post.fields.coverImage">
				<Browser :image="post.fields.coverImage" />
			</div>
		</g-link>
		<div class="summary">
			<h2 class="mt-5 text-2xl">{{ post.title }}</h2>
			<p class="mb-3">{{ post.fields.excerpt }}</p>
			<p class="mb-3">{{ post.fields.status }}</p>
			<p class="mb-0"><g-link :to="`${post.path}`" class="text-base">Project details</g-link></p>
		</div>
	</article>
</template>

<script>
import Browser from "@/components/Browser";
export default {
	components: {
		Browser
	},
	computed: {
		imageUrl() {
			let imagePath = this.post.fields.image.path
			return `https://cockpit.smokeyfro.com/` + imagePath
		}
	},
	props: {
		post: {
			type: Object,
			required: true
		}
	}
}
</script>