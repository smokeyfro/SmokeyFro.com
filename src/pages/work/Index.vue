<template>
	<Layout :sidebar="true" :top="false" :bottom="true" class="max-width-none">
		<h1>Selected Works</h1>
		<p>Below you'll find a few examples of my work that showcase my overall design style and the types of projects I've worked on.</p>
		<template slot="secondary-nav">
			<NavWork />
		</template>
		<template slot="bottom-shelf">
			<ClientOnly>
				<carousel :perPage="1" :navigationEnabled="true" navigationNextLabel="›" navigationPrevLabel="‹" :paginationEnabled="true" class="mx-6 mt-6 md:mt-10 md:mx-10 lg:mx-20">
					<slide v-for="edge in featuredWork" :key="edge.node.id">
						<FeaturedItemWork :post="edge.node"  />
					</slide>
				</carousel>
			</ClientOnly>
			<div class="grid gap-8 mx-6 mt-6 mb-20 lg:mt-10 md:gap-10 grid-cols1 sm:grid-cols-2 xl:grid-cols-3 md:mx-10 lg:mx-20 ">
				<ItemWork :post="edge.node" v-for="edge in normalWork" :key="edge.node.id" />
			</div>
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
import FeaturedItemWork from "@/components/FeaturedItemWork";

export default {
	components: {
		NavWork,
		Browser,
		ItemWork,
		FeaturedItemWork,
		Carousel: () =>
			import ('vue-carousel')
			.then(m => m.Carousel)
			.catch(),
		Slide: () =>
			import ('vue-carousel')
			.then(m => m.Slide)
			.catch()
	},
	computed: {
		featuredWork() {
			return this.$page.posts.edges.filter(edge => {
				return edge.node.featured === true;
			});
		},
		normalWork() {
			return this.$page.posts.edges.filter(edge => {
				return edge.node.featured === false;
			});
        }
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
#app .VueCarousel-slide a img {
	height: 200px;
}
#app .VueCarousel-dot-container {
	margin-top: 0!important;
}
#app .VueCarousel-pagination[data-v-438fd353] {
    position: absolute;
    bottom: 0;
	right: 0;
	width: auto;
	text-align: right;
}
#app .VueCarousel-dot {
    width: 15px!important;
    height: 15px!important;
}

.VueCarousel-navigation button {
    /* font-size: 50px; */
}

#app .VueCarousel-navigation button {
    height: auto!important;
    border-radius: 50%;
    background: #f7f7f7;
    display: block;
    line-height: 0;
    font-weight: bold;
    font-size: 200%;
    position: static!important;
    margin: 0!important;
	display: block;
	transform: none;
}
#app .VueCarousel-navigation[data-v-453ad8cd] {
    left: auto;
    bottom: auto;
    right: 0;
	top: 0;
	width: auto;
    position: absolute;
    display: flex;
    align-items:center;
}
#app .VueCarousel-navigation button.VueCarousel-navigation-prev {
	padding: 20px 20px 25px 15px!important;
	margin-right: 10px!important;

}
#app .VueCarousel-navigation button.VueCarousel-navigation-next {
    padding: 20px 15px 25px 20px!important;
}
@media ( min-width: 768px ) {
	#app .VueCarousel-slide a img {
		height: 300px;
	}
}
@media ( max-width: 480px ) {
	#app .VueCarousel-navigation[data-v-453ad8cd] {
		top: auto!important;
		bottom: -5px;
	}
	#app .VueCarousel-slide {
		margin-top: 0;
		padding-bottom: 40px;
	}
	#app .VueCarousel-dot {
		margin-top: 0 !important;
	}
	#app .VueCarousel-navigation button.VueCarousel-navigation-prev {
		padding: 10px 10px 18px 8px!important;
	}
	#app .VueCarousel-navigation button.VueCarousel-navigation-next {
		padding: 10px 8px 18px 10px!important;
	}
	#app .VueCarousel-pagination[data-v-438fd353] {
		left: 0;
		right: auto;
		top: auto;
		bottom: -5px;
	}

}
</style>