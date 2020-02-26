<template>
	<EasterEggWrap>
		<div class="flex items-center justify-center w-full h-screen">
			<div class="max-w-lg p-10 rounded-md shadow-lg">
				<EasterEggImage />
				<h1 class="pt-0 mt-0">Congrats, you unlocked secret dev settings!</h1>
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
			class: "easter-egg overflow-hidden"
		}
	},
	created(){
		this.$confetti.start();
		setTimeout( () => this.$router.push({ path: '/devtools'}), 5000);
		}
	}
</script>
<style scoped>
.p-10 svg {
    transform: scale(4);
    display: block;
    margin-bottom: 4rem;
    margin: 0 auto 5rem;
}
h1 {
    text-align: center;
}
</style>