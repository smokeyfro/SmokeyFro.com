<template>
	<Layout :sidebar="true" :top="false" :bottom="false">
		<h1>Tutorial topics</h1>
		<p>Browse my web development tutorials by topic.</p>		
		<div class="grid grid-cols-1 gap-10 md:grid-cols-2">
			<div>
				<h2 class="mt-10">WordPress</h2>
				<p class="text-base">I've been using WordPress for years and in that time I've learned a bunch of neat tricks, which I'll be sharing here.</p>
				<article class="mb-2" v-for="edge in $page.tuts.edges" :key="edge.node.id" v-if="edge.node.primary_tag.name === 'wordpress'">
					<g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
				</article>

				<h2 class="mt-10">Vue.js</h2>
				<p class="text-base">Vue is my JavaScript library of choice these days and I'm reading every book I can find. Expect more here soon.</p>
				<article v-for="edge in $page.tuts.edges" :key="edge.node.id" v-if="edge.node.primary_tag.name === 'vuejs'">
					<g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
				</article>
			</div>
			<div>
				<h2 class="mt-10">Or browse by keyword</h2>
				<ul class="flex flex-wrap m-0 reset">
					<li v-for="edge in filteredData" :key="edge.node.id" class="p-0 m-0 mb-4 mr-4 list-none ">
						<g-link :to="tagUrlPrefix +`${edge.node.slug}`" class="block px-4 py-2 text-base text-gray-700 bg-gray-100 border-b-4 rounded-sm hover:border-accent link hover:bg-black hover:text-white">
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
		},
		wpTuts() {
			return this.$page.wordpress.edges.filter(edge => {
				return edge.node.primary_tag.slug === "wordpress";
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
	tuts: allGhostPost {
		edges {
			node {
				id
				title
				primary_tag {
					name
					slug
					path
				}
				path
			}
		}
	}
}
</page-query>