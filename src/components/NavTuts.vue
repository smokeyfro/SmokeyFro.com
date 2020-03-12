<template>
<nav class="flex nav secondary" role="navigation">
    <g-link to="/tutorials" exact><span>Tutorials</span></g-link>
    <g-link to="/tutorials/topics"><span>Topics</span></g-link>
    <g-link to="/tutorials/upcoming"><span>Upcoming</span></g-link>
    <g-link to="/tutorials/sponsor"><span>Sponsor</span></g-link>
  </nav>
</template>

<script>
export default {
  name: "NavTuts"
};
</script>