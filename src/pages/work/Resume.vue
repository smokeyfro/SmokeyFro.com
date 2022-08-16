<template>
	<Layout :sidebar="true" :top="true" :bottom="true">
		<template slot="top-shelf">
			<div class="max-w-6xl mx-auto flex flex-col items-center justify-center lg:h-screen -md:mt-20 lg:flex-row hero" v-for="({ name, birthDate, location, title, downloadLink, resumeImage }, i) in resume.info" :key="i">
				<figure class="lg:mr-6">
					<svg fill="#1C2F39" class="w-56 h-56" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 77 63">
						<defs />
						<g fill-rule="nonzero">
						<path class="path" d="M53.68 25.12c-.693-.533-1.413-.8-2.16-.8-.533 0-1.093.16-1.68.48-.587.32-1.2.907-1.84 1.76l-.08.16c-1.44 1.92-2.987 4.16-4.64 6.72a70.839 70.839 0 01-4.76-1.88c-1.52-.667-2.733-1.347-3.64-2.04-1.12-.853-1.333-1.693-.64-2.52s1.973-1.613 3.84-2.36c1.867-.747 4.173-1.427 6.92-2.04a126.771 126.771 0 018.6-1.6c2.987-.453 5.933-.813 8.84-1.08 2.907-.267 5.427-.4 7.56-.4 1.867 0 3.36.107 4.48.32 1.12.213 1.627.56 1.52 1.04 0 .267.08.4.24.4.053 0 .133-.053.24-.16.693-1.493.48-2.707-.64-3.64-1.12-.933-2.827-1.533-5.12-1.8a20.009 20.009 0 00-1.52-.12 44.024 44.024 0 00-2-.04c-1.813 0-3.947.093-6.4.28-2.453.187-5.013.467-7.68.84-2.667.373-5.307.84-7.92 1.4-2.613.56-4.987 1.227-7.12 2-2.133.773-3.907 1.653-5.32 2.64-1.413.987-2.227 2.093-2.44 3.32-.107.8.04 1.573.44 2.32.4.747.973 1.413 1.72 2 1.173.96 2.64 1.827 4.4 2.6 1.76.773 3.573 1.48 5.44 2.12a99.35 99.35 0 00-3.84 6.88c-.907.16-1.707.307-2.4.44-.693.133-1.2.253-1.52.36-.853.267-1.36.8-1.52 1.6-.16.8-.027 1.493.4 2.08.16-.107.507-.2 1.04-.28.533-.08 1.2-.173 2-.28-.8 1.707-1.52 3.4-2.16 5.08a42.121 42.121 0 00-1.52 4.76l-.36 1.44a11.175 11.175 0 00-.28 1.6 6.1 6.1 0 00.04 1.56c.08.507.253.947.52 1.32l.36.36c.133.133.253.173.36.12.16-.107.307-.4.44-.88s.227-.853.28-1.12c.8-2.56 1.733-5.08 2.8-7.56a141.893 141.893 0 013.44-7.4c1.12-.213 2.293-.44 3.52-.68 1.227-.24 2.413-.52 3.56-.84 1.147-.32 2.2-.667 3.16-1.04s1.76-.747 2.4-1.12a3.638 3.638 0 001.08-1.04c.293-.427.453-.867.48-1.32.027-.453-.093-.893-.36-1.32-.267-.427-.72-.773-1.36-1.04-.427-.213-1.213-.493-2.36-.84a68.268 68.268 0 01-3.88-1.32 98.514 98.514 0 017.04-9.44zm-2.96 12.64c.693.267.92.547.68.84-.24.293-.787.573-1.64.84-.853.267-1.92.547-3.2.84-1.28.293-2.613.573-4 .84.48-.853.973-1.693 1.48-2.52s1.027-1.667 1.56-2.52c1.013.32 1.947.613 2.8.88.853.267 1.627.533 2.32.8z" />
						<path d="M35.28 21.04a29.95 29.95 0 002.68-7c.613-2.48.853-4.76.72-6.84s-.733-3.8-1.8-5.16C35.813.68 34.187 0 32 0c-1.013 0-2.293.24-3.84.72-1.44.427-3.133 1.147-5.08 2.16-1.947 1.013-3.973 2.267-6.08 3.76a62.514 62.514 0 00-6.2 5.04 47.906 47.906 0 00-5.48 5.96c-1.627 2.107-2.92 4.28-3.88 6.52C.48 26.4 0 28.613 0 30.8c0 1.92.507 3.613 1.52 5.08a15.084 15.084 0 003.72 3.76 19.953 19.953 0 004.72 2.48c1.68.613 3.213 1.053 4.6 1.32 1.227.267 2.453.48 3.68.64 1.227.16 2.453.4 3.68.72.32.053.68.133 1.08.24.4.107.72.267.96.48a1.2 1.2 0 01.4.84c.027.347-.173.813-.6 1.4-.48.8-1.253 1.653-2.32 2.56A33.825 33.825 0 0118 52.88a24.957 24.957 0 01-3.68 2c-1.227.533-2.24.8-3.04.8-.587 0-1.04-.107-1.36-.32-.32-.213-.64-.56-.96-1.04-.107-.267-.293-.4-.56-.4-.427 0-.533.293-.32.88.267 1.28.827 2.28 1.68 3 .853.72 1.947 1.08 3.28 1.08.8 0 1.653-.147 2.56-.44a17.137 17.137 0 002.6-1.08 22.025 22.025 0 002.4-1.44 31.357 31.357 0 002.04-1.52c.587-.533 1.253-1.253 2-2.16a12.64 12.64 0 001.8-2.88c.453-1.013.68-2.04.68-3.08s-.427-2.013-1.28-2.92c-.747-.853-1.787-1.547-3.12-2.08a32.172 32.172 0 00-4.28-1.36 177.48 177.48 0 00-4.68-1.08 32.33 32.33 0 01-4.44-1.28c-1.36-.507-2.52-1.12-3.48-1.84A4.766 4.766 0 014 32.88c-.32-1.387-.107-2.947.64-4.68.747-1.733 1.787-3.493 3.12-5.28a48.105 48.105 0 014.56-5.24 100.58 100.58 0 015.04-4.72c1.653-1.44 3.173-2.667 4.56-3.68 1.387-1.013 2.4-1.68 3.04-2 .427-.213.947-.48 1.56-.8.613-.32 1.28-.64 2-.96.72-.32 1.453-.587 2.2-.8.747-.213 1.44-.32 2.08-.32.747 0 1.36.16 1.84.48.587.373.907 1.053.96 2.04.053.987-.067 2.16-.36 3.52-.293 1.36-.76 2.827-1.4 4.4a67.707 67.707 0 01-2.16 4.76c-.373.64-.947 1.627-1.72 2.96a55.8 55.8 0 01-2.56 4c-.933 1.333-1.893 2.493-2.88 3.48-.987.987-1.853 1.48-2.6 1.48h-.4c-.213 0-.4.08-.56.24-.267.213-.333.4-.2.56.133.16.28.293.44.4.48.213 1.04.32 1.68.32 1.28 0 2.547-.44 3.8-1.32a19.727 19.727 0 003.52-3.2 34.345 34.345 0 002.96-3.92c.88-1.36 1.587-2.547 2.12-3.56z" />
						</g>
					</svg>
				</figure>
				<div class="w-3/4 lg:w-2/3">
					<p class="mb-2 text-sm text-center md:text-left">The online, <em>always-up-to-date</em> resume of</p>
					<h1 class="block mx-auto mt-0 mb-2 text-center md:text-left md:inline-block">{{ name }}</h1>
					<h2 class="mb-3 text-2xl font-normal leading-relaxed text-center text-gray-800 md:text-left lg:text-xl">A <span>{{ title }}</span> working remotely from {{ location }}.</h2>
					<p class="m-0 text-base text-center md:text-left download">
						<a href="#" @click="printNow">
							<svg class="inline-block w-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
							<defs />
							<path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
							<path d="M6 14h12v8H6z" />
							</svg>
							Print
						</a>&nbsp;&nbsp;&nbsp;
						<a href="/Chris-Rault-Resume-2022-Edition.pdf" download>
							<svg class="inline-block w-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
							<defs />
							<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
							</svg> Download PDF
						</a>
						<a href="https://linkedin.com/in/chrisrault" class="ml-5" target="_blank" rel="nofollow noopen">LinkedIn</a>
					</p>
				</div>	
			</div>
		</template>
		
		 <template slot="bottom-shelf">
			<div class="resume-body max-w-6xl mx-auto">
				<div class="mx-6 screen:mt-20 md:mx-10">
					<h2>Work Experience</h2>
					<div class="grid grid-cols-1 gap-6 mt-5">
						<div v-for="({ date, location, company, role, summary }, i) in resume.experience" :key="i" class="flex items-start">
							<div class="w-48 mt-2 text-sm text-gray-700 date">{{ date }}</div>
							<div class="content">
								<h3 class="text-2xl leading-tight">{{ role }} @ {{ company }}</h3>
								<p class="max-w-3xl mb-0 text-base" v-if="summary">{{ summary }}</p>
							</div>
						</div>
					</div>
				</div>
				<div class="mx-6 mt-20 md:mx-10 skills-wrap">
					<h2>Skills</h2>
					<div class="grid grid-cols-1 gap-6 mt-5 md:grid-cols-2 skills">
						<div v-for="({ title, description }, i) in resume.skills" :key="i">
							<h3 class="text-2xl">{{ title }}</h3>
							<p class="m-0 text-base" v-if="description" v-html="description" />
						</div>
					</div>
				</div>
				<div class="mx-6 mt-20 md:mx-10 projects-wrap">
					<h2>My Side Projects</h2>
					<div class="grid grid-cols-1 gap-8 mt-5 md:grid-cols-2 projects">
						<div v-for="({ name, status, url, summary, image }, i) in resume.projects" :key="i">
							<div>
								<h3 class="mb-0 text-2xl">{{ name }}</h3>
								<span :class="status" class="status">{{ status }}</span>
							</div>
							<p class="mb-2 text-base md:w-1/2" v-if="summary" v-html="summary" />
							<p class="m-0 text-sm" v-if="url">
								<a :href="url" :title="name" class="link" target="_blank">{{ url }}</a>
							</p>
						</div>
					</div>
				</div>
				<div class="grid grid-cols-1 row-gap-10 col-gap-16 mx-6 mt-20 lg:grid-cols-2 md:mx-10 md:mx-0">
					<div>
						<h2 class="mt-0">References</h2>
						<div class="grid grid-cols-2 row-gap-6 col-gap-4 mt-5 lg:gap-6 references">
							<div v-for="({ name, image, title, company }, i) in resume.references" :key="i">
								<div>
									<h3 class="mt-0 text-2xl">{{ name }}</h3>
									<p class="m-0 text-base"><em>{{ title }}</em>, {{ company }}</p>
								</div>
							</div>
						</div>
					</div>
					<div class="mt-10 md:mt-0">
						<h2 class="mt-0">Education</h2>
						<div class="grid grid-cols-2 gap-4 mt-5 lg:gap-6 education">
							<div v-for="({ date, location, organization, topic }, i) in resume.education" :key="i">
								<h3 class="text-2xl">{{ topic }}</h3>
								<p class="m-0 text-base">{{ organization }}</p>
								<p class="m-0 mt-2 text-sm text-gray-600">{{ date }}</p>
							</div>
						</div>
					</div>
				</div>
				<div class="mx-6 mt-20 mb-24 md:mx-10">
					<h2 class="mb-6">Contact Info</h2>
					<ul class="grid grid-cols-2 gap-4 ml-0 list-none reset lg:grid-cols-4 contact-info" v-for="({ website, handle, email, phone, whatsapp, instagram, linkedin }, i) in resume.contact" :key="i">
						<li>
							<span class="block text-sm text-gray-600">Website</span>
							<strong>{{ website}}</strong>
						</li>
						<li>
							<span class="block text-sm text-gray-600">Email</span>
							<strong><HideEmail :email="email" /></strong>
						</li>
						<li>
							<span class="block text-sm text-gray-600">Phone</span>
							<strong>{{ phone }}</strong>
						</li>
						<li>
							<span class="block text-sm text-gray-600">Whatsapp</span>
							<strong>{{ whatsapp }}</strong>
						</li>
						<li>
							<span class="block text-sm text-gray-600">Instagram</span>
							<strong><a :href="instagram" target="_blank">View my snaps</a></strong>
						</li>
						<li>
							<span class="block text-sm text-gray-600">On the web</span>
							<strong>@{{ handle }}</strong>
						</li>
						<li>
							<span class="block text-sm text-gray-600">Timezone</span>
							<strong>UCT+2</strong>
						</li>
						<li>
							<span class="block text-sm text-gray-600">Linkedin</span>
							<a :href="linkedin" class="font-bold text-black no-underline">chris.rault</a>
						</li>
					</ul>
				</div>
			</div>
		 </template>
		<template slot="navgroup">Work</template>
		<template slot="secondary-nav">
			<NavWork />
		</template>
	</Layout>
</template>

<script>
import resume from "@/data/resume.yaml";
import NavWork from "@/components/NavWork";
import HideEmail from "@/components/HideEmail";

export default {
	components: {
		NavWork,
		HideEmail
	},
	data() {
		return {
			resume
		};
	},
	methods: {
		printNow() {
			window.print();
		}
	},
	metaInfo: {
		title: "Resume of Chris Rault",
		bodyAttrs: {
			class: "work resume"
		}
	}
};
</script>
<style src="../../css/pages/resume.css"></style>