<template>
	<Layout :sidebar="true" :top="true" :bottom="false">
		<template slot="top-shelf">
			<div class="flex items-center justify-center w-full h-screen">
				<div class="max-w-lg p-10 bg-gray-100 border-l-8 border-accent">
					<h1>Message sent!</h1>
					<p class="m-0">Expect a response within the next 24 hours (though usually less).</p>
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
		if(process.isClient) {
			const confetti = require('vue-confetti').default
			this.$confetti.start();
		}
      	setTimeout( () => this.$router.push({ path: '/contact'}), 2000);
    }
}
</script>
<style src="../css/pages/hifive.css" />