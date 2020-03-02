<template>
	<Layout :sidebar="true" :top="false" :bottom="false">
		<h1>Speaking</h1>
		<p class="lead">I am passionate about sharing my craft and have had the privilage of speaking at a number of technology related conferences and meetups.</p>
		<div class="p-6 mt-10 bg-white border rounded-md md:p-10">
			<h2>Topics I'm current excited about</h2>
			<p>These are the topics that are currently getting me excited. I'll update these over time as my interests develop.</p>
			<div class="grid gap-4 md:gap-10 grid-cols1 md:grid-cols-2">
				<article v-for="({ title, summary }, i) in talks.topics" :key="i">
					<h3>{{ title }}</h3>
					<p class="m-0">{{ summary }}</p>
				</article>
			</div>
		</div>
		<div class="mt-20 mb-1">
			<h2 class="m-0 text-xl uppercase">Past Talks</h2>
			<p class="m-0 mb-3 text-base">Below are some of my past talks from when I was still working with Joomla!.</p>
		</div>
		<div class="grid gap-8 pt-6 mb-16 border-t-2 border-black md:gap-10 grid-cols1 md:pt-10">
			<article v-for="({ title, summary, name, date, location, links, event }, i) in talks.talks" :key="i">
				<h3>{{ title }}</h3>
				<p class="mb-2">{{ summary }}</p>
				<div class="hidden mt-6 mb-10 mb-20 overflow-x-auto overflow-y-hidden bg-white border rounded-sm md:block md:mt-10">
					<table class="w-full max-w-full overflow-hidden text-left rounded-sm">
						<thead class="text-white bg-black">
							<th class="rounded-tl-lg">Event</th>
							<th>Date</th>
							<th>Location</th>
							<th class="rounded-tr-lg"></th>
						</thead>
						<tbody>
							<tr v-for="({ name, date, location, links }, i) in event" :key="i">
								<td>{{ name }}</td>
								<td>{{ date }}</td>
								<td>{{ location }}</td>
								<td>
									<a v-for="({ text, url, title }, i) in links" :key="i" class="mr-3 text-sm" :href="url">{{ text}}</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="block md:hidden ">
					<ul>
						<li v-for="({ title, summary, name, date, location, links, event }, i) in talks.talks" :key="i">
							<h4 class="text-xl font-bold">{{ title }}</h4>
							<p class="m-0 text-sm">{{ date }} &middot; {{ location }}</p>
							<p class="m-0 mt-1"><a v-for="({ text, url, title }, i) in links" :key="i" class="mr-3 text-sm" :href="url">{{ text}}</a></p>
						</li>
					</ul>
				</div>
			</article>
		</div>
		<template slot="secondary-nav">
			<NavWork />
		</template>
	</Layout>
</template>

<script>
import NavWork from "~/components/NavWork.vue";
import talks from "@/data/talks.yaml";
export default {
	components: {
		NavWork
	},
	data() {
		return {
			talks
		};
	},
	metaInfo: {
		title: "",
		bodyAttrs: {
			class: "speaking"
		}
	}
};
</script>