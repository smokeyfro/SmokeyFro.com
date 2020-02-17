<template>
	<Layout :sidebar="true" :top="false" :bottom="true" class="max-width-none">
		<h1>Selected Works</h1>
		<p>A few examples of my work that showcase my overall design style and the types of projects I've worked on.</p>
		<template slot="secondary-nav">
			<NavWork />
		</template>
		<template slot="bottom-shelf">
			<div class="grid gap-8 mx-6 mt-10 mb-10 md:gap-8 grid-cols1 md:grid-cols-2 lg:grid-cols-3 md:mx-10">
				<ItemWork :post="edge.node" v-for="edge in $page.posts.edges" :key="edge.node.id" />
				<!-- <div v-if="$page.posts.pageInfo.currentPage === 3" class="flex flex-col items-center justify-center p-10 bg-gray-100">
					<h2>End of the line!</h2>
					<p class="text-center">Curious for more? Explore my side-projects</p>
					<p><g-link to="/work/projects">Check them out</g-link></p>
				</div> -->
			</div>
		    <pagination base="/work" :info="$page.posts.pageInfo" v-if="$page.posts.pageInfo.totalPages > 1" />
		</template>
	</Layout>
</template>
<page-query>
	query Work ($page: Int) {
		posts: allWork (sortBy: "launch_date", order: DESC, page: $page, perPage: 6) @paginate {
			totalCount
			pageInfo {
				totalPages
				currentPage
			}
			edges {
				node {
					title
					content
					path
					image(width: 364, height: 200, quality: 90, fit: cover)
					excerpt
					launch_date
					project_type
					services
					status
				}
			}
		}
	}
</page-query>

<script>
import NavWork from "~/components/NavWork.vue";
import Browser from "@/components/Browser";
import ItemWork from "@/components/ItemWork";
import Pagination from '@/components/Pagination'

export default {
	components: {
		NavWork,
		Browser,
		ItemWork,
		Pagination
	},
	metaInfo: {
		title: "",
		bodyAttrs: {
			class: "work"
		}
	}
};
</script>
