<template>

	<nav class="w-full nav-wrapper sm:hidden">
		<ul class="w-full nav-ul">
			<li v-for="({ text, label, url }, i) in navigation.primary" :key="i">
				<g-link class="mx-auto text-white opacity-50 hover:opacity-100 transition-opacity duration-100 ease-out" :to="url" :tooltip="text" :aria-label="label">
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

<style src="../css/priority-nav-core.css" />

<style>
@media ( max-width: 640px ) {
	.nav-wrapper,
	.nav-ul {
		display: flex;
		width: 100%;
	}
	header  {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.nav-ul li {
		margin-left: 1rem;
	}
	.nav__dropdown-toggle {
		color: #fff;
	}
	ul.nav__dropdown.priority-nav__dropdown.show {
		right: -10px;
		width: auto;
		top: 30px;
		background: white;
		flex-direction: column;
		border: 1px solid #ddd;
		padding: 10px 20px;
		border-radius: 2px;
	}
	ul.nav__dropdown.priority-nav__dropdown.show li {
		margin: 0;
	}
	ul.nav__dropdown.priority-nav__dropdown.show a {
		color: #000;
		opacity: .7;
		padding: 5px 0;
		display: block;
	}
}
</style>