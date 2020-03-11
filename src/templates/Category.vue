<template>
	<Layout :sidebar="true" :top="false" :bottom="true">
		<h1>{{ $page.category.belongsTo.totalCount }} <span v-if="$page.category.belongsTo.totalCount > 1">albums</span> <span v-if="$page.category.belongsTo.totalCount == 1">album</span> filed under <mark class="p-3 py-1 bg-yellow-200">{{ $page.category.title }}</mark></h1>
		<template slot="bottom-shelf">
            <div class="grid grid-cols-1 gap-6 mx-6 mt-6 mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:mx-20 md:mx-10">
			<article v-for="post in $page.category.belongsTo.edges" :key="post.node.id">
                <figure v-if="post.node.image" class="w-full h-auto m-0">
                    <g-link :to="`${post.node.path}`" class="block h-32 mb-2 overflow-hidden transition-all duration-300 ease-in-out border border-white border-solid rounded-md shadow-sm opacity-100 sm:mb-4 link hover:opacity-75 hover:border-accent hover:shadow-lg">
                        <g-image :src="post.node.image.src" class="object-cover w-full h-full" />
                    </g-link>
                </figure>
                <div class="flex items-center justify-between">
                    <h2 class="m-0 text-lg">{{ post.node.title }}</h2>
                    <span class="text-xs bg-gray-100 rounded-md">{{ post.node.photos.length }} Images</span>
                </div>
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
                        photos {
                            thumb
                            full
                        }
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
