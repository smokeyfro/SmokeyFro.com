<template>
	<Layout :sidebar="true" :top="false" :bottom="true">
		<h1>Site credits</h1>
		<p>This site is only possible thanks to hard work from a looong list of fine folks who have all contributed their skills, time and energy to provide the web development community with the awesome tools we have at our disposal.</p>
        <template slot="bottom-shelf">
		<div class="grid grid-cols-1 gap-6 p-6 mx-6 mt-6 mb-6 bg-white border-t-8 rounded-md shadow-lg lg:mt-10 lg:mb-20 lg:p-10 md:gap-10 md:mx-10 lg:mx-20 sm:grid-cols-2 lg:grid-cols-4 border-accent">
            <div>
                <h2 class="mb-5 text-sm uppercase">Code</h2>
                <ul class="reset">
                    <li><a href="https://gridsome.org" aria-title="JAMstack static site generator based on Vue.js" target="_blank" rel="nofollow noopener">Gridsome</a></li>
                    <li><a href="https://vuejs.org" aria-title="The underlying javascript framework that gives me super powers." target="_blank" rel="nofollow noopener">Vue.js</a></li>
                    <li><a href="https://yarn.org" aria-title="The package manager I use to bundle and maintain my node modules." target="_blank" rel="nofollow noopener">Yarn</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Markdown" aria-title="Markdown is a lightweight markup language with plain-text-formatting syntax." target="_blank" rel="nofollow noopener">Markdown</a></li>
                </ul>
                <h2 class="mt-10 mb-5 text-sm uppercase">Graphics</h2>
                <ul class="reset">
                    <li><a href="https://www.heropatterns.com/" aria-title="A collection of repeatable SVG background patterns for you to use on your web projects." target="_blank" rel="nofollow noopener">Hero Patterns</a></li>
                    <li><a href="https://feathericons.com/" aria-title="Simply beautiful open source icons" target="_blank" rel="nofollow noopener">Feather Icons</a></li>
                    <li><a href="https://unsplash.com/" aria-title="The internet’s source of freely usable images." target="_blank" rel="nofollow noopener">Unsplash</a></li>
                    <li><a href="https://www.facebook.com/andsoitisphotography/" aria-title="Garden Route based Documentary & Lifestyle Photographer." target="_blank" rel="nofollow noopener">Amie De Souza</a></li>
                </ul>
            </div>
            <div>
                <h2 class="mb-5 text-sm uppercase">Gridsome</h2>
                <ul class="reset">
                    <li><a href="https://ghost.org" aria-title="Node based open-source blogging platform" target="_blank" rel="nofollow noopener">Source - Ghost</a></li>
                    <li><a href="https://gridsome.org/plugins/@gridsome/source-filesystem" aria-title="Transform files into content that can be fetched with GraphQL in your components." target="_blank" rel="nofollow noopener">Source - File System</a></li>
                    <li><a href="https://gridsome.org/plugins/gridsome-plugin-flexsearch" aria-title="Add lightning fast search to Gridsome with FlexSearch" target="_blank" rel="nofollow noopener">Plugin - FlexSearch</a></li>
                    <li><a href="https://gridsome.org/plugins/gridsome-plugin-feed" aria-title="Generate an RSS, Atom, and/or JSON feed for your Gridsome site." target="_blank" rel="nofollow noopener">Plugin - Feed</a></li>
                    <li><a href="https://gridsome.org/plugins/@gridsome/plugin-sitemap" aria-title="Generate sitemap for Gridsome sites" target="_blank" rel="nofollow noopener">Plugin - Sitemap</a></li>
                    <li><a href="https://gridsome.org/plugins/gridsome-plugin-tailwindcss" aria-title="A utility-first CSS framework for rapidly building custom user interfaces." target="_blank" rel="nofollow noopener">Plugin- Tailwind CSS</a></li>
                </ul>
                <h2 class="mt-10 mb-5 text-sm uppercase">Hosting</h2>
                <ul class="reset">
                    <li><a href="https://zeit.co" aria-title="Specialised JAMstack hosting, which I use to host this site." target="_blank" rel="nofollow noopener">Zeit</a></li>
                    <li><a href="https://digitalocean.com" aria-title="Affordable hosting for developers, which I use to host my php-based apps." target="_blank" rel="nofollow noopener">Digital Ocean</a></li>
                    <li><a href="https://runcloud.io" aria-title="A service which makes managing your DigitalOcean droplets a breeze." target="_blank" rel="nofollow noopener">RunCloud</a></li>
                </ul>
            </div>
            <div>
                <h2 class="mb-5 text-sm uppercase">Tools</h2>
                <ul class="reset">
                    <li><a href="https://github.com/svg/svgo" aria-title="Node.js tool for optimizing SVG files" target="_blank" rel="nofollow noopener">SVGOMG</a></li>
                    <li><a href="http://tinypng.org/" aria-title="Smart PNG and JPEG compression" target="_blank" rel="nofollow noopener">TinyPNG </a></li>
                    <li><a href="https://sendy.co/" aria-title="Self-hosted newsletter sending tool" target="_blank" rel="nofollow noopener">Sendy</a></li>
                    <li><a href="https://github.com/smokeyfro/SmokeyFro.com" aria-title="Code hosting for developers" target="_blank" rel="nofollow noopener">Github</a></li>
                    <li><a href="https://formcarry.com" aria-title="Form processing for JAMstack sites" target="_blank" rel="nofollow noopener">FormCarry</a></li>
                </ul>
            </div>
            <div>
                <h2 class="mb-5 text-sm uppercase">Node</h2>
                <ul class="reset">
                    <li><a href="https://www.npmjs.com/package/@tailwindcss/custom-forms" aria-title="A better base for styling form elements with Tailwind CSS." target="_blank" rel="nofollow noopener">Tailwind Custom Forms</a></li>
                    <li><a href="https://www.npmjs.com/package/axios" aria-title="Promise based HTTP client for the browser and node.js" target="_blank" rel="nofollow noopener">Axios</a></li>
                    <li><a href="https://www.npmjs.com/package/vue-storage" aria-title="localStorage plugin for Vue.js." target="_blank" rel="nofollow noopener">VueStorage</a></li>
                    <li><a href="https://www.npmjs.com/package/fslightbox" aria-title="A vanilla js lightbox plugin." target="_blank" rel="nofollow noopener">FSlightbox</a></li>
                    <li><a href="https://www.npmjs.com/package/vue-clickaway" aria-title="Reusable clickaway directive for reusable Vue.js components" target="_blank" rel="nofollow noopener">Vue Clickaway</a></li>
                    <!-- <li><a href="https://www.npmjs.com/package/cockpit-sdk" aria-title="A Javascript SDK for Cockpit Headless CMS" target="_blank" rel="nofollow noopener">Cockpit SDK</a> A JavaScript library exposing the Cockpit API.</li> -->
                </ul>
            </div>      
        </div>
        </template>
		<template slot="secondary-nav">
			<NavAbout />
		</template>
	</Layout>
</template>

<script>
import NavAbout from "~/components/NavAbout.vue";

export default {
	components: {
		NavAbout
	},
	metaInfo: {
		title: "",
		bodyAttrs: {
			class: "about credits"
		}
	}
};
</script>
<style>
.credits main ul,
.credits main ul li {
    @apply m-0 mb-2
}
.credits li a:after {
    content: attr(aria-title);
    background: #000;
    color: #fff;
    padding: 10px;
    border-radius: 10px;
    display: block;
    position: absolute;
    max-width: 200px;
    display: none;
}
.credits li a:hover:after {
    display: block;
}
</style>