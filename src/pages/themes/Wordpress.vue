<template>
	<Layout :sidebar="true" :top="false" :bottom="true">
		<h1>WordPress</h1>
		<p>These are the free WordPress themes I created using Beans that were previously available on ThemeButler.com</p> 
		<template slot="bottom-shelf">
			<div class="grid grid-cols-2 gap-6 mx-6 mt-10 mb-10 md:gap-8 lg:grid-cols-3 md:mx-10">
				<ItemTheme :post="edge.node" v-for="edge in $page.posts.edges" :key="edge.node.id" />
			</div>
		</template>
		<template slot="navgroup">
			Freebies
		</template>
		<template slot="secondary-nav">
			<NavThemes />
		</template>
		<template slot="repo_link">
			<a href="https://github.com/smokeyfro/smokeyfro/blob/master/src/pages/Themes/Wordpress.vue">Source</a>
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
		title: "WordPress themes by SmokeyFro",
		bodyAttrs: {
			class: "themes wordpress"
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