<template>
	<Layout :sidebar="true" :top="false" :bottom="true">
		<h1>Site credits</h1>
		<p>This site is only possible thanks to hard work from a looong list of fine folks who have all contributed their skills, time and energy to provide the web development community with the awesome tools we have at our disposal.</p>
        <template slot="bottom-shelf">
		<div class="grid grid-cols-1 gap-6 p-6 mx-6 mt-6 mb-6 bg-white border-t-8 rounded-md shadow-lg lg:mt-10 lg:mb-20 lg:p-10 md:gap-10 md:mx-10 lg:mx-20 sm:grid-cols-2 lg:grid-cols-3 border-accent">
            <div>
                <h2 class="mb-5 text-sm uppercase">Code</h2>
                <ul>
                    <li><a href="https://gridsome.org" title="JAMstack static site generator based on Vue.js" target="_blank" rel="nofollow noopener">Gridsome</a> the static site generator powering this site.</li>
                    <li><a href="https://vuejs.org" title="" target="_blank" rel="nofollow noopener">Vue.js</a> the underlying javascript framework that gives me super powers.</li>
                    <li><a href="https://yarn.org" title="" target="_blank" rel="nofollow noopener">Yarn</a> to bundle and maintain my node modules.</li>
                    <li><a href="https://runcloud.io" title="" target="_blank" rel="nofollow noopener">RunCloud</a> to manage my Digital Ocean droplet.</li>
                    <li><a href="https://digitalocean.com" title="" target="_blank" rel="nofollow noopener">Digital Ocean</a> to host my php-based apps.</li>
                    <li><a href="https://zeit.co" title="" target="_blank" rel="nofollow noopener">Zeit</a> for their Zeit Now JAMstack hosting platform.</li>
                    <li><a href="https://getcockpit.com" title="" target="_blank" rel="nofollow noopener">Cockpit</a> for my portfolio and side projects content.</li>
                    <li><a href="https://ghost.org" title="" target="_blank" rel="nofollow noopener">Ghost</a> for my tutorials and journal content.</li>
                    <li><a href="https://sheets.google.com" title="" target="_blank" rel="nofollow noopener">Google Sheets</a> for my upcoming tuts list</li>
                    <li><a href="https://en.wikipedia.org/wiki/Markdown" title="" target="_blank" rel="nofollow noopener">Markdown</a> for my static content.</li>
                    <li><a href="https://just-comments.com/" title="" target="_blank" rel="nofollow noopener">JustComments</a> for the journal and tutorial comments.</li>
                </ul>
                <h2 class="mt-10 mb-5 text-sm uppercase">Tools</h2>
                <ul>
                    <li><a href="https://github.com/svg/svgo" title="Node.js tool for optimizing SVG files" target="_blank" rel="nofollow noopener">SVGOMG</a> that I use to optimise my svg's.</li>
                    <li><a href="http://tinypng.org/" title="Smart PNG and JPEG compression" target="_blank" rel="nofollow noopener">TinyJP </a> to optimise my site images.</li>
                    <li><a href="https://sendy.co/" title="Self-hosted newsletter sending tool" target="_blank" rel="nofollow noopener">Sendy</a> a self-hosted MailChimp alternative.</li>
                    <li><a href="https://matamo.org" title="Self-hosted analytics platform" target="_blank" rel="nofollow noopener">Matamo</a> a self-hosted Google Analytics alternative.</li>
                    <li><a href="https://github.com/smokeyfro/SmokeyFro.com" title="Code hosting for developers" target="_blank" rel="nofollow noopener">Github</a> code hosting for developers.</li>
                    <li><a href="https://formcarry.com" title="Form processing for JAMstack sites" target="_blank" rel="nofollow noopener">FormCarry</a> form processing for JAMstack sites.</li>
                    <li><a href="https://affinity.serif.com/en-us/designer/" title="My design app of choice" target="_blank" rel="nofollow noopener">Affinity Designer</a> a vector graphics editor.</li>
                </ul>
            </div>
            <div>
                <h2 class="mb-5 text-sm uppercase">Gridsome</h2>
                <ul>
                    <li><a href="https://ghost.org" title="Node based open-source blogging platform" target="_blank" rel="nofollow noopener">Source - Ghost</a> The open-source blogging software.</li>
                    <li><a href="https://gridsome.org/plugins/@gridsome/source-filesystem" title="Transform files into content that can be fetched with GraphQL in your components." target="_blank" rel="nofollow noopener">Source - File System</a> Used to create collections from my markdown files.</li>
                    <li><a href="https://gridsome.org/plugins/@zefman/gridsome-source-instagram" title="Instagram source for Gridsome" target="_blank" rel="nofollow noopener">Source - Instagram</a> Used to pull in my most recent Instagram photos.</li>
                    <li><a href="https://gridsome.org/plugins/gridsome-plugin-flexsearch" title="Add lightning fast search to Gridsome with FlexSearch" target="_blank" rel="nofollow noopener">Plugin - FlexSearch</a> Used to create the search page on the site and the inline search widget on the 404 page.</li>
                    <li><a href="https://gridsome.org/plugins/gridsome-plugin-feed" title="Generate an RSS, Atom, and/or JSON feed for your Gridsome site." target="_blank" rel="nofollow noopener">Plugin - Feed</a> Generates a RSS, Atom, and JSON feed for the site.</li>
                    <li><a href="https://gridsome.org/plugins/@gridsome/plugin-sitemap" title="Generate sitemap for Gridsome sites" target="_blank" rel="nofollow noopener">Plugin - Sitemap</a> Creates a dynamic sitemap of all the sites content.</li>
                </ul>
                <h2 class="mt-10 mb-5 text-sm uppercase">Graphics</h2>
                <ul>
                    <li><a href="https://www.heropatterns.com/" title="A collection of repeatable SVG background patterns for you to use on your web projects." target="_blank" rel="nofollow noopener">Hero Patterns</a> from the topography pattern I used for the site background. </a></li>
                    <li><a href="https://www.facebook.com/andsoitisphotography/" title="Garden Route based Documentary & Lifestyle Photographer." target="_blank" rel="nofollow noopener">Amie De Souza</a> for the photo of me on the home page.</li>
                    <li><a href="https://feathericons.com/" title="Simply beautiful open source icons" target="_blank" rel="nofollow noopener">Feather Icons</a> for their awesome collection of simple svg icons.</li>
                    <li><a href="https://unsplash.com/" title="The internet’s source of freely usable images." target="_blank" rel="nofollow noopener">Unsplash</a> for their library of free images.</li>
                </ul>
            </div>
            <div>
                <h2 class="mb-5 text-sm uppercase">Node</h2>
                <ul>
                    <li><a href="https://www.npmjs.com/package/tailwindcss" title="A utility-first CSS framework for rapidly building custom user interfaces." target="_blank" rel="nofollow noopener">Tailwind CSS</a> utility first CSS framework.</li>
                    <li><a href="https://www.npmjs.com/package/@tailwindcss/custom-forms" title="A better base for styling form elements with Tailwind CSS." target="_blank" rel="nofollow noopener">Tailwind CSS - Custom Forms</a> extends Tailwind with support for fancy form inputs.</li>
                    <li><a href="https://www.npmjs.com/package/postcss" title="Tool for transforming styles with JS plugins." target="_blank" rel="nofollow noopener">PostCSS</a> a JavaScript library that lets us use tomorrows CSS today.</li>
                    <li><a href="https://www.npmjs.com/package/@fullhuman/postcss-purgecss" title="PostCSS plugin for PurgeCSS" target="_blank" rel="nofollow noopener">PostCSS - PurgeCSS</a> A runtime utility that strips out all unenecessary CSS.</li>
                    <li><a href="https://www.npmjs.com/package/postcss-nested" title="SASS style css nested rules with PostCSS" target="_blank" rel="nofollow noopener">PostCSS - Nested</a> Adds the ability to nest CSS selectors.</li>
                    <li><a href="https://www.npmjs.com/package/postcss-import" title="SASS style css imports with PostCSS" target="_blank" rel="nofollow noopener">PostCSS - Imports</a> Adds a utility to allow for CSS imports.</li>
                    <li><a href="https://www.npmjs.com/package/axios" title="Promise based HTTP client for the browser and node.js" target="_blank" rel="nofollow noopener">Axios</a> A JavaScript library for fetching content from remote API's.</li>
                    <li><a href="https://www.npmjs.com/package/cockpit-sdk" title="A Javascript SDK for Cockpit Headless CMS" target="_blank" rel="nofollow noopener">Cockpit SDK</a> A JavaScript library exposing the Cockpit API.</li>
                    <li><a href="https://www.npmjs.com/package/vue-storage" title="localStorage plugin for Vue.js." target="_blank" rel="nofollow noopener">VueStorage</a> A simple utility for remembering state (aka cookies/localStorage).</li>
                    <li><a href="https://www.npmjs.com/package/vue-silentbox" title="A simple lightbox inspired component for Vue.js." target="_blank" rel="nofollow noopener">Vue Silentbox</a> A minimal lightbox plugin for Vue, with support for multiple images.</li>
                    <li><a href="https://www.npmjs.com/package/vue-clickaway" title="Reusable clickaway directive for reusable Vue.js components" target="_blank" rel="nofollow noopener">Vue Clickaway</a> A utility to close things when clicking away from them.</li>
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
			class: "credits"
		}
	}
};
</script>
<!--<style src="../../css/pages/gear.css" />-->