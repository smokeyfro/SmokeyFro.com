<template>
	<Journal :sidebar="true" :top="true" :bottom="false">
		<template slot="title">Subscribe to my Journal</template>
		<template slot="excerpt">Want to keep up with my Journal entries, but not intrested in all my work related stuff? Signup here!</template>
		<template slot="content"><Newsletter title="" summary="" /></template>
	</Journal>
</template>

<script>
import Newsletter from "@/components/Newsletter";
import Journal from '@/layouts/Journal'

export default {
	components: {
		Newsletter,
		Journal
	},
	metaInfo: {
		title: "Random thoughts by SmokeyFro",
		bodyAttrs: {
			class: "journal subscribe"
		}
	}
};
</script>