<template>
	<div class="overflow-x-auto overflow-x-hidden md:h-screen md:overflow-hidden layout app">
		<header class="relative z-50 flex flex-row items-center justify-between dark:bg-black sm:flex-col">
			<Logo />
			<NavPrimary />
			<NavMobile />
			<NavTertiary />
		</header>
		<aside class="relative z-40 flex items-center dark:bg-gray-900 sm:justify-center" v-if="sidebar">
			<slot name="secondary-nav" />
		</aside>
		<main class="relative z-30 w-full overflow-x-hidden overflow-y-auto md:h-screen">
			<div v-if="top">
				<slot name="top-shelf" />
			</div>
			<div class="px-5 pt-4 lg:max-w-screen-lg md:px-10 lg:px-20 lg:pt-12 md:pt-6">
				<slot />
			</div>
			<div v-if="bottom">
				<slot name="bottom-shelf" />
			</div>
		</main>
	</div>
</template>

<script>
import NavPrimary from "~/components/NavPrimary.vue";
import NavMobile from "~/components/NavMobile.vue";
import NavTertiary from "~/components/NavTertiary.vue";
import Logo from "~/components/Logo.vue";

export default {
  	props: [
		'sidebar',
		'top',
		'bottom'
	],
	components: {
		NavPrimary,
		NavMobile,
		NavTertiary,
		NavMobile,
		Logo
	}
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>