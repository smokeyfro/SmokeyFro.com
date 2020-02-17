<template>
	<Layout :sidebar="false" :top="false" :bottom="false">
		<div class="lg:absolute lg:top-0 lg:right-0 lg:mr-16">
			<div class="lg:p-10 lg:mr-10 lg:max-w-lg">
				<div class="flex w-full mb-2">
					<g-image src="/sign.svg" class="w-16 mr-3 icon md:w-24" />
					<div>
						<h1 class="m-0">Oh Snap!</h1>
						<h2 class="leading-snug">Page not found</h2>
					</div>
				</div>
				<p>The link you clicked no longer exists or has been moved to a new location. My trusty robots will inform me of this travisty and I'll get it fixed <em>prontisimo</em>!</p>
				<div class="flex items-center justify-start w-full">
					<a @click.prevent="$router.go(-1)" href="#" class="font-bold">&larr; Go back to the previous page</a>
				</div>
				<div class="block px-5 py-5 mt-5 rounded-lg shadow-lg search-box inline-search">
					<h3 class="mt-0 mb-4 text-base leading-none"><svg class="inline-block w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" viewBox="0 0 24 24">
							<defs/>
							<circle cx="11" cy="11" r="8"/>
							<path d="M21 21l-4.35-4.35"/>
						</svg> Or try the search
					</h3>
					<div>
						<div class="block w-full">
								<input id="search" v-model="searchTerm" :v-bind="searchTerm" type="search" results="5" v-focus class="block w-full mt-2 form-input" placeholder="Type in a phrase or search term...">
						</div>
						<div class="mt-2 results">
							<div v-for="item in searchResults" :key="item.id">
								<g-link :to="item.path" class="relative flex items-center p-1 item link">
									{{ item.title }} <span :class="item.index | lowerCase" class="absolute right-0 px-2 py-1 ml-2 text-xs leading-none bg-gray-200 badge">{{ item.index }}</span>
								</g-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<template slot="navgroup">
			Doh!
		</template>
		<template slot="repo_link">
			<a href="https://github.com/smokeyfro/smokeyfro/blob/master/src/pages/404.vue" class="border-b border-transparent hover:border-gray-400 transition-border-color">Source</a>
		</template>
	</Layout>
</template>

<script>
import lowerCase from "@/filters/LowerCase";

export default {
		data: () => ({
				searchTerm: ''
		}),
		filters: {
				lowerCase
		},
		metaInfo: {
			title: `Page Not Found (404)`,
			bodyAttrs: {
				class: "error"
			},
		},
	computed: {
			resultUrl () {

			},
		searchResults () {
			const searchTerm = this.searchTerm
			if (searchTerm.length < 3) return []
			return this.$search.search({ query: searchTerm, limit: 50 })
		}
	}
}
</script>
<style>
	@media ( max-width: 640px ) {
		.error main {
			background-position: bottom center;
			background-size: 100%;
		}
		html, .error, .app {
			height: 100%;
		}
		.error main {
			height: calc(100% - 52px);
		}
		.inline-search {
			background: #fffffff0;
		}
	}

	/* .error header {
		background: #7a1414;
	} */
.error main {
	background-image: url(/chris-manson.svg);
	background-repeat: no-repeat;
	background-color: #ffc8002e;
}
.error-page main {
		padding-top: 2rem;
}
.sidebar { 
	z-index: 9999;
}
.error-bg {
	z-index: -1;
}
.error-bg main:hover span.poop {
	top: -3.5em!important;
}
.error-page .layout {
		grid-template-columns: 70px 1fr;
}
.error-page .layout main {
	grid-column: 2;
	column-span: 2;
}
.error-page .main {
		display: flex;
		justify-content: flex-end;
}
.error-page .poop {
		font-size: 5rem;
}
.error-page .main > section {
		width: 500px;
		margin: 2rem 2rem 0 0;
}
.error-page .main > section form {
		padding: 1rem 3rem 3rem;
		background: #f8f8f8;
}
.error-page .main > section > div > div {
		font-size: 1.2em;
		display: flex;
		width: 100%;
		justify-content: space-between;
		font-weight: bold;
}
.error-page .main h1 {
		margin: 0;
		line-height: 1;
}
@media (min-width: 1024px) {
	.error .app {
			grid-template-columns: 80px 1fr;
			grid-template-areas:
			"header main main"
			"header main main";
			height: 100vh;
		}
	.error header {
		height: 100vh;
	}
	.error main {
		position: fixed;
		left: 80px;
		right: 0;
		top: 0;
		bottom: 0;
	}
}
.search-box {
	@apply bg-white;
}
.results .item {
	@apply bg-white
}
:root [data-theme=dark] .results .item {
	@apply bg-black text-white;
}
:root [data-theme=dark].error .search-box {
	@apply bg-gray-900 text-white;
}
:root [data-theme=dark].error .search-box svg path,
:root [data-theme=dark].error .search-box svg circle {
	stroke: #fff;
}
:root [data-theme=dark].error .icon {
	filter: invert(1);
	opacity: .8;
}
</style>