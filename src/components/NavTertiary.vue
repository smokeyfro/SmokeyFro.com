<template>
    <nav class="flex flex-row items-center mb-5 text-white sm:flex-col nav tertiary">
        <!-- <a href="/contact" class="connect" tooltip="Connect" aria-label="Connect via your favorite social media outlet">
            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 008 1l3-3a5 5 0 00-8-8l-1 2"/><path d="M14 11a5 5 0 00-8-1l-3 3a5 5 0 008 8l1-2"/></svg></span>
            <span class="hidden">Connect</span>
        </a> -->
        <g-link class="hidden md:block" tooltip="Subscribe" to="/subscribe" aria-label="Subscribe to the newsletter">
            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3"/></svg></span>
            <span class="hidden">Subscribe</span>
        </g-link>
        <a href="#" class="sm:mt-4" tooltip="Switch Theme" role="button" aria-label="Toggle dark/light" @click.prevent="toggleTheme">
            <span v-if="darkTheme"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg></span>
            <span v-else><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg></span>
            <span class="hidden">Theme</span>            
        </a>
        <g-link class="ml-2 sm:ml-0 sm:mt-4" tooltip="Search" to="/search" aria-label="Search the SmokeyFro site">
            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" viewBox="0 0 24 24">
                <defs/>
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
            </svg></span>
            <span class="hidden">Search</span>
        </g-link>
    </nav>

</template>

<script>
export default {
	data() {
		return {
			darkTheme: false
		};
	},
	methods: {
		toggleTheme() {
      		this.darkTheme = !this.darkTheme
      		window.__setPreferredTheme(
        		this.darkTheme ? 'dark' : 'light'
      		)
		}
	},
	mounted() {
    	if (window.__theme == 'dark') this.darkTheme = true
  	}
}
</script>