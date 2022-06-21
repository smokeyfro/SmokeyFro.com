<template>
	<Layout :sidebar="true" :top="false" :bottom="true" class="max-width-none">
		<h1 id="title" class="flex items-center justify-between w-full">
			Selected Works 
			<span v-if="$page.posts.pageInfo.currentPage > 1" class="mt-1 text-base font-normal ">
				Page <strong>{{$page.posts.pageInfo.currentPage}}</strong> of <strong>{{ $page.posts.pageInfo.totalPages }}</strong>
			</span>
		</h1>
		<p class="mt-6">Below you'll find a few examples of my work that showcase my overall design style and the types of projects I've worked on.</p>
		<template slot="secondary-nav">
			<NavWork />
		</template>
		<template slot="bottom-shelf">
			<ClientOnly>
				<carousel v-if="$page.posts.pageInfo.currentPage === 1" :perPage="1" :navigationEnabled="true" navigationNextLabel="›" navigationPrevLabel="‹" :paginationEnabled="true" class="hidden mx-6 mt-6 sm:block md:mt-10 md:mx-10 lg:mx-20">
					<slide v-for="edge in featuredWork" :key="edge.node.id">
						<FeaturedItemWork :post="edge.node"  />
					</slide>
				</carousel>
			</ClientOnly>
			<div class="grid gap-8 mx-6 mt-6 mb-0 grid-cols1 sm:hidden">
				<ItemWork :post="edge.node" v-for="edge in featuredWork" :key="edge.node.id" />
			</div>
			<div class="grid gap-8 mx-6 mt-6 mb-20 lg:mt-10 md:gap-10 grid-cols1 sm:grid-cols-2 xl:grid-cols-4 md:mx-10 lg:mx-20 ">
				<ItemWork :post="edge.node" v-for="edge in $page.posts.edges" :key="edge.node.id" />
			</div>
			<pagination :info="$page.posts.pageInfo" base="work" v-if="$page.posts.pageInfo.totalPages > 1" />
		</template>
	</Layout>
</template>

<page-query>
	query Work {
		posts: allWork (sortBy: "launch_date", order: DESC) {
			totalCount
			pageInfo {
				totalPages
				currentPage
			}
			edges {
				node {
					title
					content
					path
					thumb
					image
					excerpt
					launch_date
					project_type
					services
					status
					featured
				}
			}
		}
	}
</page-query>

<script>
import NavWork from "~/components/NavWork.vue";
import Browser from "@/components/Browser";
import ItemWork from "@/components/ItemWork";
//import FeaturedItemWork from "@/components/FeaturedItemWork";
//import Pagination from "@/components/Pagination";

export default {
	components: {
		NavWork,
		Browser,
		ItemWork,
		// Pagination,
		// FeaturedItemWork,
		// Carousel: () =>
		// 	import ('vue-carousel')
		// 	.then(m => m.Carousel)
		// 	.catch(),
		// Slide: () =>
		// 	import ('vue-carousel')
		// 	.then(m => m.Slide)
		// 	.catch()
	},
	computed: {
		// featuredWork() {
		// 	return this.$static.featured.edges.filter(edge => {
		// 		return edge.node.featured === true;
		// 	});
		// },
		// normalWork() {
		// 	return this.$page.posts.edges.filter(edge => {
		// 		return edge.node.featured === false;
		// 	});
        // }
	},
	metaInfo: {
		title: "",
		bodyAttrs: {
			class: "work"
		}
	}
};
</script>

<style>
.work #app a.image {
    @apply relative block;
}
.work #app a.image .browser-content:after {
    @apply h-full transition-all duration-300 ease-linear w-full block flex items-center justify-center absolute top-0 bg-transparent text-2xl text-transparent;
    content: "+";
	right: 1px;
	left: 1px;
	width: 99.5%;
}
.work #app a.image .browser-content {
	position: relative;
}
.work #app a.image:hover .browser-content:after {
    @apply text-black;
	background-color: rgba(255,255,255,.8);
}
.work #app .featured-image {
    max-width: 420px;
    height: auto;
}
.work #app .VueCarousel-dot-container {
	margin-top: 0!important;
}
.work #app .VueCarousel-pagination[data-v-438fd353] {
    position: absolute!important;
    bottom: 0!important;
	right: 0!important;
	width: auto!important;
	text-align: right!important;
}
.work .work #app .VueCarousel-dot {
    width: 15px!important;
    height: 15px!important;
}
.work #app .VueCarousel-navigation button {
    height: auto!important;
    border-radius: 50%!important;
    background: #f7f7f7;
    display: block!important;
    line-height: 0!important;
    font-weight: bold!important;
    font-size: 200%!important;
    position: static!important;
    margin: 0!important;
	transform: none!important;
}
.work #app .VueCarousel-navigation[data-v-453ad8cd] {
    left: auto!important;
    bottom: auto!important;
    right: 0!important;
	top: 0!important;
	width: auto!important;
    position: absolute!important;
    display: flex!important;
    align-items:center!important;
}
.work #app .VueCarousel-navigation-prev[data-v-453ad8cd] {
	padding: 20px 20px 25px 15px!important;
	margin-right: 10px!important;

}
.work #app .VueCarousel-navigation-next[data-v-453ad8cd] {
    padding: 20px 15px 25px 20px!important;
}
@media ( min-width: 768px ) {
	.work #app .VueCarousel-slide a {
		height: 300px!important;
	}
}
@media ( max-width: 480px ) {
	.work #app .VueCarousel-navigation[data-v-453ad8cd] {
		top: auto!important;
		bottom: -5px!important;
	}
	.work #app .VueCarousel-slide {
		margin-top: 0;
		padding-bottom: 40px;
	}
	.work #app .VueCarousel-dot {
		margin-top: 0 !important;
	}
	.work #app .VueCarousel-navigation button.VueCarousel-navigation-prev {
		padding: 10px 10px 18px 8px!important;
	}
	.work #app .VueCarousel-navigation button.VueCarousel-navigation-next {
		padding: 10px 8px 18px 10px!important;
	}
	.work #app .VueCarousel-pagination[data-v-438fd353] {
		left: 0;
		right: auto;
		top: auto;
		bottom: -5px;
	}
}

@media ( max-width: 640px ) {
	#app .VueCarousel {
		display: none;
	}
}
</style>