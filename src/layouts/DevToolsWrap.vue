<template>
	<div class="w-full h-screen overflow-x-auto overflow-x-hidden md:overflow-hidden">
		<Logo class="absolute top-0 left-0 z-50 pt-10 pl-10" />
        <slot />
		<video src="smoke.mp4" autoplay loop class="absolute top-0 bottom-0 left-0 right-0 z-0 object-cover w-full h-screen"/>
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