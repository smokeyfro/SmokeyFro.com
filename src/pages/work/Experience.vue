<template>
	<Layout :sidebar="true" :image="false">
		<h1>Experience</h1>
		<p>I've been working online for just shy of two decades and in that time I co-founded a small agency and brought a number of digital brands to market.</p>
		<div class="mb-10 timeline">
			<div v-for="({ company, date, location, role, summary }, i) in Resume.experience" :key="i">
				<div>{{ location }} &middot; {{ date }}</div>
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

<style>

.experience .timeline h2 {
	margin: 0;
}
.experience .timeline p {
	max-width: 700px;
}
.experience .timeline > div {
		padding-left: 2rem;
		margin-bottom: 2rem;
		position: relative;
}
.experience .timeline > div > div {
		color: #666;
		font-weight: 500;
}
.experience .timeline h2:before {
		content: '+';
		color: #000;
		position:absolute;
		left: -5px;
		transition: all 0.3s ease-out;
}
body[data-theme="dark"].experience .timeline h2:before {
	color: rgba(255, 255, 255, 0.7);
}
.experience .timeline > div:hover h2:before {
		color: var(--accent-color);
}
</style>