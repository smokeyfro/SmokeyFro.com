<template>
	<Layout :sidebar="true" :top="false" :bottom="false">
		<h1>Upcoming tutorials</h1>
		<p>Below is a list of the tutorials I'll be writing as I get time. Don't feel like waiting? Sponsor a tutorial to get it bumped up the queue.</p>
		<table class="w-full mb-10 overflow-hidden text-left bg-white border rounded-sm shadow-lg">
			<thead class="text-white bg-black">
				<th class="rounded-tl-lg">#</th>
				<th>Title</th>
				<th>Topic</th>
				<th>Difficulty</th>
				<th class="rounded-tr-lg">Tags</th>
			</thead>
			<!-- <tfoot>
				<td colspan="4"></td>
			</tfoot> -->
			<tbody>
				<tr v-for="(edge, $index) in $page.upcoming.edges" :key="edge.node.id">
					<td class="w-10 text-xs text-gray-600"><span class="">#{{ $index + 1 }}</span></td>
					<td>{{ edge.node.title }}</td>
					<td class="text-sm">{{ edge.node.topic }}</td>
					<td class="text-sm">{{ edge.node.level }}</td>
					<td class="text-sm text-gray-600">{{ edge.node.tags }}</td>
				</tr>
			</tbody>
		</table>
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