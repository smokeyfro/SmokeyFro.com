<template>
	<Layout :sidebar="true" :top="false" :bottom="true">
		<h1>WordPress</h1>
		<p>These are the free WordPress themes I created using Beans that were previously available on ThemeButler.com</p> 
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
		title: "WordPress themes by SmokeyFro",
		bodyAttrs: {
			class: "themes wordpress"
		}
	}
}
</script>