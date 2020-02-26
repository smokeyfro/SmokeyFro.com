<template>
	<div class="w-full h-screen overflow-x-auto overflow-x-hidden md:overflow-hidden">
		<Logo class="absolute top-0 left-0 pt-10 pl-10" />
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