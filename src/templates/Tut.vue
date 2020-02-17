<template>
	<Layout :sidebar="true" :top="true" :bottom="false">
		<template slot="top-shelf">
			<g-image :src="$page.post.coverImage" :alt="$page.post.title" />
		</template>
		<article>
			<h1>{{ $page.post.title }}</h1>
			<p>{{ $page.post.description }}</p>
			<div class="markdown" v-html="$page.post.html" />
			<div id="commento"></div>
		</article>
		<template slot="navgroup">
			Tutorials
		</template>
		<template slot="secondary-nav">
			<NavTuts />
		</template>
		<template slot="repo_link">
			<a href="https://github.com/smokeyfro/smokeyfro/blob/master/src/templates/Tut.vue">Source</a>
		</template>
	</Layout>
</template>

<script>
import NavTuts from "@/components/NavTuts";
import config from '~/.temp/config.js'

export default {
	components: {
		NavTuts
	},
	metaInfo() {
		return {
			title: this.$page.post.title,
			meta: [
				{
					name: "description",
					content: this.$page.post.excerpt
				},
				{
					property: "og:title",
					content: this.$page.post.title
				},
				{
					property: "og:description",
					content: this.$page.post.excerpt
				},
				{
					property: "og:image",
					content: this.$page.post.coverImage || ""
				},
				{
					property: "og:type",
					content: 'article'
				},
				{
					property: "og:url",
					content: this.postUrl
				},
				{
					property: "fb:app_id",
					content: "1385144068322348"
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				},
				{
					name: "twitter:site",
					content: "smokeyfro"
				},
				{
					name: "twitter:domain",
					content: "smokeyfro.com"
				},
				{
					name: "twitter:title",
					content: this.$page.post.title
				},
				{
					name: "twitter:image:src",
					content: this.$page.post.coverImage || ""
				},
				{
					property: "twitter:url",
					content: this.postUrl
				},
				{
					name: "twitter:creator",
					content: "@smokeyfro"
				}
			],
			style: [
			  { src: "/prism.css", defer: false, rel: "stylesheet", type: "text/css" }
			],
			script: [
				{ src: "/prism.js", defer: false, type: "text/javascript" },
				{ src: "https://cdn.commento.io/js/commento.js", defer: true }
			],
			bodyAttrs: {
				class: "tuts tut single"
			}
		};
	},
	computed: {
		config () {
			return config
		},
		postUrl () {
			let siteUrl = this.config.siteUrl
			let postSlug = this.$page.post.slug
			return postSlug ? `${siteUrl}/tuts/${postSlug}/` : `${siteUrl}/${this.$page.post.path}/`
		},
		ogImageUrl () {
			return this.$page.post.coverImage || `${this.config.siteUrl}/images/sf-card.png`
		}
	}
};
</script>

<page-query>
query Post ($path: String) {
	post: ghostPost(path: $path) {
		title
		slug
		path
		id
		html
		excerpt
		coverImage: feature_image
		date: published_at (format: "D. MMMM YYYY")
	}
}
</page-query>

<style>
/* Comments */
#commento-footer {
  display: none;
}
#commento-submit-button-root {
  background: #000;
  padding: 15px 20px;
  font-size: 20px;
  text-transform: none;
  margin-right: 1px;
}
.commento-root {
    margin-bottom: 3rem;
}

/* PrismJS 1.19.0
https://prismjs.com/download.html#themes=prism-solarizedlight&languages=markup+css+clike+javascript+markup-templating+php&plugins=line-numbers+unescaped-markup+toolbar+copy-to-clipboard+download-button */
/*
 Solarized Color Schemes originally by Ethan Schoonover
 http://ethanschoonover.com/solarized

 Ported for PrismJS by Hector Matos
 Website: https://krakendev.io
 Twitter Handle: https://twitter.com/allonsykraken)
*/

/*
SOLARIZED HEX
--------- -------
base03    #002b36
base02    #073642
base01    #586e75
base00    #657b83
base0     #839496
base1     #93a1a1
base2     #eee8d5
base3     #fdf6e3
yellow    #b58900
orange    #cb4b16
red       #dc322f
magenta   #d33682
violet    #6c71c4
blue      #268bd2
cyan      #2aa198
green     #859900
*/

code[class*="language-"],
pre[class*="language-"] {
	color: #657b83; /* base00 */
	font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	font-size: 1em;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;

	line-height: 1.5;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}

pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
	background: #073642; /* base02 */
}

pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
code[class*="language-"]::selection, code[class*="language-"] ::selection {
	background: #073642; /* base02 */
}

/* Code blocks */
pre[class*="language-"] {
	padding: 1em;
	margin: .5em 0;
	overflow: auto;
	border-radius: 0.3em;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
	background-color: #fdf6e3; /* base3 */
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: .1em;
	border-radius: .3em;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: #93a1a1; /* base1 */
}

