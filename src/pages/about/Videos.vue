<template>
	<Layout :sidebar="true" :top="false" :bottom="true">
		<h1>Videos</h1>
		<p>I'm an amateur videographer and mostly shoot fauna and flora, wildlife, live music, food and festivals. Check out my gear list if you're interested.</p>
		<div v-if="$page.posts.edges">
			<silentbox-single class="video-item" v-for="edge in $page.posts.edges" :key="edge.node.id" :src="edge.node.video_url" :description="edge.node.excerpt">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
							<circle cx="12" cy="12" r="10"/>
							<path d="M10 8l6 4-6 4V8z"/>
					</svg>
					<h2 class="mt-0 ml-3 text-2xl">{{ edge.node.title }} <span class="ml-3 text-sm text-gray-600">{{ edge.node.duration }}</span></h2>
			</silentbox-single>
		</div>
		<template slot="secondary-nav">
			<NavAbout />
		</template>
	</Layout>
</template>

<page-query>
	query Videos ($page: Int) {
		posts: allVideo (page: $page, perPage: 6) @paginate {
			totalCount
			pageInfo {
				totalPages
				currentPage
			}
			edges {
				node {
					id
					title
					content
					excerpt
					duration
					video_url
					path
				}
			}
		}
	}
</page-query>

<script>
import NavAbout from "~/components/NavAbout.vue";

export default {
	components: {
		NavAbout
	},
		metaInfo: {
				title: "Videos by SmokeyFro",
				bodyAttrs: {
						class: "videos"
				}
		}
};
</script>

<style src="../../css/lightbox.css" />
<style>
.video-item {
	display: flex;
	align-items: center;
	margin-bottom: 1rem;
}
.video-item svg {
	margin-right: .5rem;
}
@media ( max-width: 480px ) {
	.video-item h2 {
			margin: 0;
			font-size: 1rem;
			line-height: 1.1;
	}
	.video-item h2 span {
		display: none;
	}
}

@media ( min-width: 700px ) {
	.video-item h2 {
			margin: 0;
	}
	.video-item svg {
			margin-right: 1rem;
			transform: scale(.9);
	}
	.video-item:hover svg {
			transform: scale(1);
	}
	.video-item:hover svg path {
			fill: #111;
			stroke: #111;
	}
	div#silentbox-overlay__container {
			height: 550px;
			overflow: hidden;
	}
	.video-item h2 span {
			background: #000;
			color: #fff;
			font-size: 1rem;
			margin-left: 1rem;
			display: inline-block;
			line-height: 1;
			padding: 2px 5px;
			border-radius: 2px;
	}
}
div#silentbox-overlay__content {
		display: flex;
		align-items: center;
		justify-content: center;
}
div#silentbox-overlay__embed {
		bottom: 0;
		cursor: default;
		height: auto;
		width: 75%;
		position: static;
}

:root [data-theme=dark] .video-item svg path{
    stroke: #ffffffc9;
}
:root [data-theme=dark] .video-item svg circle{
    stroke: #999;
}
:root [data-theme=dark] .video-item:hover svg path {
    fill: #ffc800;
    stroke: #ffc800;
}
:root [data-theme=dark] .video-item:hover svg circle {
    stroke: #fff;
}
</style>