<template>
	<article class="item" :class="post.group">
		<g-link :to="`${post.path}`" class="image">
			<div class="card-image" v-if="post.image">
				<Browser :image="post.image" />
			</div>
		</g-link>
		<div class="summary">
			<h2 class="mt-5 text-2xl">{{ post.title }}</h2>
			<p class="mb-3">{{ post.excerpt }}</p>
			<p><g-link :to="`${post.path}`" class="text-base">Theme details</g-link></p>
		</div>
	</article>
</template>

<script>
import Browser from "@/components/Browser";
export default {
	components: {
		Browser
	},
	props: {
		post: {
			type: Object,
			required: true
		}
	}
}
</script>