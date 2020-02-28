<template>
	<Layout :sidebar="true" :top="false" :bottom="true">
		<h1>Themes</h1>
		<p>My growing collection of themes for Gridsome and WordPress.</p>
		<template slot="bottom-shelf">
			<div class="grid grid-cols-1 gap-6 mx-6 mt-10 mb-20 md:grid-cols-2 md:gap-10 lg:grid-cols-3 md:mx-10 lg:mx-20">
				<ItemTheme :post="edge.node" v-for="edge in $page.posts.edges" :key="edge.node.id" />
			</div>
		</template>
		<template slot="navgroup">
			Themes
		</template>
				<template slot="secondary-nav">
			<NavThemes />
		</template>
		<template slot="repo_link">
		<a href="https://github.com/smokeyfro/smokeyfro/blob/master/src/pages/Themes/Index.vue">Source</a>
		</template>
	</Layout>
</template>

<script>
import NavThemes from "@/components/NavThemes";
import ItemTheme from "@/components/ItemTheme";

export default {
	components: {
		NavThemes,
		ItemTheme
	},
	metaInfo: {
		title: "Themes by SmokeyFro",
		bodyAttrs: {
			class: "themes index"
		}
	}
};
</script>
<page-query>
	query Themes {
	posts: allTheme (sortBy: "order", order: ASC) {
			totalCount
			edges {
				node {
					id
					title
					content
					excerpt
					platform
					group
					demo_url
					type
					image
					path
				}
			}
		}
	}
</page-query>
