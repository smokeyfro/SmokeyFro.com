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
			</div>
		</template>
	</Layout>
</template>

<page-query>
	query Work {
		posts: allWork (sortBy: "launch_date", order: DESC) {
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
					image
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

export default {
	components: {
		NavWork,
		Browser,
		ItemWork
	},
	metaInfo: {
		title: "",
		bodyAttrs: {
			class: "work"
		}
	}
};
</script>
