<template>
	<GridIndex>
		<template slot="title">Selected Works</template>
		<template slot="excerpt">A few examples of my work that showcase my overall design style and the types of projects I've worked on.</template>
		<template slot="loop"><ItemWork :post="edge.node" v-for="edge in $page.posts.edges" :key="edge.node.id" /></template>
		<pagination base="/work" :info="$page.posts.pageInfo" v-if="$page.posts.pageInfo.totalPages > 1" />
	</GridIndex>
</template>
<page-query>
	query Work {
		posts: allCockpitWork (sortBy: "date", order: ASC) {
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
	import Pagination from '@/components/Pagination'
	import GridIndex from '@/layouts/GridIndex'
	import ItemWork from "~/components/ItemWork.vue";

	export default {
		components: {
			Pagination,
			GridIndex,
			ItemWork
		},
		metaInfo: {
			title: "Selected works by SmokeyFro",
			bodyAttrs: {
				class: ""
			}
		}
	};
</script>
