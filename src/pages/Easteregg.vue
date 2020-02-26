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
			class: "easter-egg overflow-hidden"
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
					{
					type: 'circle',
					},
				],
				defaultColors: [
					'#ffc800',
					'#22292ff2',
					'#f3f7f9f7'
				],
			});
		}
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
.loading:after {
  overflow: hidden;
  display: inline-block;
  vertical-align: bottom;
  -webkit-animation: ellipsis steps(4,end) 900ms infinite;      
  animation: ellipsis steps(4,end) 900ms infinite;
  content: "\2026"; /* ascii code for the ellipsis character */
  width: 0px;
}

@keyframes ellipsis {
  to {
    width: 20px;    
  }
}

@-webkit-keyframes ellipsis {
  to {
    width: 20px;    
  }
}
</style>