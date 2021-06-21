<template>
  <div id="burger" :class="{ 'active' : isBurgerActive }" @click.prevent="toggle">
    <slot>
      <button class="hidden p-2 mt-5 mr-6 animate-pulse bg-white border-2 border-yellow-400 ring-4 ring-yellow-200 rounded-full md:fixed md:top-0 md:right-0 md:block hover:bg-white hover:border-accent" type="button" title="Menu">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg>
      </button>
    </slot>
  </div>
</template>
<script>
import { store, mutations } from "@/store.js";

export default {
  // data: () => ({
  //     isBurgerActive: false
  // }),
  computed: {
    isBurgerActive() {
      return store.isNavOpen;
    }
  },
  methods: {
    toggle() {
      mutations.toggleNav();
    }
  }
};
</script>
<style>
button {
  cursor: pointer;
}

/* remove blue outline */
button:focus {
  outline: 0;
}
</style>