<template>
	<article class="item" :class="post.group">
		<g-link :to="`${post.path}`" class="block overflow-hidden border-2 border-white rounded-md shadow-md image">
			<div class="relative flex items-center justify-center w-full h-64 card-image" v-if="post.image">
				<g-image :src="post.image" class="absolute top-0 bottom-0 left-0 right-0 block object-cover w-full h-64" />
				<h2 class="relative z-20 px-3 py-1 m-0 mt-5 text-2xl rounded-md shadow-md bg-accent">{{ post.title }}</h2>
			</div>
		</g-link>
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

<style lang="postcss" scoped>
.image {
	img {
		filter: blur(2px);
		transition: all .3s ease-out;
		&:hover {
			filter: blur(0);
		}
	}
}
</style>