.token.punctuation {
	color: #586e75; /* base01 */
}

.token.namespace {
	opacity: .7;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.deleted {
	color: #268bd2; /* blue */
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.url,
.token.inserted {
	color: #2aa198; /* cyan */
}

.token.entity {
	color: #657b83; /* base00 */
	background: #eee8d5; /* base2 */
}

.token.atrule,
.token.attr-value,
.token.keyword {
	color: #859900; /* green */
}

.token.function,
.token.class-name {
	color: #b58900; /* yellow */
}

.token.regex,
.token.important,
.token.variable {
	color: #cb4b16; /* orange */
}

.token.important,
.token.bold {
	font-weight: bold;
}
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}

pre[class*="language-"].line-numbers {
	position: relative;
	padding-left: 3.8em;
	counter-reset: linenumber;
}

pre[class*="language-"].line-numbers > code {
	position: relative;
	white-space: inherit;
}

.line-numbers .line-numbers-rows {
	position: absolute;
	pointer-events: none;
	top: 0;
	font-size: 100%;
	left: -3.8em;
	width: 3em; /* works for line-numbers below 1000 lines */
	letter-spacing: -1px;
	border-right: 1px solid #999;

	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

}

	.line-numbers-rows > span {
		pointer-events: none;
		display: block;
		counter-increment: linenumber;
	}

		.line-numbers-rows > span:before {
			content: counter(linenumber);
			color: #999;
			display: block;
			padding-right: 0.8em;
			text-align: right;
		}

/* Fallback, in case JS does not run, to ensure the code is at least visible */
[class*='lang-'] script[type='text/plain'],
[class*='language-'] script[type='text/plain'],
script[type='text/plain'][class*='lang-'],
script[type='text/plain'][class*='language-'] {
	display: block;
	font: 100% Consolas, Monaco, monospace;
	white-space: pre;
	overflow: auto;
}

div.code-toolbar {
	position: relative;
}

div.code-toolbar > .toolbar {
	position: absolute;
	top: .3em;
	right: .2em;
	transition: opacity 0.3s ease-in-out;
	opacity: 0;
}

div.code-toolbar:hover > .toolbar {
	opacity: 1;
}

/* Separate line b/c rules are thrown out if selector is invalid.
   IE11 and old Edge versions don't support :focus-within. */
div.code-toolbar:focus-within > .toolbar {
	opacity: 1;
}

div.code-toolbar > .toolbar .toolbar-item {
	display: inline-block;
}

div.code-toolbar > .toolbar a {
	cursor: pointer;
}

div.code-toolbar > .toolbar button {
	background: none;
	border: 0;
	color: inherit;
	font: inherit;
	line-height: normal;
	overflow: visible;
	padding: 0;
	-webkit-user-select: none; /* for button */
	-moz-user-select: none;
	-ms-user-select: none;
}

div.code-toolbar > .toolbar a,
div.code-toolbar > .toolbar button,
div.code-toolbar > .toolbar span {
	color: #bbb;
	font-size: .8em;
	padding: 0 .5em;
	background: #f5f2f0;
	background: rgba(224, 224, 224, 0.2);
	box-shadow: 0 2px 0 0 rgba(0,0,0,0.2);
	border-radius: .5em;
}

div.code-toolbar > .toolbar a:hover,
div.code-toolbar > .toolbar a:focus,
div.code-toolbar > .toolbar button:hover,
div.code-toolbar > .toolbar button:focus,
div.code-toolbar > .toolbar span:hover,
div.code-toolbar > .toolbar span:focus {
	color: inherit;
	text-decoration: none;
}
.code-toolbar {
	@apply my-6;
}
figure.kg-image, 
figure.kg-card {
    margin-bottom: 2rem;
	max-width: 760px;
}
.kg-embed-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
.kg-embed-card {
    flex-grow: 1;
	width: 100%;
	height: 537px	;
	display: block;
    position: relative;
    padding: 0;
}
.kg-embed-card iframe, 
.kg-embed-card object, 
.kg-embed-card embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.post-full-content iframe {
    margin: 0 auto!important;
}
.kg-card figcaption {
    margin-top: .5rem;
    font-size: 14px;
    color: #777;
}
/* @media (min-width: 1024px) {
	main {
		display: flex;
		align-items: flex-start;
	}
	main > figure,
	main > article {
		height: 100vh;
	}
	article {
		order: 1;
	}
	main > figure {
		width: 35%;
		order: 2;
		margin: 0;
		position: fixed;
		top: 0;
		right: 0;
	}
	main > figure img {
		object-fit: cover;
		height: 100%;
		width: 100%;
	}
} */
</style>