<template>
	<Layout :sidebar="true" :top="false" :bottom="false">
		<h1>Contact</h1>
		<p>Got a project you would like to discuss? Or maybe you just want to say hello? Fill out the form below and I'll do my best to respond asap.</p>
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