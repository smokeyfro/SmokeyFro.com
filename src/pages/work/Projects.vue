<template>
	<Layout :sidebar="true" :top="false" :bottom="true">
		<h1>Side Projects</h1>
		<p>I believe in the importance of side-projects as a way to hone my skills and maintain real-world projects.</p>
		<template slot="secondary-nav">
			<NavWork />
		</template>
		<template slot="bottom-shelf">
			<article class="mb-2" v-for="edge in $page.posts.edges" :key="edge.node.id">
					<g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
			</article>

			<div class="grid gap-8 mx-6 mt-10 mb-10 md:gap-8 grid-cols1 md:grid-cols-2 lg:grid-cols-3 md:mx-10 lg:mx-20">
				<ItemWork :post="edge.node" v-for="edge in $page.posts.edges" :key="edge.node.id" />
			</div>
		</template>
	</Layout>
</template>

<page-query>
	query Projects {
		posts: allProject {
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
					thumb
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
	data() {
		return {
		galleryGridClasses: String
		}
	},
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