<template>
	<article class="item">
		<a :href="`${post.path}`" class="image">
			<div class="card-image" v-if="post.image">
				<Browser :image="post.image" />
			</div>
			<div class="card-image" v-else>
				<Browser image="/default.jpg" :alt="post.title" />
			</div>
		</a>
		<div class="summary">
			<h2 class="mt-5 text-2xl">{{ post.title }}</h2>
			<p class="mb-3 text-base">{{ post.excerpt }}</p>
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
	props: {
		post: {
			type: Object,
			required: true
		}
	}
}
</script>