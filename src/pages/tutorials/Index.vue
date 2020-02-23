<template>
	<Layout :sidebar="true" :top="false" :bottom="true">
		<h1>Tutorials</h1>
		<p>I learn something new all the time and as such I like the share my discoveries in the hope that it will help someone else down the line.</p>
		<template slot="bottom-shelf">
			<div class="grid grid-cols-2 gap-6 mx-6 mt-10 mb-10 md:gap-8 lg:grid-cols-3 md:mx-10">
				<article v-for="edge in $page.posts.edges" :key="edge.node.id">
					<figure class="block h-56 mb-3 overflow-hidden rounded-md md:mb-5 card-image" v-if="edge.node.feature_image">
						<g-link :to="`${edge.node.path}`" class="image">
							<g-image :src="edge.node.feature_image" width="364" height="244" fit="cover" />
						</g-link>
					</figure>
					<div>
						<h2 class="text-2xl" v-if="edge.node.title">
							{{ edge.node.title }}
						</h2>
						<p class="mb-2 text-base">{{ edge.node.description }}</p>
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
		posts: allGhostPost {
			totalCount
			pageInfo {
				totalPages
				currentPage
			}
			edges {
				node {
					id
					title
					tags {
						id
						title: name
						path
					}
					primary_tag {
						name
						path
					}
					path
					description: excerpt
					feature_image
				}
			}
		}
	}
</page-query>