<template>
	<Layout :sidebar="true" :top="false" :bottom="true">
			<h1 class="title">Services</h1>
			<p class="lead">Below is a list of the usual services I offer. These days I'm mostly focussed on building JAM Stack sites, but will also take on design and theming projects too.</p>
			<template slot="bottom-shelf">
				<div class="grid grid-cols-2 gap-8 mx-6 mt-10 mb-16 md:gap-8 lg:grid-cols-3 md:mx-10">
					<div v-for="edge in $page.posts.edges" :key="edge.node.id">
						<figure v-if="edge.node.icon" class="w-16">
							<g-image :src="edge.node.icon" width="20" height="20" :alt="edge.node.title" />
						</figure>
						<h2 class="m-0 my-3 text-2xl">{{ edge.node.title }}</h2>
						<p class="m-0" v-html="edge.node.excerpt" />
					</div>
				</div>
			</template>
		<template slot="navgroup">
			Work
		</template>
		<template slot="secondary-nav">
			<NavWork />
		</template>
		<template slot="repo_link">
			<a href="https://github.com/smokeyfro/smokeyfro/blob/master/src/pages/work/Services.vue">Source</a>
		</template>
	</Layout>
</template>

<script>
import NavWork from "@/components/NavWork";

export default {
	components: {
		NavWork
	},
	metaInfo: {
		title: "Services provided by SmokeyFro",
		bodyAttrs: {
			class: "services"
		}
	}
};
</script>
<page-query>
	query Services{
		posts: allService (sortBy: "order", order: ASC) {
			edges {
				node {
					id
					title
					content
					excerpt
					icon
					path
				}
			}
		}
	}
</page-query>
