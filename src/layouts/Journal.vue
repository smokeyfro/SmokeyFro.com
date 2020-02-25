<template>
	<div class="overflow-x-auto overflow-x-hidden md:h-screen md:overflow-hidden app">
		<header class="relative z-50 flex flex-row items-center justify-between dark:bg-black sm:flex-col">
			<Logo />
			<NavPrimary />
			<NavMobile />
			<NavTertiary />
		</header>
        <aside class="relative z-40 flex items-center dark:bg-gray-900 sm:justify-center">
			<NavJournal />
		</aside>
		<main class="relative z-30 w-full overflow-x-hidden overflow-y-auto md:h-screen">
            <g-image src="/chris-jumping.svg" class="object-cover w-full h-64 bg-white xl:fixed xl:top-0 xl:right-0 xl:w-1/3 xl:h-screen" />
            <div class="xl:w-1/2">
                <div class="px-5 pt-4 lg:max-w-screen-lg md:px-10 md:pt-6">
                    <h1><slot name="title" /></h1>
                    <p><slot name="excerpt" /></p>
                </div>
                <div class="w-full mx-6 md:mx-10">
                    <slot name="content" />
                </div>
            </div>
		</main>
	</div>
</template>

<script>
import NavPrimary from "~/components/NavPrimary.vue";
import NavMobile from "~/components/NavMobile.vue";
import NavTertiary from "~/components/NavTertiary.vue";
import NavJournal from "~/components/NavJournal.vue";
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
        NavJournal,
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