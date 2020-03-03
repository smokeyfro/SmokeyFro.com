<template>
	<div class="overflow-x-auto overflow-x-hidden md:h-screen md:overflow-hidden app">
		<header class="relative z-50 flex flex-row items-center justify-between dark:bg-black sm:flex-col">
			<Logo class="text-white sm:mx-auto sm:mt-6" />
			<NavPrimary />
			<NavMobile />
			<NavTertiary />
		</header>
        <aside class="relative z-40 flex items-center dark:bg-gray-900 sm:justify-center">
			<NavAbout />
		</aside>
		<main class="relative z-30 w-full overflow-x-hidden overflow-y-auto md:h-screen">
            <div class="mx-6 md:mx-10 lg:mx-20">
                <slot />
            </div>
		</main>
	</div>
</template>

<script>
import NavPrimary from "~/components/NavPrimary.vue";
import NavMobile from "~/components/NavMobile.vue";
import NavTertiary from "~/components/NavTertiary.vue";
import NavAbout from "~/components/NavAbout.vue";
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
        NavAbout,
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