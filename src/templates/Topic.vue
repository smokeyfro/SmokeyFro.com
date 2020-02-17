<template>
	<Layout :sidebar="true" :top="false" :bottom="false">
		<h1>{{ $page.topic.belongsTo.totalCount }} <span v-if="$page.topic.belongsTo.totalCount > 1">tutorials</span> <span v-if="$page.topic.belongsTo.totalCount == 1">tutorial</span> about <mark>{{ $page.topic.title }}</mark></h1>
		<p v-if="$page.topic.description">{{ $page.topic.description }}</p>
		<div class="grid tuts grid-3">
			<article v-for="edge in $page.topic.belongsTo.edges" :key="edge.node.id">
				<figure>
					<g-link :to="`${edge.node.path}`">
						<g-image :src="edge.node.coverImage" />
					</g-link>
				</figure>
				<div>
					<h2>
						<g-link :to="`${edge.node.path}`">{{ edge.node.title }}</g-link>
					</h2>
					<p><span v-if="edge.node.primary_tag.title">Posted in <a :href="edge.node.primary_tag.path" class="underline">{{ edge.node.primary_tag.title }}</a></span></p> 
					<p>{{ edge.node.description }}</p>
				</div>
			</article>
		</div>
		<template slot="navgroup">
			Tuts
		</template>
		<template slot="secondary-nav">
			<NavTuts />
		</template>
		<template slot="repo_link">
			<a href="https://github.com/smokeyfro/smokeyfro/blob/master/src/pages/work/Rates.vue">Source</a>
		</template>
	</Layout>
</template>

<page-query>
query Tag ($id: ID!) {
	topic: ghostTag (id: $id) {
		title: name
		belongsTo {
				totalCount
				edges {
						node {
						...on GhostPost {
								id
								title
								tags {
									id
									title: name
									path
								}
								primary_tag {
									title: name
									path
								}
								path
								description: excerpt
								coverImage: feature_image
						}
						}
			}
		}
	}
}
</page-query>

<script>
import NavTuts from "@/components/NavTuts";

export default {
	components: {
		NavTuts
	},
	computed: {
		postCount: false
	},
	metaInfo: {
		title: "Topic",
		bodyAttrs: {
			class: "tuts index"
		}
	}
}
</script>

<style scoped>
h1 strong:before {
		content: '#';
}
mark {
		background: var(--accent-color);
		padding: 0 25px 7px;
		display: inline-block;
		border-radius: 2px;
		/* font-size: 13px; */
		margin-left: 5px;
		line-height: 1.5;
		font-weight: bold;
		color: #111;
}
.tuts {
	grid-gap: 40px;
	padding-bottom: 4rem;
}
.tuts h2 {
	font-size: 1.5rem;
	margin-bottom: 0;
}
.tuts p:first-of-type {
	margin-top: 0;
	color: #555;
	font-size: 1rem;
}
.tuts p:first-of-type a{
	line-height: 1;
	margin-right: 5px;
	font-weight: bold;
	text-transform: uppercase;
	border-radius: 2px;
	font-size: .9rem;
	display: inline-block;
}
.tuts p:first-of-type a:before{
	content: '#';
}
.tuts figure {
	margin: 0;
	height: 200px;
	overflow: hidden;
}

.grid {
	grid-gap: 40px;
}
.grid h2 {
	font-size: 1.5rem;
	margin-bottom: .5rem;
}
.grid p:first-of-type {
	margin-top: 0;
	color: #555;
	font-size: .7rem;
}
.grid p:first-of-type a {
	line-height: 1;
	margin-right: 5px;
	font-weight: bold;
	text-transform: uppercase;
	border-radius: 2px;
	font-size: .7rem;
	display: inline-block;
}
.grid p:first-of-type a:before{
	content: '#';
}
.grid figure {
	margin: 0;
	height: 200px;
	overflow: hidden;
}
</style>