<template>
<Layout :sidebar="false" :top="false" :bottom="false">
	<article>
		<h1>{{ $page.post.title }}</h1>
		<p v-html="$page.post.excerpt" />
		<div class="downloads">
			<a :href="$page.post.download" download>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="inline-block w-3 h-3" viewBox="0 0 24 24">
				<defs/>
				<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
				</svg> Download
			</a>
		</div>
	</article>
	<figure v-if="$page.post.image" class="theme-image">
		<g-image :src="$page.post.image" :alt="$page.post.title" />
	</figure>
	<template slot="navgroup">
	  Freebies
	</template>
	<template slot="secondary-nav">
	  <!-- <NavFreebies /> -->
	</template>
	<template slot="repo_link">
	  <a href="https://github.com/smokeyfro/smokeyfro/blob/master/src/pages/work/Rates.vue">Source</a>
	</template>
  </Layout>
</template>

<script>
// import NavFreebies from "@/components/NavFreebies";
import Browser from '@/components/Browser'

export default {
	components: {
		// NavFreebies,
		Browser
	},
	metaInfo() {
		return {
		title: `${this.$page.post.title}`,
		bodyAttrs: {
			class: "freebies design single"
		}
		};
	},
	computed: {
		config() {
			return config;
		}
	}
};
</script>

<page-query>
query Design ($path: String) {
  post: design(path: $path) {
	title
	slug
	excerpt
	type
	path
	date
	download
	image ( width: 625)
  }
}
</page-query>
<style>
.main {
	position: relative;
}
.demo-wrap {
	position: fixed;
	top: 0;
	bottom: 0;
	z-index: 9999;
	left: 83px;
	right: 0;
	/*width: calc(100%-81px);*/
	background: #fff;
}
.device-toggle {
	background: #f7f7f7;
	position: relative;
}
.device-toggle button {
	background: #f7f7f7;
	border: 0;
	line-height: 2rem;
	padding: 0 0 0 .6rem;
}
.device-toggle button.active {
	font-weight: bold;
}
.demo-wrap iframe {
	border: 0;
	width: 100%;
	height: 100%;
}
.close-button {
	margin-left: auto;
	margin-right: 10px;
	float: right;
}
@media (min-width: 480px) {

}

/* main {
  height: calc(100vh - 200px);
} */
.downloads a {
  display: block;
}
.demo-link svg,
.downloads svg {
	width: 12px;
}
</style>