<template>
	<ClientOnly>
	<vue-drawer-layout ref="drawerLayout" :drawer-width="300" :reverse="true" :content-drawable="true">
	<div class="drawer-content" slot="drawer" v-on-clickaway="hideNotes">
		<nav id="menu">
        <div class="flex flex-col items-start justify-start h-screen bg-white release-notes">
            <h2 class="p-6 m-0 -mt-1 text-lg ">🎉 Recent Updates</h2>
            <a href="#" class="absolute top-0 right-0 mt-5 mr-5 rounded-full" @click.prevent="handleToggleDrawer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </a>
            <div class="h-full overflow-hidden">
				<vue-custom-scrollbar class="scroll-area">
					<article class="box-content p-4 mb-0 odd:bg-gray-200 even:bg-white" v-for="note in $static.notes.edges" :key="note.node.id">
						<h3 class="mb-2 text-sm text-gray-600">{{ note.node.date }}</h3>
						<ul class="p-0 m-0 reset">
							<li class="flex items-start justify-start mb-2" v-for="(update, $index) in note.node.updates" :key="$index">
								<svg v-if="update.type === 'improvement'" class="inline-block mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="orange" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M1.05 12H7M17.01 12h5.95"/></svg>
								<svg v-if="update.type === 'new'" class="inline-block mr-2 bg-transparent" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M1.05 12H7M17.01 12h5.95"/></svg>
								<svg v-if="update.type === 'content'" class="inline-block mr-2 bg-transparent" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M1.05 12H7M17.01 12h5.95"/></svg>
								<svg v-if="update.type === 'fix'" class="inline-block mr-2 bg-transparent" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M1.05 12H7M17.01 12h5.95"/></svg>
								<p class="m-0 text-sm text-gray-800">{{ update.title }} <span class="text-xs text-gray-500" v-if="update.example_url != false">(<g-link :to="update.example_url" class="text-gray-700 underline link" title="See an example">view</g-link>)</span></p>
							</li>
						</ul>
					</article>
				</vue-custom-scrollbar>
			</div>
            <div class="flex items-start self-end justify-start w-full p-4 mt-auto bg-gray-100">
                <strong class="mt-1 text-xs uppercase">Key:</strong>
                <ul class="grid w-full grid-cols-1 reset md:grid-cols-2">
                    <li class="flex items-end text-xs text-gray-600"><svg class="inline-block mr-2 bg-transparent" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M1.05 12H7M17.01 12h5.95"/></svg> <span>New</span></li>
                    <li class="flex items-end text-xs text-gray-600"><svg class="inline-block mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="orange" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M1.05 12H7M17.01 12h5.95"/></svg> <span>Improvement</span></li>
                    <li class="flex items-end text-xs text-gray-600"><svg class="inline-block mr-2 bg-transparent" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M1.05 12H7M17.01 12h5.95"/></svg> <span>Content</span></li>
                    <li class="flex items-end text-xs text-gray-600"><svg class="inline-block mr-2 bg-transparent" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M1.05 12H7M17.01 12h5.95"/></svg> <span>Bug Fix</span></li>
                </ul>
            </div>
        </div>
      </nav>
	</div>
	<div class="w-full h-screen" slot="content">
		<div id="app" class="overflow-hidden md:h-screen md:overflow-hidden layout app">
			<header role="banner" class="relative z-50 flex flex-row items-center justify-between sm:h-screen dark:bg-black sm:flex-col">
				<Logo class="text-white sm:mx-auto sm:mt-6 " />
				<NavPrimary />
				<NavMobile />
				<NavTertiary />
			</header>
			<aside role="navigation" class="relative z-40 flex items-center overflow-x-auto md:overflow-hidden dark:bg-gray-900 sm:justify-center" v-if="sidebar">
				<slot name="secondary-nav" />
			</aside>
			<main class="relative z-30 w-full h-screen overflow-x-hidden overflow-y-auto">
				<div v-if="top">
					<slot name="top-shelf" />
				</div>
				<div class="px-5 pt-4 lg:max-w-screen-lg md:px-10 lg:px-20 lg:pt-12 md:pt-6">
					<slot />
				</div>
				<div v-if="bottom">
					<slot name="bottom-shelf" />
				</div>
				<a href="javascript:void(0)" class="absolute top-0 right-0 mt-5 mr-5 rounded-full" @click="handleToggleDrawer">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg>
				</a>	
			</main>
		</div>
	</div>
	</vue-drawer-layout>
	</ClientOnly>
