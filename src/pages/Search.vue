<template>
	<Layout :sidebar="false" :top="false" :bottom="false">
		<div class="w-full h-full search-wrap">
			<h1>Search</h1>
			<p>Know what you're looking for? Type a search term or phrase.</p>
			<div class="search">
				<div class="block w-full mt-6">
					<input id="search" v-model="searchTerm" :v-bind="searchTerm" type="search" results="5" v-focus class="block w-full mt-2 form-input" placeholder="Type in a phrase or search term...">
					<p class="flex-row mt-5 text-sm text-gray-600 md:mt-3 examples">Or try one of these: <button v-on:click="searchTerm = 'themes'">themes</button>, <button v-on:click="searchTerm = 'jamstack'">jamstack</button>, <button v-on:click="searchTerm = 'vue'">vue</button>, <button v-on:click="searchTerm = 'wordpress'">wordpress</button>, <button v-on:click="searchTerm = 'beans'">beans</button></p>
				</div>
				<div class="results">
					<div v-for="item in searchResults" :key="item.id">
						<g-link :to="item.path" class="block p-6 mb-5 transition-all duration-500 ease-in-out bg-white rounded-md shadow-sm opacity-75 hover:opacity-100 link hover:shadow-lg">
							<h2 class="m-0 text-2xl">
								{{ item.title }} <span :class="item.index | lowerCase" class="relative px-2 py-1 ml-2 text-sm rounded-sm badge">{{ item.index }}</span>
							</h2>
							<p class="mb-0 text-base" v-html="item.excerpt" />
							<p class="mt-1 mb-0 text-sm text-gray-700"><span>https://smokeyfro.com</span>{{ item.path }}</p>
						</g-link>
					</div>
				</div>
			</div>
		</div>
		<template slot="navgroup">
			Search
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
		title: "Search the SmokeyFro site",
		bodyAttrs: {
			class: "search"
		}
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
.examples button {
	@apply bg-yellow-200 px-2 py-1 inline-block text-gray-800
}
.badge {
	top: -1px;
}
.badge.services {
    @apply bg-green-300;
}
.badge.themes {
    @apply bg-orange-300;
}
.badge.designs {
    @apply bg-blue-300;
}
.badge.tuts {
    @apply bg-purple-300;
}
.badge.journal {
    @apply bg-red-300;
}
.search .app {
	grid-template-columns: 80px 1fr;
	grid-template-areas:
	"header main main"
	"header main main";
}
.search main {
	background: #f3f7f9;
	padding: 0;
}
@media ( max-width: 640px ) {
	.search main {
		height: calc(100vh - 52px);
	}
}
</style>