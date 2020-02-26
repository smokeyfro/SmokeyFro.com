<template>
	<div class="w-full h-screen overflow-x-auto overflow-x-hidden md:overflow-hidden">
		<div class="absolute top-0 left-0 z-50 flex items-center pt-5 pl-5"><Logo /> <strong class="ml-3"> Back</strong></div>
        <slot />
	</div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
	components: {
        Logo
	}
}
</script>

<style>
.devtools {
	background-color: var(--aside-bg);
}
</style>