<template>
	<Layout :sidebar="true" :top="false" :bottom="true">
		<h1 class="title">Services</h1>
		<p class="lead">Below is a list of the services I offer. These days I'm mostly focussed on building JAMstack sites, but I am also open to design and theming projects.</p>
		<template slot="bottom-shelf">
			<div class="grid grid-cols-1 gap-8 px-6 mt-10 mb-16 md:grid-cols-2 md:gap-8 lg:grid-cols-3 md:px-10 lg:px-20">
				<div v-for="edge in $page.posts.edges" :key="edge.node.id">
					<div class="flex items-center mb-3 md:m-0 md:block">
						<figure v-if="edge.node.icon" class="w-8 md:w-10 lg:w-16">
							<g-image :src="edge.node.icon" width="20" height="20" :alt="edge.node.title" immediate="true" />
						</figure>
						<h2 class="pl-3 m-0 text-2xl md:p-0 md:my-3">{{ edge.node.title }}</h2>
					</div>
					<p class="m-0" v-html="edge.node.excerpt" />
				</div>
			</div>
			<p class="px-6 mb-12 text-center md:px-10 lg:px-20">Available for new projects. <g-link to="/contact" class="" title="Contact me to discuss your project">Enquire within &rarr;</g-link></p>
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
			class: "work services"
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