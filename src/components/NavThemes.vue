<template>
<nav class="flex nav secondary">
    <g-link to="/themes" exact><span>Themes</span></g-link>
    <g-link to="/themes/wordpress"><span>WordPress</span></g-link>
    <g-link to="/themes/gridsome"><span>Gridsome</span></g-link>
  </nav>
</template>

<script>
export default {
  name: "NavThemes"
};
</script>

<style scoped>
/* .aside nav.side a:last-of-type {
	padding-right: 0;
} */
</style>