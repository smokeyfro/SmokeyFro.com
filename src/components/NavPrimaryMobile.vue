<template>

	<nav class="w-full nav-wrapper sm:hidden">
		<ul class="w-full nav-ul">
			<li v-for="({ text, label, url }, i) in navigation.primary" :key="i">
				<g-link class="mx-auto text-white transition-opacity duration-100 ease-out opacity-50 hover:opacity-100" :to="url" :tooltip="text" :aria-label="label">
					<span>{{ text }}</span>
				</g-link>
			</li>
		</ul>
	</nav>

</template>

<script>
	import navigation from "@/data/nav.yaml";

	export default {
		data() {
			return {
				navigation
			};	
		},
		async mounted () {
			window.priorityNav = require('priority-nav')
			var wrapper = document.querySelector(".nav-wrapper");
            var nav = priorityNav.init({
                mainNavWrapper: ".nav-wrapper",
				breakPoint: 0,
				navDropdownLabel: "&hellip;",
				navDropdownBreakpointLabel: "Nav",
                throttleDelay: '50'
            });
		}
	}
</script>