<template>
  <nav class="hidden text-white flex-row sm:flex sm:flex-col nav primary" ref="primaryNav" role="navigation">
    <g-link exact class="flex items-center justify-start" :class="slug" v-for="({ text, slug, label, icon, url }, i) in navigation.primary" :key="i" :to="url" :tooltip="text" :aria-label="label">
      <span class="icon" v-if="icon" v-html="icon" />
      <span class="hidden text">{{ text }}</span>
    </g-link>
  </nav>
</template>

<script>
import navigation from "@/data/nav.yaml";
export default {
  data() {
    return {
      navigation,
    };
  },
  methods: {
    startArrowKeys() {
		this.$refs.primaryNav.children[0].focus()
    },
    focusPrevious(isArrowKey) {
        this.focusedIndex = this.focusedIndex - 1
        if (isArrowKey) {
            this.focusItem()
        }
    },
    focusNext(isArrowKey) {
        this.focusedIndex = this.focusedIndex + 1
        if (isArrowKey) {
            this.focusItem()
        }
    },
  }
}
</script>