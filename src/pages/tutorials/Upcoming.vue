<template>
	<Layout :sidebar="true" :top="false" :bottom="false">
		<h1>Upcoming tutorials</h1>
		<p>Below is a list of the tutorials I'll be writing as I get time. Don't feel like waiting? Sponsor a tutorial to get it bumped up the queue.</p>
		<div class="w-full mb-10 overflow-x-auto bg-white border rounded-sm">
			<table class="w-full max-w-full overflow-hidden text-left">
				<thead class="text-white bg-black">
					<th class="rounded-tl-lg">#</th>
					<th>Title</th>
					<th>Topic</th>
					<th>Difficulty</th>
					<th class="rounded-tr-lg">Tags</th>
				</thead>
				<tbody>
					<tr v-for="(edge, $index) in $page.upcoming.edges" :key="edge.node.id">
						<td width="1%" class="text-xs text-gray-600 odd:bg-white even:bg-gray-200">#{{ $index + 1 }}</td>
						<td class="odd:bg-white even:bg-gray-200" width="30%"><span class="truncate">{{ edge.node.title }}</span></td>
						<td width="10%" class="text-sm odd:bg-white even:bg-gray-200">{{ edge.node.topic }}</td>
						<td width="9%" class="text-sm odd:bg-white even:bg-gray-200">{{ edge.node.level }}</td>
						<td width="10%" class="text-sm text-gray-600 odd:bg-white even:bg-gray-200"><span class="truncate">{{ edge.node.tags }}</span></td>
					</tr>
				</tbody>
			</table>
		</div>
		<template slot="navgroup">Tutorials</template>
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
	// stored: {
	// 	selectedTut: {
	// 		type: String,
	// 		key: 'selected-tut',
	// 		default: false
	// 	}
	// },
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
					topic
					tags
					level
					amount
				}
			}
		}
	}
</page-query>

<style>
.app main table tr:hover td:nth-of-type(odd) {
    background: #ffc8003b;
}
.app main table tr:hover td:nth-of-type(even) {
    background: #ffc80057;
}
@media ( max-width: 1200px ) {
	.upcoming main > div {
		padding-right: 0;
	}

}
</style>