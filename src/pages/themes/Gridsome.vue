<template>
	<Layout :sidebar="true" :top="false" :bottom="true">
		<h1>Gridsome</h1>
		<p>Below are the first of the Gridsome starters I have in the works. Subscribe to my newsletter to be notified when they launch.</p>
		<template slot="bottom-shelf">
			<ThemeIndex />
		</template>
		<template slot="secondary-nav">
            <NavThemes />
        </template>	
		<template slot="repo_link">
			<a href="https://github.com/smokeyfro/smokeyfro/blob/master/src/pages/Themes/Index.vue">Source</a>
		</template>
	</Layout>
</template>

<script>
import NavThemes from "@/components/NavThemes"
import ThemeIndex from "@/components/ThemeIndex"

export default {
	components: {
		NavThemes,
		ThemeIndex
	},
	metaInfo: {
		title: "Themes by SmokeyFro",
		bodyAttrs: {
			class: "themes gridsome"
		}
	}
}
</script>