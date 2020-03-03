<template>
	<EasterEggWrap>
		<div class="flex items-center justify-center w-full h-screen">
			<div class="relative z-50 max-w-lg p-10">
				<EasterEggImage />
				<h1 class="pt-0 mt-0"><strong>Congrats</strong>, you unlocked secret dev settings!</h1>
				<p class="loading">Hold tight while I redirect you...</p>
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