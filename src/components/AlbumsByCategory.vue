<template>
    <div class="px-8 py-8 mb-10 bg-gray-100 rounded-md">
        <h2 class="m-0 leading-none">{{ title }}</h2>
        <p class="mt-2 text-base">{{ summary }}</p>
        <div class="grid grid-cols-2 gap-6 mt-6 lg:grid-cols-4">
            <article v-for="post in filteredAlbums" :key="post.node.id">
                <figure v-if="post.node.image">
                    <g-link :to="`${post.node.path}`" class="block h-40 mb-4 overflow-hidden rounded-md link">
                        <g-image :src="post.node.image.src" class="object-cover" />
                    </g-link>
                </figure>
                <div class="flex items-center justify-between">
                    <h2 class="m-0 text-lg">{{ post.node.title }}</h2>
                    <span class="text-xs bg-gray-100 rounded-md">{{ post.node.photos.length }} Images</span>
                </div>
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
        },
        albumCount() {
            return this.$static.albums.edges.node.photos.length;
        }
	}
};
</script>

<static-query>
query Albums {
	albums: allAlbum {
        totalCount
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