<template>
	<div class="overflow-x-auto overflow-x-hidden md:h-screen md:overflow-hidden app">
		<header class="relative z-50 flex flex-row items-center justify-between dark:bg-black sm:flex-col">
			<Logo class="text-white sm:mx-auto sm:mt-6" />
			<NavPrimary />
			<NavMobile />
			<NavTertiary />
		</header>
        <aside class="relative z-40 flex items-center dark:bg-gray-900 sm:justify-center">
			<NavWork />
		</aside>
		<main class="relative z-30 w-full overflow-x-hidden overflow-y-auto md:h-screen">
			<div class="px-5 pt-4 lg:max-w-screen-lg md:px-10 lg:px-20 md:pt-6 lg:pt-12">
				<h1><slot name="title" /></h1>
                <p><slot name="excerpt" /></p>
			</div>
			<div>
				<div class="grid grid-cols-2 gap-6 mx-6 mt-10 mb-10 md:gap-8 lg:grid-cols-3 md:mx-10 lg:mx-20">
                    <slot name="loop" />
    			</div>
			</div>
		</main>
	</div>
</template>

<script>
import NavPrimary from "~/components/NavPrimary.vue";
import NavMobile from "~/components/NavMobile.vue";
import NavTertiary from "~/components/NavTertiary.vue";
import NavWork from "~/components/NavWork.vue";
import Logo from "~/components/Logo.vue";

export default {
  	props: {
		sidebar: Boolean,
		top: Boolean,
        bottom: Boolean
    },
	components: {
		NavPrimary,
		NavMobile,
		NavTertiary,
        NavMobile,
        NavWork,
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