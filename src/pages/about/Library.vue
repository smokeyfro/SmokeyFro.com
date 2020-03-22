<template>
	<Layout :sidebar="true" :top="false" :bottom="true">
        <h1>Library</h1>
        <p>I'm a book worm at heart and tend to read multiple books at any given time. Below are the books <em>I have read</em> and those I still <em>plan to read</em>.</p>
        <template slot="bottom-shelf">
            <div class="relative flex items-end justify-between mx-6 mb-6 border-b md:mx-10 lg:mx-20">
                <button v-on:click='isOpen = !isOpen' class="block mb-5 lg:hidden btn btn-small hover:text-white ">Categories</button>
                <nav class="flex-wrap hidden lg:flex text-md filters">
                    <button v-for="(filter, i) in filtersList" :key="i" v-on:click="bookSearch = filter.value" :class="{ 'active': bookSearch == filter.value}">{{ filter.label }}</button>
                </nav>
                <nav v-show="isOpen" class="absolute top-0 z-50 p-10 mt-12 bg-white rounded-md shadow-lg lg:hidden lg:shadow-none lg:bg-transparent lg:relative lg:p-0 lg:mt-0 lg:flex-wrap lg:flex text-md filters">
                    <button v-for="(filter, i) in filtersList" :key="i" v-on:click="bookSearch = filter.value" :class="{ 'active': bookSearch == filter.value}">{{ filter.label }}</button>
                </nav>
                <div class="flex items-center justify-end pb-5 layout-toggle">
                    <button class="block text-sm hover:bg-grey-300" v-on:click="layout = 'grid'" :class="{ 'active-layout': layout == 'grid'}" title="Switch to Grid Layout">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid"><path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"/></svg>
                    </button>
                    <button class="block text- hover:bg-grey-300" v-on:click="layout = 'table'" :class="{ 'active-layout': layout == 'table'}" title="Switch to Grid Layout">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-columns"><path d="M12 3h7a2 2 0 012 2v14a2 2 0 01-2 2h-7m0-18H5a2 2 0 00-2 2v14a2 2 0 002 2h7m0-18v18"/></svg>
                    </button>
                    <button class="relative z-50 block p-2 ml-3 text-xs border-2 rounded-full hover:bg-gray-300 hover:text-white" v-on:click='isSearchOpen = !isSearchOpen' title="Search the books">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" viewBox="0 0 24 24">
                            <defs/>
                            <circle cx="11" cy="11" r="8"/>
                            <path d="M21 21l-4.35-4.35"/>
                        </svg>
                    </button>
                    <input v-show="isSearchOpen" v-model="bookSearch" :v-bind="bookSearch" type="search" placeholder="Type the name a book, topic, etc" class="absolute top-0 right-0 z-30 w-64 px-2 py-2 mt-2 mr-12 text-sm bg-white border rounded-md lg:mt-3">
                </div>
            </div>
            <div v-if="layout === 'grid'" class="grid items-end grid-cols-1 gap-6 mx-6 mb-6 md:mb-10 lg:mb-20 md:mx-10 lg:mx-20 md:gap-10 lg:gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                <g-link v-for="edge in filteredBooks" :key="edge.node.id"  :class="{'border-red-700': edge.node.status === 0,'border-green-500': edge.node.status === 1,'border-accent': edge.node.status === 2}" class="relative block p-1 overflow-hidden text-center text-white transition-all duration-300 ease-linear transform scale-100 translate-y-0 bg-white border border-b-4 border-solid rounded-md shadow-md opacity-100 item hover:opacity-75 hover:shadow-lg hover:-translate-y-2 " :to="edge.node.path">
                    <g-image v-if="edge.node.cover" :src="edge.node.cover.medium" class="w-full h-auto" />
                    <g-image v-else src="/spacer.gif" class="block w-full h-auto shadow-sm" />
                    <div class="absolute w-full overflow-hidden status">
                        <span class="block w-full px-3 py-2 bg-white bg-red-700" v-if="edge.node.status === 0">Unread</span>
                        <span class="block w-full px-3 py-2 bg-white bg-green-500" v-else-if="edge.node.status === 1">Read</span>
                        <span class="block w-full px-3 py-2 bg-white bg-accent" v-else-if="edge.node.status === 2">Reading</span>
                    </div>
                </g-link>
            </div>
            <div v-if="layout === 'table'" class="mb-6 md:mb-10 lg:mb-20 md:mx-10 lg:mx-20">
            <table class="w-full p-1 overflow-hidden text-left bg-white border rounded-md shadow-lg border-1">
                <thead>
                    <tr class="text-white bg-black">
                        <th class="px-4 py-2">Title</th>
                        <th class="px-4 py-2">Author</th>
                        <th class="px-4 py-2">Pages</th>
                        <th class="px-4 py-2">Published</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="edge in filteredBooks" :key="edge.node.id" class="odd:bg-white even:bg-gray-100" :class="{'opacity-50': edge.node.status === 'read'}">
                        <td class="px-4 py-2">{{ edge.node.title }}</td>
                        <td class="px-4 py-2 text-sm text-gray-700">
                            <span v-for="(author, i) in edge.node.authors" :key="i">
                                {{ author.name }}
                            </span>
                        </td>
                        <td class="px-4 py-2 text-sm text-gray-700">{{ edge.node.number_of_pages }}</td>
                        <td class="px-4 py-2 text-sm text-gray-700 whitespace-pre">{{ edge.node.publish_date }}</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </template>
        <template slot="secondary-nav">
            <NavAbout />
        </template>
  </Layout>
