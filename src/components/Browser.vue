<template>
  <div class="browser" :class="computedClass">
    <span class="browser-actions"></span>
    <span class="browser-menu"></span>
    <div class="browser-content">
      <iframe v-if="url" :src="url" class="w-full h-screen"></iframe>
      <g-image v-if="image" :src="image" width="525" height="295" :alt="alt" fit="cover" class="w-full"></g-image>
    </div>
  </div>
</template>

<script>
export default {
  name: "browser",
  props: ["url", "image", "os", "classes", "alt"],
  computed: {
    computedClass: function() {
      if (this.classes != null) {
        return this.classes;
      }
      if (this.os != null) {
        return this.os;
      }
      return "auto";
    }
  }
};
</script>