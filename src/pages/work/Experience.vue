<template>
	<Layout :sidebar="true" :image="false">
		<h1>Experience</h1>
		<p>I've been working online for just shy of two decades and in that time I co-founded a small agency and brought a number of digital brands to market.</p>
		<div class="mb-20 timeline">
			<div class="mt-10" v-for="({ company, date, location, role, summary }, i) in Resume.experience" :key="i">
				<div class="text-gray-600">{{ location }} &middot; {{ date }}</div>
				<h2>{{ role }} @ {{ company }}</h2>
				<p>{{ summary }}</p>
			</div>
		</div>
		<template slot="navgroup">
			Work
		</template>
		<template slot="secondary-nav">
			<NavWork />
		</template>
		<template slot="repo_link">
			<a href="https://github.com/smokeyfro/smokeyfro/blob/master/src/pages/work/Experience.vue">Source</a>
		</template>
	</Layout>
</template>

<script>
import NavWork from "@/components/NavWork";
import Resume from "@/data/resume.yaml";

export default {
	components: {
		NavWork
	},
	data() {
		return {
			Resume
		};
	},
	metaInfo: {
		title: "Work Experience by SmokeyFro",
		bodyAttrs: {
			class: "experience"
		}
	}
};
</script>