</template>

<script>
import NavPrimary from "~/components/NavPrimary.vue";
import NavMobile from "~/components/NavMobile.vue";
import NavTertiary from "~/components/NavTertiary.vue";
import Logo from "~/components/Logo.vue";
import ReleaseNotes from "~/components/ReleaseNotes.vue";
import {DrawerLayout} from 'vue-drawer-layout'
import { mixin as clickaway } from 'vue-clickaway'
import vueCustomScrollbar from 'vue-custom-scrollbar'

export default {
  	props: [
		'sidebar',
		'top',
		'bottom'
	],
	mixins: [ clickaway ],
	data() {
		return {
			settings: {
				maxScrollbarLength: 60
			},
			quotes: [
				'Curiosity Killed The Cat',
				'Early Bird Gets The Worm',
				'Use CONSOLE for 20% Off',
				'Garbage In, Garbage Out',
				'↑↑↓↓←→←→BA'
			],
			css: [
				'color: red; background: #f7f7f7; border: 1px solid #ddd; font-size: medium; padding: 2px 5px; border-radius: 2px; font-family: Georgia',
				'color: green; background: #f7f7f7; border: 1px solid #ddd; font-size: medium; padding: 2px 5px; border-radius: 2px; font-family: Georgia',
				'color: orange; background: #f7f7f7; border: 1px solid #ddd; font-size: medium; padding: 2px 5px; border-radius: 2px; font-family: Georgia',
				'color: blue; background: #f7f7f7; border: 1px solid #ddd; font-size: medium; padding: 2px 5px; border-radius: 2px; font-family: Georgia',
				'color	pink; background: #f7f7f7; border: 1px solid #ddd; font-size: medium; padding: 2px 5px; border-radius: 2px; font-family: Georgia',
				'color: lilac; background: #f7f7f7; border: 1px solid #ddd; font-size: medium; padding: 2px 5px; border-radius: 2px; font-family: Georgia',
				'color: orange; background: #f7f7f7; border: 1px solid #ddd; font-size: medium; padding: 2px 5px; border-radius: 2px; font-family: Georgia',
				'color: turquoise; background: #f7f7f7; border: 1px solid #ddd; font-size: medium; padding: 2px 5px; border-radius: 2px; font-family: Georgia',
				'color: purple; background: #f7f7f7; border: 1px solid #ddd; font-size: medium; padding: 2px 5px; border-radius: 2px; font-family: Georgia'
			],
			randomCss: '',
			randomQuote: ''
		}
	},
	mounted() {
			var outputCss = this.randomCss;
			var outputQuote = this.randomQuote;
			setTimeout(console.log.bind(console, '%c \n  %c' + outputQuote + ' %c  \n', 'background: none;', outputCss, 'background: none;'));
			// setTimeout(console.log.bind(console, '\n%c' + outputQuote + '\nFind the code for this page here:\nhttps://github.com/smokeyfro/smokeyfro/blob/master/src/pages/Devtools.vue\n\n', css));
	},
    created(){
		const idx = Math.floor(Math.random() * this.quotes.length);
		this.randomQuote = this.quotes[idx];
		const idxcss = Math.floor(Math.random() * this.css.length);
        this.randomCss = this.css[idxcss];
	},
	components: {
		NavPrimary,
		NavMobile,
		NavTertiary,
		NavMobile,
		Logo,
		ReleaseNotes,
		vueCustomScrollbar,
		'vue-drawer-layout': () =>
        import ('vue-drawer-layout')
        .then(m => m.DrawerLayout)
        .catch(),
	},
	methods: {
		handleToggleDrawer() {
			this.$refs.drawerLayout.toggle();
		},
		hideNotes() {
			this.isVisible = false
			this.focusedIndex = 0
		}
    }
}
</script>

<static-query>
query Static {,
	metadata {
		siteName
	}
	notes: allReleaseNote {
		edges {
			node {
				date(format: "dddd D MMMM, YYYY")
                updates {
                    title
                    type
                    example_url
                }
				path
                id
			}
		}
	}
}
</static-query>