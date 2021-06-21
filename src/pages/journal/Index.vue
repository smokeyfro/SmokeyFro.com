<template>
	<Journal :sidebar="true" :top="true" :bottom="false">
		<template slot="title">Journal</template>
		<template slot="excerpt">Updates about what I'm working on, books I'm reading, stuff I'm thinking about, news on the farm, product releases and more.</template>
		<template slot="content">
			<article v-for="edge in $page.posts.edges" :key="edge.node.id" class="mt-10 mb-12 ">
				<h2 v-html="edge.node.title" />
				<p class="mt-6 mb-8 text-lg">{{ edge.node.excerpt }}</p>
				<p><g-link :to="`${edge.node.path}`" class="btn btn-large btn-secondary">Continue reading</g-link></p>
			</article>
		</template>
	</Journal>
</template>

<script>
import Newsletter from "@/components/Newsletter";
import Journal from '@/layouts/Journal'

export default {
	components: {
		Newsletter,
		Journal
	},
	metaInfo: {
		title: "Random thoughts by SmokeyFro",
		bodyAttrs: {
			class: "journal"
		}
	}
};
</script>

<page-query>
	query Journal {
		posts: allGhostPost {
			edges {
				node {
					title
					date: published_at (format: "D MMMM, YYYY")
					path
					excerpt
				}
			}
		}
	}
</page-query>