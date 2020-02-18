<template>
	<Layout :sidebar="true" :top="false" :bottom="false">
		<h1>Topics</h1>
		<p>Browse my web development tutorials by topic.</p>
		<ul class="flex flex-wrap m-0 reset">
			<li v-for="edge in filteredData" :key="edge.node.id" class="p-0 m-0 mb-4 mr-4 list-none ">
				<g-link :to="tagUrlPrefix +`${edge.node.slug}`" class="block px-4 py-2 text-base text-gray-700 bg-gray-100 border-b-4 rounded-sm hover:border-accent link hover:bg-black hover:text-white">
					{{ edge.node.name }}
					<span class="ml-3 text-xs text-gray-500">{{ edge.node.belongsTo.totalCount }}</span>
				</g-link>
			</li>
		</ul>
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

export default {
	components: {
		NavTuts
	},
	data() {
		return {
			tagUrlPrefix: "/tuts/about/"
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
						name
						slug
						id
						belongsTo {
								totalCount
						}
				}
			}
		}
	}
</page-query>