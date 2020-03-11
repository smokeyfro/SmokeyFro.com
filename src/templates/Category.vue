<template>
	<Layout :sidebar="true" :top="false" :bottom="true">
		<h1>{{ $page.category.belongsTo.totalCount }} <span v-if="$page.category.belongsTo.totalCount > 1">albums</span> <span v-if="$page.category.belongsTo.totalCount == 1">album</span> filed under <mark class="p-3 py-1 bg-yellow-200">{{ $page.category.title }}</mark></h1>
		<template slot="bottom-shelf">
		<div class="grid mx-6 mt-10 mb-10 grid-gap-4 md:gap-8 grid-cols1 md:grid-cols-2 lg:grid-cols-3 md:mx-10 lg:mx-20">
			<article v-for="edge in $page.category.belongsTo.edges" :key="edge.node.id">
				<figure class="md:mb-5 card-image" v-if="edge.node.coverImage">
					<g-link :to="`${edge.node.path}`" class="image">
						<g-image :src="edge.node.coverImage" width="364" height="244" fit="cover" />
					</g-link>
				</figure>
				<h2 class="mt-3 text-2xl" v-if="edge.node.title">
					{{ edge.node.title }}
				</h2>
				<p class="mb-2 text-base">{{ edge.node.description }}</p>
				<p><g-link :to="`${edge.node.path}`" class="text-sm">Continue reading</g-link></p>
			</article>
		</div>
		</template>
		<template slot="navgroup">
			Tuts
		</template>
		<template slot="secondary-nav">
			<NavAbout />
		</template>
		<template slot="repo_link">
			<a href="https://github.com/smokeyfro/smokeyfro/blob/master/src/pages/work/Rates.vue">Source</a>
		</template>
	</Layout>
</template>

<page-query>
query Category ($id: ID!) {
	category (id: $id) {
		title
		belongsTo {
			totalCount
			edges {
				node {
					...on Album {
						id
						title
						category {
							id
							title
							path
						}
						path
						excerpt
						image
					}
				}
			}
		}
	}
}
</page-query>

<script>
import NavAbout from "@/components/NavAbout";

export default {
	components: {
		NavAbout
	},
	metaInfo: {
		title: "Album Categories",
		bodyAttrs: {
			class: "about photos category"
		}
	}
}
</script>
