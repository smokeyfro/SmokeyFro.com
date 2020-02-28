<template>
    <div>
        <h2 class="mt-5 md:mt-10">{{ title }}</h2>
        <p class="text-base">{{ summary }}</p>
        <article class="mb-2" v-for="edge in filteredTuts" :key="edge.node.id">
            <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
        </article>
    </div>
</template>

<script>
export default {
    props: {
        'tag': String,
        'title': String,
        'summary': String
    },
	computed: {
		filteredTuts() {
			return this.$static.tuts.edges.filter(edge => {
				return edge.node.primary_tag.slug === this.tag;
			});
		}
	}
};
</script>

<static-query>
query FilteredTuts {
	tuts: allGhostPost {
		edges {
			node {
				title
				primary_tag {
					name
					slug
					path
				}
				path
			}
		}
	}
}
</static-query>