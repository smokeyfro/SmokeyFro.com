<template>
    <nav class="flex nav secondary">
        <g-link to="/contact" exact><span>Message</span></g-link>
        <a href="mailto:chris@smokeyfro.com" title="Send me an message using your email client" class="text-sm external"><span>Email <img src="/external.svg" class="inline-block w-3 h-3" /></span></a>
        <a href="tel:+27767773705" title="Give me a call" class="text-sm external"><span>Call <img src="/external.svg" class="inline-block w-3 h-3" /></span></a>
        <a href="skype:chris.rault.tbr?message" title="Send me a message on Skype" class="text-sm external"><span>Skype <img src="/external.svg" class="inline-block w-3 h-3" /></span></a>
        <div class="relative z-50 social-links">
            <a href="#" class="text-sm" @click.prevent="toggleSocial" @keydown.space.exact.prevent="toggleSocial" @keydown.esc.exact="hideDropdown" @keydown.shift.tab="hideDropdown">Social <b v-if="isVisible">-</b><b v-if="isVisible === false">+</b></a>
            <div class="absolute top-0 right-0 p-6 mt-10 bg-white shadow-lg md:mt-10 md:ml-2 md:left-0 md:right-auto md:top-auto md:mt-0 rounded-bl-md md:shadow-none md:bg-transparent md:p-0" v-if="isVisible" >
                <strong class="block w-full mb-2 text-sm uppercase md:hidden md:mt-6 external">Social</strong>
                <a href="https://instagram.com/smokeyfro" target="_blank" rel="nofollow noopener" title="" class="block text-sm external social">Instagram <img src="/external.svg" class="inline-block w-3 h-3" /></a>
                <a href="https://twitter.com/smokeyfro" target="_blank" rel="nofollow noopener" title="" class="block text-sm external social">Twitter <img src="/external.svg" class="inline-block w-3 h-3" /></a>
                <a href="https://pinterest.com/smokeyfro/" target="_blank" rel="nofollow noopener" title="" class="block text-sm external social">Pinterest <img src="/external.svg" class="inline-block w-3 h-3" /></a>
                <a href="https://www.linkedin.com/in/chrisrault" target="_blank" rel="nofollow noopener" title="" class="block text-sm external social">Linkedin <img src="/external.svg" class="inline-block w-3 h-3" /></a>
                <a href="https://github.com/smokeyfro" target="_blank" rel="nofollow noopener" title="" class="block text-sm external social">Github <img src="/external.svg" class="inline-block w-3 h-3" /></a>
                <a href="https://dev.to/smokeyfro" target="_blank" rel="nofollow noopener" title="" class="block text-sm external social">Dev.to <img src="/external.svg" class="inline-block w-3 h-3" /></a>
            </div>
        </div>
    </nav>
</template>

<script>
import navigation from "@/data/nav.yaml";
import { mixin as clickaway } from 'vue-clickaway'

export default {
    mixins: [ clickaway ],
    data() {
        return {
            isVisible: false
        };
    },
    methods: {
        toggleSocial() {
            this.isVisible = !this.isVisible
        },
        hideDropdown() {
            this.isVisible = false
            this.focusedIndex = 0
        },
    }
}
</script>