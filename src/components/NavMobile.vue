<template>
  <nav class="z-50 flex flex-row text-white sm:hidden nav mobile" role="navigation">
    <g-link to="/about" aria-label="About">
      <span>About</span>
    </g-link>
    <g-link to="/work" aria-label="Work">
      <span>Work</span>
    </g-link>
    <g-link class="tablet" to="/themes" aria-label="Themes">
      <span>Themes</span>
    </g-link>
    <g-link class="tablet" to="/tutorials" aria-label="Tuts">
      <span>Tuts</span>
    </g-link>
    <g-link class="tablet" to="/journal" aria-label="Journal">
      <span>Journal</span>
    </g-link>
    <g-link to="/contact" aria-label="Contact">
      <span>Contact</span>
    </g-link>
    <a href="#" class="relative opacity-100" aria-label="Explore"
        @click="toggleVisibility">
        <span v-if="isVisible" class="block px-2 close-nav"><svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" viewBox="0 0 24 24"><defs/><path d="M18 6L6 18M6 6l12 12"/></svg></span>
        <span v-else class="block px-2 "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg></span>
        <transition name="dropdown-fade">
        <div class="absolute mobile-links" v-on-clickaway="hideDropdown" v-if="isVisible" ref="dropdown">
            <nav>
                <g-link to="/themes" aria-label="Themes" @keydown.esc.exact="hideDropdown">
                    <span>Themes</span>
                </g-link>
                <g-link to="/journal" aria-label="Journal" @keydown.esc.exact="hideDropdown">
                    <span>Journal</span>
                </g-link>
                <g-link to="/tutorials" aria-label="Tutorials" @keydown.esc.exact="hideDropdown">
                    <span>Tutorials</span>
                </g-link>
                <g-link to="/subscribe" aria-label="Subscribe" @keydown.esc.exact="hideDropdown">
                    <span>Subscribe</span>
                </g-link>
                <a href="#" @click.prevent="handleToggleDrawer">Updates</a>
            </nav>
        </div>
    </transition>
    </a>
  </nav>
</template>

<script>
import navigation from "@/data/nav.yaml";
import { mixin as clickaway } from 'vue-clickaway'

export default {
    mixins: [ clickaway ],
    data() {
        return {
            navigation,
            isVisible: false
        };
    },
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible
        },
        hideDropdown() {
            this.isVisible = false
            this.focusedIndex = 0
        }
    }
}
</script>