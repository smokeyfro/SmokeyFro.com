<template>
	<Layout :sidebar="true" :top="false" :bottom="true">
		<h1>Themes</h1>
		<p>My growing collection of themes for Gridsome and WordPress.</p>
		<template slot="bottom-shelf">
			<div class="grid mx-6 mt-10 mb-10 grid-gap-4 md:gap-8 grid-cols1 md:grid-cols-2 lg:grid-cols-3 md:mx-10">
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
					image(width: 364, height: 244, quality: 90)
					path
				}
			}
		}
	}
</page-query>