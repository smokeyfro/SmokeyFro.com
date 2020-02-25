<template>
	<Layout :sidebar="true" :top="true" :bottom="false">
		<template slot="top-shelf">
			<div class="flex items-center justify-center w-full h-screen">
				<div class="max-w-lg p-10 bg-gray-100 border-l-8 border-accent">
					<h1>You're subscribed!</h1>
					<p class="m-0">Now sit back and wait for new content to arrive in your inbox.</p>
				</div>
			</div>
		</template>
		<template slot="secondary-nav">
			<NavContact />
		</template>
		<template slot="navgroup">
			Hello
		</template>
	</Layout>
</template>

<script>
import NavContact from "@/components/NavContact.vue"
export default {
	components: {
		NavContact
	},
	metaInfo: {
		title: "Message sent",
		bodyAttrs: {
			class: "success overflow-hidden"
		}
	},
	created(){
      setTimeout( () => this.$router.push({ path: '/contact'}), 5000);
    }
}
</script>
<style src="../css/pages/hifive.css" />