</template>

<page-query>
query {
  posts: allBook(sortBy: "status", order: DESC)  {
    edges {
      node{
        id
        isbn
        review
        category
        tags
        status
        title
        cover {
            medium
        }
        number_of_pages
        publish_date
        identifiers {
            isbn_13
        }
        authors {
            name
        }
        path
      }
    }
  }
}
</page-query>

<script>
import NavAbout from "~/components/NavAbout.vue";
import lowerCase from "@/filters/LowerCase";
import { mixin as clickaway } from 'vue-clickaway'

export default {
    mixins: [ clickaway ],
    components: {
        NavAbout
    },
    filters: {
		lowerCase
	},
    data () {
        return {
            bookSearch: '',
            books: [],
            isOpen: false,
            isSearchOpen: false,
            filtersList: [
                {
                    value: '',
                    label: 'Everything'
                },
                {
                    value: 'work',
                    label: 'Work'
                },
                {
                    value: 'cooking',
                    label: 'Cooking'
                },
                // {
                //     value: 'gardening',
                //     label: 'Gardening'
                // },
                {
                    value: 'natural-building',
                    label: 'Building'
                },
                {
                    value: 'fantasy',
                    label: 'Fantasy'
                },
                {
                    value: 'fiction',
                    label: 'Fiction'
                },
            ]
        }
    },
    stored: {
        layout: {
            type: String,
            key: 'layout',
            default: 'grid'
        }
    },
    computed: {
        booksList () {
            return this.$page.posts.edges
        },
        filteredBooks (){
            const bookSearch = this.bookSearch
            return this.booksList.filter(edge=>{
                return edge.node.title.toLowerCase().match(this.bookSearch.toLowerCase()) ||
                edge.node.category.toLowerCase().match(this.bookSearch.toLowerCase()) || 
                edge.node.tags[0].toLowerCase().match(this.bookSearch.toLowerCase())
            });
        },
        filteredCategories (){
            return this.booksList.filter(edge=>{
                edge.node.category.toLowerCase().match(this.bookSearch.toLowerCase())
            });
        }
    },
    metaInfo: {
        title: 'Library'
    },
    methods: {
        shortenText(text) {
            return text.slice(0,300) + '...'
        },
        hideCategories() {
            this.isOpen = false
        }
    }
}
</script>

<style>
.item .status {
    bottom: -80px;
    transition: all 600ms ease-in;
    left: 0;
    right: 0;
}
.item:hover .status {
    bottom: 0;
}
#app table {
    @apply relative;
}
#app th {
    @apply sticky top-0;
}
.filters button {
    @apply text-gray-600 block no-underline py-3 mr-5 font-normal;
}
@media ( min-width: 1024px ) {
    .filters button {
        @apply border-b-4 border-transparent py-5;
    }
    .filters button.active {
        @apply border-black;
    }
}
.filters button:focus {
    box-shadow: 0 0;
}
.filters button:hover {
    @apply text-gray-900 bg-transparent;
}
.filters button.active {
    @apply font-bold text-black;
}
.layout-toggle button svg {
    transform: scale(.90);
}
.layout-toggle button path,
.layout-toggle button circle {
    stroke: #999;
}
.layout-toggle button:hover {
        @apply text-gray-900 bg-transparent;
}
.layout-toggle button:focus {
        @apply text-gray-900 bg-transparent;
    box-shadow: 0 0;
}
.layout-toggle button:hover path,
.layout-toggle button:hover circle,
.layout-toggle button:focus path,
.layout-toggle button:focus circle {
    stroke: #444;
}
.layout-toggle .active-layout path,
.layout-toggle .active-layout circle {
    stroke: #111;
}
</style>