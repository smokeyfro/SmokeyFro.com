<template>
	<Layout :sidebar="true" :image="false">
		<h1>Journal</h1>
		<p>Updates from the farm</p>
		<div class="journal">
			<article v-for="edge in $page.posts.edges" :key="edge.node.id">
				<p class="m-0 text-sm text-gray-600">{{ edge.node.date }}</p>
				<h2 class="mt-0 text-2xl" v-html="edge.node.title" />
				<p class="mb-3">{{ edge.node.excerpt }}</p>
				<p><g-link :to="`${edge.node.path}`" class="text-sm">Continue reading</g-link></p>
			</article>
		</div>
		<template slot="secondary-nav">
			<NavJournal />
		</template>
	</Layout>
</template>

<script>
import NavJournal from "@/components/NavJournal";

export default {
		components: {
				NavJournal
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
		posts: allGhostPage {
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