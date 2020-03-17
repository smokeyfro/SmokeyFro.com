<template>
	<article class="h-auto bg-gray-100 rounded-md md:rounded-none md:bg-transparent md:flex md:items-center md:justify-start md:item">
		<g-link :to="`${post.path}`" v-if="post.image" class="block overflow-hidden border featured-image rounded-t-md md:mr-10 md:w-1/2">
			<g-image :src="post.image.src" :alt="post.image.alt" class="w-full h-full" />
		</g-link>
		<div class="p-6 pt-4 md:w-1/3 summary md:p-0">
			<h2 class="mt-0 text-xl md:text-2xl lg:text-4xl">{{ post.title }}</h2>
			<p class="mb-3 text-md">{{ post.excerpt }}</p>
			<p class="mb-0"><g-link :to="`${post.path}`" class="text-base">Project details</g-link></p>
		</div>
	</article>
</template>

<script>
export default {
	props: {
		post: {
			type: Object,
			required: true
		}
	}
}
</script>