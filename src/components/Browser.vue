<template>
  <div class="browser" :class="computedClass">
    <span class="browser-actions"></span>
    <span class="browser-menu"></span>
    <div class="browser-content">
      <iframe v-if="url" :src="url" class="w-full h-screen"></iframe>
      <g-image v-if="image" :src="image" :alt="alt"></g-image>
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

<style>
.browser {
  border-radius: 3px;
  background: #eee;
  padding-top: 30px;
  position: relative;
}
.browser-menu,
.browser-actions {
  position: absolute;
}
.browser-actions,
.browser-actions:before,
.browser-actions:after,
.browser-menu,
.browser-menu:before,
.browser-menu:after {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  display: block;
  content: "";
}
.browser-actions:before,
.browser-actions:after {
  position: absolute;
  top: 0;
}
.browser-actions {
  background: red;
  top: 10px;
  left: 10px;
}
.browser-actions:before {
  background: orange;
  left: 20px;
}
.browser-actions:after {
  background: green;
  left: 40px;
}

.browser-menu,
.browser-menu:before,
.browser-menu:after {
  position: absolute;
  width: 0.25rem;
  height: 0.25rem;
  background-color: #cbd5e0;
  content: "";
  right: 8px;
}
.browser-menu {
  top: 8px;
  right: 8px;
}
.browser-menu:before {
  top: 6px;
  right: 0;
}
.browser-menu:after {
  top: 13px;
  right: 0;
}

.browser-content {
  min-height: 200px;
  background: #eee;
  padding: 1px;
}
body[data-theme="dark"] .browser {
  background: #000;
}
</style>