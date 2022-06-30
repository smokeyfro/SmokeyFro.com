<template>
	<Layout :sidebar="false" :top="false" :bottom="false">
			<div class="flex items-center justify-center w-full h-screen">
				<div class="max-w-2xl p-10 bg-gray-100 border-l-8 border-accent">
					<h1>Message sent!</h1>
					<p class="m-0">Expect a response within the next 24 hours (though usually less).</p>
				</div>
			</div>
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
		// if(process.isClient) {
		// 	const confetti = require('vue-confetti').default
		// 	this.$confetti.start();
	    //   	setTimeout( () => this.$router.push({ path: '/contact'}), 5000);
		// 	this.$confetti.end();
		// }
      	setTimeout( () => this.$router.push({ path: '/contact'}), 5000);
    }
}
</script>
<style src="../css/pages/hifive.css" />