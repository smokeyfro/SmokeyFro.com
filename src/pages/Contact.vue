<template>
	<Layout :sidebar="true" :top="false" :bottom="false">
		<h1>Contact</h1>
		<p>Got something you'd like to discuss? Fill out the form below and I'll respond asap.</p>
		<Form />
		<template slot="secondary-nav">
			<NavContact />
		</template>
		<template slot="navgroup">
			Hello
		</template>
	</Layout>
</template>

<script>
import Form from "@/components/Form.vue";
import NavContact from "@/components/NavContact.vue"
export default {
	components: {
		Form,
		NavContact
	},
	metaInfo: {
		title: "Hey ho, it's SmokeyFro!",
		bodyAttrs: {
			class: "contact"
		}
	}
};
</script>