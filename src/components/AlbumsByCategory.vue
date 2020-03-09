<template>
    <div class="mb-10">
        <h2 class="mt-5 md:mt-10">{{ title }}</h2>
        <p class="text-base">{{ summary }}</p>
        <div class="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <article v-for="post in filteredAlbums" :key="post.node.id">
                <figure v-if="post.node.image">
                    <g-link :to="`${post.node.path}`" class="block h-40 mb-4 overflow-hidden rounded-md link">
                        <g-image :src="post.node.image.src" class="object-cover" />
                    </g-link>
                </figure>    
                <h2 class="text-2xl">{{ post.node.title }}</h2>
                <p class="text-base">{{ post.node.excerpt }}</p>
                <p><g-link :to="`${post.node.path}`">View Album</g-link></p>
            </article>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        'category': String,
        'title': String,
        'summary': String
    },
	computed: {
		filteredAlbums() {
			return this.$static.albums.edges.filter(edge => {
				return edge.node.category === this.category;
			});
		}
	}
};
</script>

<static-query>
query Albums {
	albums: allAlbum {
		edges {
			node {
				title
				category
                image
                photos {
                    thumb
                    full
                }
                title
                excerpt
				path
			}
		}
	}
}
</static-query>