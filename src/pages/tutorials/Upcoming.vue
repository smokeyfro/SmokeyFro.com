<template>
	<Layout :sidebar="true" :top="false" :bottom="true">
		<h1>Upcoming</h1>
		<p>Below is a list of the tutorials I'll be writing as I get time. Don't feel like waiting? Sponsor a tutorial to get it bumped up the queue.</p>
		<template slot="navgroup">Tutorials</template>
		<template slot="bottom-shelf">
			<ul class="grid grid-cols-1 gap-0 mx-10 mt-8 reset md:grid-cols-2">
				<li class="mb-4" v-for="edge in $page.upcoming.edges" :key="edge.node.id">
					<span class="block text-lg font-semibold">{{ edge.node.title }}</span>
				</li>
			</ul>
		</template>
		<template slot="secondary-nav">
			<NavTuts />
		</template>
		<template slot="repo_link">
			<a href="https://github.com/smokeyfro/smokeyfro/blob/master/src/pages/tutorials/Upcoming.vue">Source</a>
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
		title: "Upcoming web development tutorials by SmokeyFro",
		bodyAttrs: {
			class: "tuts upcoming"
		}
	}
};
</script>
<page-query>
	query UpcomingTutorials{
		upcoming: allUpcomingTuts {
			totalCount
			edges {
				node {
					id
					title
				}
			}
		}
	}
</page-query>
<style>
@media (min-width: 768px) {
	.upcoming.grid {
		grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
	}
}
.upcoming > li {
	border-color: #ffd166;
}
</style>