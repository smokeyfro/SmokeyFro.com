<template>
	<Layout :sidebar="true" :top="false" :bottom="true">
		<h1>Tutorials</h1>
		<p>I learn something new all the time and as such I like the share my discoveries in the hope that it will help someone else down the line.</p>
		<template slot="bottom-shelf">
			<div class="grid grid-cols-1 gap-6 px-6 mt-6 mb-0 md:mb-10 md:mt-10 md:grid-cols-2 md:gap-10 lg:grid-cols-3 md:px-10 lg:px-20">
				<article v-for="edge in $page.posts.edges" :key="edge.node.id">
					<!--<figure class="block h-24 mb-3 overflow-hidden rounded-md sm:h-24 md:h-30 lg:h-30 xl:h-40 md:mb-5 card-image" v-if="edge.node.feature_image">
						<g-link :to="`${edge.node.path}`" class="block transition-opacity duration-100 ease-out opacity-100 image hover:opacity-75">
							<g-image :src="edge.node.feature_image" width="364" height="244" fit="cover" />
						</g-link>
					</figure>-->
					<div>
						<h2 class="text-2xl" v-if="edge.node.title">
							{{ edge.node.title }}
						</h2>
						<p class="mb-2 text-base">{{ edge.node.excerpt }}</p>
						<p><g-link :to="`${edge.node.path}`" class="text-sm">Continue reading</g-link></p>
					</div>
				</article>
			</div>
		</template>
		<template slot="navgroup">
			Tutorials
		</template>
		<template slot="secondary-nav">
			<NavTuts />
		</template>
		<template slot="repo_link">
			<a href="https://github.com/smokeyfro/smokeyfro/blob/master/src/pages/Tuts/Index.vue">Source</a>
		</template>
	</Layout>
</template>

<script>
import NavTuts from "@/components/NavTuts";

export default {
	components: {
		NavTuts
	},
	metaInfo: {
		title: "Web development tutorials by SmokeyFro",
		bodyAttrs: {
			class: "tutorials index"
		}
	}
};
</script>
<page-query>
	query Tutorials {
		posts: allPost {
			totalCount
			pageInfo {
				totalPages
				currentPage
			}
			edges {
				node {
					id
					title
					tags
					topic {
						title
						path
					}
					path
					excerpt
				}
			}
		}
	}
</page-query>