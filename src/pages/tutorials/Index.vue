<template>
	<Layout :sidebar="true" :top="false" :bottom="true">
		<h1>Tutorials</h1>
		<p>I learn something new all the time and as such I like the share my discoveries in the hope that it will help someone else down the line.</p>
		<template slot="bottom-shelf">
			<div class="grid mx-6 mt-10 mb-10 grid-gap-4 md:gap-8 grid-cols1 md:grid-cols-2 lg:grid-cols-3 md:mx-10">
				<article v-for="edge in $page.posts.edges" :key="edge.node.id">
					<figure class="md:mb-5 card-image" v-if="edge.node.coverImage">
						<g-link :to="`${edge.node.path}`" class="image">
							<g-image :src="edge.node.coverImage" width="364" height="244" fit="cover" />
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
			class: "tuts index"
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
					coverImage(width: 364, height: 244, quality: 90)
				}
			}
		}
	}
</page-query>