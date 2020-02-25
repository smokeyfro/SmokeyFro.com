<template>
	<Layout :sidebar="true" :top="false" :bottom="true">
		<h1>Sponsor</h1>
		<p>Learn a new skill, while giving back to the Community. Contributions from fine folks like yourself enable me to dedicate time to writing tutorials.</p>
		<template slot="bottom-shelf">
			<SponsorForm />
		</template>
		<template slot="navgroup">
			Tutorials
		</template>
		<template slot="secondary-nav">
			<NavTuts />
		</template>
		<template slot="repo_link">
			<a href="https://github.com/smokeyfro/smokeyfro/blob/master/src/pages/tutorials/Sponsor.vue">Source</a>
		</template>
	</Layout>
</template>

<script>
import NavTuts from "@/components/NavTuts";
import SponsorForm from '@/components/SponsorForm.vue'

export default {
	components: {
		NavTuts,
		SponsorForm
	},
	metaInfo: {
		title: "Sponsor tuts on SmokeyFro",
		bodyAttrs: {
			class: "tuts sponsor"
		}
	}
};
</script>
<style src="../../css/pages/sponsor.css" />