<template>
	<Layout :sidebar="true" :top="false" :bottom="false">
		<h1>Tutorial topics</h1>
		<p class="mt-6 mb-0">Browse my web development tutorials by topic.</p>		
		<div class="grid grid-cols-1 gap-4 md:gap-10 md:grid-cols-2">
			<div>
				<TutsByTag tag="vue" title="Vue.js" summary="Vue is my JavaScript library of choice these days and I'm reading every book I can find. Expect more here soon." />
				<TutsByTag tag="wordpress" title="WordPress" summary="I've been using WordPress for years and in that time I've learned a bunch of neat tricks, which I'll be sharing here." />
			</div>
			<div>
				<h2 class="md:mt-10 mb-6">Tags</h2>
				<ul class="flex flex-wrap m-0 reset">
					<li v-for="edge in filteredData" :key="edge.node.id" class="p-0 m-0 mb-4 mr-4 list-none ">
						<g-link :to="tagUrlPrefix +`${edge.node.slug}`" class="block px-4 pt-3 py-2 no-underline text-base text-gray-700 bg-gray-100 border-b-4 rounded-sm hover:border-accent link hover:bg-black hover:text-white">
							{{ edge.node.name }}
							<span class="ml-3 text-xs text-gray-500">{{ edge.node.belongsTo.totalCount }}</span>
						</g-link>
					</li>
				</ul>
			</div>
		</div>
		<template slot="navgroup">Tutorials</template>
		<template slot="secondary-nav">
			<NavTuts />
		</template>
		<template slot="repo_link">
			<a href="https://github.com/smokeyfro/smokeyfro/blob/master/src/pages/tutorials/Topics.vue">Source</a>
		</template>
	</Layout>
</template>

<script>
import NavTuts from "@/components/NavTuts";
import TutsByTag from "@/components/TutsByTag";

export default {
	components: {
		NavTuts,
		TutsByTag
	},
	data() {
		return {
			tagUrlPrefix: "/tutorials/topic/"
		};
	},
	computed: {
		filteredData() {
			return this.$page.tags.edges.filter(edge => {
				return edge.node.belongsTo.totalCount != 0;
			});
		}
	},
	metaInfo: {
		title: "Journal topics by SmokeyFro",
		bodyAttrs: {
			class: "journal topics"
		}
	}
};
</script>

<page-query>
query Tags {
	tags: allGhostTag {
		edges {
			node {
					id
					name
					slug
					belongsTo {
						totalCount
						edges {
							node {
								...on GhostPage {
									id
									title
									primary_tag {
										name
										path
									}
									path
									excerpt
								}
							}
						}
					}
			}
		}
	}
}
</page-query>