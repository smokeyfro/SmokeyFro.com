<template>
<div class="fixed top-0 right-0 notes-wrap">
    <button aria-label="Close" v-if="isVisible" class="fixed top-0 right-0 mt-5 mr-5 whitespace-pre hide-notes hover-text-red hover:bg-transparent toggle-notes" @click="toggleVisibility"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
    <button aria-label="Release Notes" v-else class="fixed top-0 right-0 mt-5 mr-5 whitespace-pre show-notes hover-text-red hover:bg-transparent toggle-notes" @click="toggleVisibility"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg></button>
    <div v-on-clickaway="hideNotes" v-if="isVisible != false" class="flex flex-col items-start justify-start h-screen bg-white shadow-lg release-notes">
        <h2 class="p-6 m-0 -mt-1 text-lg ">🎉 Recent Updates</h2>
        <div class="overflow-x-auto">
            <article class="box-content p-4 mb-0 odd:bg-gray-200 even:bg-white" v-for="note in $static.notes.edges" :key="note.node.id">
                <h3 class="mb-2 text-sm text-gray-600">{{ note.node.date }}</h3>
                <ul class="p-0 m-0 reset">
                    <li class="flex items-start justify-start mb-2" v-for="(update, $index) in note.node.updates" :key="$index">
                        <svg v-if="update.type === 'improvement'" class="inline-block mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="orange" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M1.05 12H7M17.01 12h5.95"/></svg>
                        <svg v-if="update.type === 'new'" class="inline-block mr-2 bg-transparent" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M1.05 12H7M17.01 12h5.95"/></svg>
                        <svg v-if="update.type === 'content'" class="inline-block mr-2 bg-transparent" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M1.05 12H7M17.01 12h5.95"/></svg>
                        <svg v-if="update.type === 'fix'" class="inline-block mr-2 bg-transparent" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M1.05 12H7M17.01 12h5.95"/></svg>
                        <p class="m-0 text-sm">{{ update.title }} <span class="text-xs text-gray-500" v-if="update.example_url != false">(<g-link :to="update.example_url" class="text-gray-700 underline link" title="See an example">example</g-link>)</span></p>
                    </li>
                </ul>
            </article>
        </div>
        <div class="flex items-start self-end justify-start w-full p-4 mt-auto">
            <strong class="mt-1 text-xs uppercase">Key:</strong>
            <ul class="grid w-full grid-cols-1 reset md:grid-cols-2">
                <li class="flex items-end text-xs text-gray-600"><svg class="inline-block mr-2 bg-transparent" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M1.05 12H7M17.01 12h5.95"/></svg> <span>New</span></li>
                <li class="flex items-end text-xs text-gray-600"><svg class="inline-block mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="orange" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M1.05 12H7M17.01 12h5.95"/></svg> <span>Improvement</span></li>
                <li class="flex items-end text-xs text-gray-600"><svg class="inline-block mr-2 bg-transparent" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M1.05 12H7M17.01 12h5.95"/></svg> <span>Content</span></li>
                <li class="flex items-end text-xs text-gray-600"><svg class="inline-block mr-2 bg-transparent" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M1.05 12H7M17.01 12h5.95"/></svg> <span>Bug Fix</span></li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
export default {
    mixins: [ clickaway ],
    data() {
        return {
            isVisible: false
        }
    },
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible
        },
        hideNotes() {
            this.isVisible = false
            this.focusedIndex = 0
        }
    }
}
</script>

<static-query>
query ReleaseNotes {
	notes: allReleaseNote {
		edges {
			node {
				date(format: "dddd D MMMM, YYYY")
                updates {
                    title
                    type
                    example_url
                }
				path
                id
			}
		}
	}
}
</static-query>

<style>
.notes-wrap button {
    border-radius: 50%;
}
.notes-wrap button:before {
    content: "Release Notes";
    transform: translateX(-120%);
    position: absolute;
    font-size: 14px;
    color: #777;
    opacity: 0;
    transition: all 0.2s ease-in;
    z-index: -1;
}
.notes-wrap .show-notes:before {
    content: "Release Notes";
}
.notes-wrap .hide-notes:before {
    content: "Close";
    transform: translateX(-150%);
}
.notes-wrap button:hover:before {
    opacity: 1;
}
.notes-wrap button:hover svg path {
    fill: #111;
}
.release-notes {
    width: 300px;
    z-index: 999;
}
.release-notes ul,
.release-notes li:last-of-type {
    @apply mb-0
}
.release-notes li svg {
    min-width: 24px;
    min-height: 20px;
    width: 20px;
    height: 20px;
    transform: scale(.8);
}
.release-notes li svg path {
    fill: transparent;
}
</style>