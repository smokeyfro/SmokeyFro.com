<template>
	<EasterEggWrap>
		<div class="flex items-center justify-center w-full h-screen">
			<div class="relative z-50 max-w-md p-10 mx-auto">
				<EasterEggImage />
				<h1 class="pt-0 mt-0 text-3xl"><strong>Congrats</strong>, you unlocked the devtools inspector 🥳</h1>
				<p class="mt-5 text-sm text-gray-600 loading">Hang tight while I redirect you...</p>
			</div>
		</div>
	</EasterEggWrap>
</template>

<script>
import EasterEggWrap from "~/layouts/EasterEggWrap.vue";
import EasterEggImage from "~/components/EasterEggImage.vue";

export default {
	components: {
        EasterEggWrap,
        EasterEggImage
	},
	metaInfo: {
		title: "Soufflé",
		bodyAttrs: {
			class: "easter-egg bg overflow-hidden"
		}
	},
	created(){
		if(process.isClient) {
			const confetti = require('vue-confetti').default
			this.$confetti.start({
				particles: [
					{
						type: 'image',
						url: '/gs.png',
					},
					{
						type: 'image',
						url: '/vue.png',
					},
				],
			});
		}
		setTimeout( () => this.$router.push({ path: '/devtools'}), 5000);
	}
}
</script>
<style src="../css/loading.css"></style>
<style>
.easteregg .p-10 svg {
    transform: scale(4);
    display: block;
    margin-bottom: 4rem;
    margin: 0 auto 5rem;
}
.easteregg h1 {
    text-align: center;
}
</style>