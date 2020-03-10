<template>
    <div class="p-4 mb-6 bg-gray-100 rounded-md md:mb-10 md:p-8">
        <h2 class="m-0 leading-none">{{ title }}</h2>
        <p class="mt-2 text-base">{{ summary }}</p>
        <div class="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-4">
            <article v-for="post in filteredAlbums" :key="post.node.id">
                <figure v-if="post.node.image" class="w-full h-auto m-0">
                    <g-link :to="`${post.node.path}`" class="block h-32 mb-2 overflow-hidden transition-all duration-300 ease-in-out border border-white border-solid rounded-md shadow-sm opacity-100 sm:mb-4 link hover:opacity-75 hover:border-accent hover:shadow-lg">
                        <g-image :src="post.node.image.src" class="object-cover w-full h-full" />
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