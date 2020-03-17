<template>
    <div class="theme-index">
        <div class="grid grid-cols-1 gap-6 mx-6 mt-6 mb-6 md:mb-20 md:mt-10 md:grid-cols-2 md:gap-10 lg:grid-cols-3 md:mx-10 lg:mx-20">
            <ItemTheme :post="edge.node" v-for="edge in $static.posts.edges" :key="edge.node.id" />
        </div>
    </div>
</template>
<script>
import ItemTheme from "@/components/ItemTheme"

export default {
	components: {
        ItemTheme,
        
    }
}
</script>
<static-query>
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
					thumb
					path
				}
			}
		}
	}
</static-query>