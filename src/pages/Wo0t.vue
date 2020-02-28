<template>
	<Layout :sidebar="false" :top="true" :bottom="false">
		<template slot="top-shelf">
			<div class="relative flex items-center justify-center w-full h-screen success-message">
				<div class="max-w-md p-10 bg-gray-100 border-t-8 rounded-md shadow-lg border-accent">
					<h1 class="mt-0 text-4xl">You're subscribed!</h1>
					<p class="m-0">Now sit back and wait for new content to arrive in your inbox.</p>
				</div>
			</div>
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
			class: "success z-10"
		}
	},
	created(){
		if(process.isClient) {
			const confetti = require('vue-confetti').default
			this.$confetti.start({
				particles: [
					{
					type: 'heart',
					},
				],
				defaultColors: [
					'red',
					'pink',
					'#ba0000'
				],
        	});
		}
      	// setTimeout( () => this.$router.push({ path: '/subscribe'}), 5000);
    }
}
</script>
<style src="../css/pages/hifive.css" />