<template>
	<GridIndex>
		<template slot="title">My Projects</template>
		<template slot="excerpt">I believe in the importance of side-projects as a way to hone my skills and maintain real-world projects.</template>
		<template slot="loop"><ItemProject :post="edge.node" v-for="edge in $page.posts.edges" :key="edge.node.id" /></template>
	</GridIndex>
</template>
<page-query>
	query Projects ($page: Int) {
		posts: allCockpitProjects (page: $page, perPage: 10, sortBy: "date", order: DESC ) {
			totalCount
			pageInfo {
				totalPages
				currentPage
			}
			edges {
				node {
					title
					path
					fields {
						excerpt
						image {
							path
						}
					}
				}
			}
		}
	}
</page-query>

<script>
	import GridIndex from '@/layouts/GridIndex'
	import ItemProject from "~/components/ItemProject.vue";

	export default {
		components: {
			GridIndex,
			ItemProject
		},
		metaInfo: {
			title: "Side projects by SmokeyFro",
			bodyAttrs: {
				class: "projects index"
			}
		}
	};
</script>
