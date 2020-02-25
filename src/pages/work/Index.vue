<template>
	<Layout :sidebar="true" :top="false" :bottom="true" class="max-width-none">
		<h1>Selected Works</h1>
		<p>A few examples of my work that showcase my overall design style and the types of projects I've worked on.</p>
		<template slot="secondary-nav">
			<NavWork />
		</template>
		<template slot="bottom-shelf">
			<article class="mb-2" v-for="edge in $page.tuts.edges" :key="edge.node.id" v-if="edge.node.slug === 'winefolly'">
				<g-link :to="`${post.path}`" class="image">
					<div class="card-image" v-if="post.fields.image.path">
						<Browser :image="imageUrl" />
					</div>
				</g-link>
				<div class="summary">
					<h2 class="mt-5 text-2xl">{{ post.title }}</h2>
					<p class="mb-3">{{ post.fields.excerpt }}</p>
					<p class="mb-3">{{ post.fields.status }}</p>
					<p class="mb-0"><g-link :to="`${post.path}`" class="text-base">Project details</g-link></p>
				</div>
			</article>
			
			<div class="grid gap-8 mx-6 mt-10 mb-10 md:gap-8 grid-cols1 md:grid-cols-2 lg:grid-cols-3 md:mx-10 lg:mx-20 ">
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
