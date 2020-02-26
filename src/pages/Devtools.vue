<template>
	<DevToolsWrap>
        <div class="relative z-40 flex items-center justify-center w-full h-screen">
			<div class="p-10 bg-white rounded-md shadowl-lg">
                <h1 class="m-0 text-2xl bold">Dev Tools</h1>
                <h2 class="pb-3 mb-3 border-b">For the curious developer</h2>
                <DevTools />
            </div>
        </div>
		<template slot="repo_link">
			<a href="https://github.com/smokeyfro/smokeyfro/blob/master/src/pages/404.vue" class="border-b border-transparent hover:border-gray-400 transition-border-color">Source</a>
		</template>
	</DevToolsWrap>
</template>

<script>
import DevTools from "~/components/DevTools.vue";
import DevToolsWrap from "~/layouts/DevToolsWrap.vue";

export default {
    components: {
        DevTools,
        DevToolsWrap
    },
	metaInfo: {
		title: `DevTools`,
		htmlAttrs: {
			class: ""
		},
		bodyAttrs: {
			class: "devtools"
		},
    },
    created(){
        if(process.isClient) {
			const confetti = require('vue-confetti').default
			Vue.use(confetti)
			this.$confetti.stop();
		}
	}
}
</script>