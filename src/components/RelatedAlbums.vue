<template>
    <div>
        <h2>More in <strong>{{ this.category }}</strong></h2>
        <div class="grid w-full grid-cols-2 gap-4 mt-2 mb-6 md:mb-20 md:mt-6 md:grid-cols-4">
            <figure v-for="edge in filteredAlbums" :key="edge.node.id" class="block m-0">
                <g-link class="image" :to="edge.node.path">
                    <g-image :src="edge.node.image" width="250" class="object-cover w-full h-32 overflow-hidden rounded-md" />
                </g-link>
                <figcaption class="mt-3 font-bold"><g-link :to="edge.node.path">{{ edge.node.title }}</g-link></figcaption>
            </figure>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        'category': String,
        'id': String
    },
	computed: {
		filteredAlbums() {
			return this.$static.albums.edges.filter(edge => {
				return edge.node.category.title === this.category;
			});
        },
        excludeId() {
			return this.$static.albums.edges.filter(edge => {
				return edge.node.id != this.id;
			});
		}
	}
};
</script>

<static-query>
query FilteredTuts {
	albums: allAlbum {
		edges {
			node {
				title
                image
				category {
					title
				}
				path
			}
		}
	}
}
</static-query>