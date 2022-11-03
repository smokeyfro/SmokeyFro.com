<template>
	<Layout :sidebar="false" :top="true" bottom="false" class="md:h-screen">
		<template slot="top-shelf">
		<div class="block md:w-full md:grid md:gap-0 content md:h-screen">
			<HomeImage />
			<div class="flex items-center justify-center h-full w-full">
				<div class="max-w-3xl mx-auto space-y-6">
					<h1>Howdy. I'm Chris <span class="transform hover:rotate-6 inline-block">👋</span></h1>
					<p>An independent designer, front-end developer, and entrepreneur, working remotely from my farm in the Garden Route of South Africa.</p>
					<p>This is my home on the web where I showcase my <g-link to="/work" class="link" title="View a selection of my work">work</g-link>, share my <g-link to="/themes" class="link" title="Browse my growing collection of WordPress and JAMstack themes">themes</g-link>, write web-dev <g-link to="/tutorials" class="link" title="Read my journal">tutorials</g-link> and post updates via my <g-link to="/journal" class="link" title="Check out my web development tutorials">journal</g-link>.</p>
					<p>As a designer who codes, I'm able to take an idea from conception to finished product and have helped clients of all sizes bring their ideas to life.</p>
					<p><strong>Need help with yours?</strong></p>
					<p><g-link to="/work/services" class="btn btn-large btn-primary" title="Explore my services">Explore My Services</g-link> <span class="hidden mx-2 text-sm md:inline">or</span> <g-link to="/work" class="btn btn-large btn-secondary" title="View My Work">View My Work</g-link></p>
					<Burger />
				</div>
			</div>
		</div>
		</template>
		<Sidebar>
			<nav id="menu">
				<div class="flex flex-col items-start justify-start h-screen bg-white release-notes">
					<h2 class="p-6 m-0 -mt-1 text-lg ">🎉 Recent Updates</h2>
					<div class="h-full overflow-hidden">
						<vuescroll>
						<article class="box-content p-6 mb-0 odd:bg-gray-200 even:bg-white" v-for="note in $static.notes.edges" :key="note.node.id">
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
						</vuescroll>
					</div>
					<div class="flex items-start self-end justify-start w-full p-4 mt-auto bg-gray-100">
						<strong class="mt-1 mr-3 text-xs uppercase">Key:</strong>
						<ul class="grid w-full grid-cols-1 reset md:grid-cols-2">
							<li class="flex items-end text-xs text-gray-600"><svg class="inline-block mr-2 bg-transparent" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M1.05 12H7M17.01 12h5.95"/></svg> <span>New</span></li>
							<li class="flex items-end text-xs text-gray-600"><svg class="inline-block mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="orange" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M1.05 12H7M17.01 12h5.95"/></svg> <span>Improvement</span></li>
							<li class="flex items-end text-xs text-gray-600"><svg class="inline-block mr-2 bg-transparent" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M1.05 12H7M17.01 12h5.95"/></svg> <span>Content</span></li>
							<li class="flex items-end text-xs text-gray-600"><svg class="inline-block mr-2 bg-transparent" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M1.05 12H7M17.01 12h5.95"/></svg> <span>Bug Fix</span></li>
						</ul>
					</div>
				</div>
			</nav>
		</Sidebar>
	</Layout>
</template>

<script>
	import HomeImage from "~/components/HomeImage.vue";
	import Burger from "~/components/Burger.vue";
	import Sidebar from "~/components/Sidebar.vue";
	import vuescroll from 'vuescroll/dist/vuescroll-native';
	import '../css/pages/home.css'

	export default {
		components: {
			HomeImage,
			Burger,
			Sidebar,
			vuescroll
		},
		metaInfo: {
			title: "Chris Rault, designer, front-end developer and entrepreneur from South Africa",
			bodyAttrs: {
				class: "home two-col"
			}
		}
	};
</script>

<static-query>
query Static {,
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

<style>
.scroll-area {
  position: relative;
  margin: auto;
}
</style>