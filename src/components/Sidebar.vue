<template>
    <div class="sidebar-wrap">
        <div class="overlay bg-gray-900 bg-opacity-70 inset-0 absolute left-0 z-40 -ml-30" @click="closeSidebarPanel" v-if="isPanelOpen"></div>
        <transition name="slide">
            <div v-if="isPanelOpen"
                 class="z-40 fixed overflow-auto top-0 right-0 h-screen w-1/3 border-l-4 border-orange-600">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
<script>
    import { store, mutations } from '@/store.js'

    export default {
        methods: {
            closeSidebarPanel: mutations.toggleNav
        },
        computed: {
            isPanelOpen() {
                return store.isNavOpen
            }
        }
    }
</script>
<style>
    .slide-enter-active,
    .slide-leave-active {
        transition: transform 0.2s ease;
    }
    .slide-enter,
    .slide-leave-to {
        transform: translateX(100%);
        transition: all 150ms ease-in 0s
    }
</style>