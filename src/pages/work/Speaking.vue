<template>
	<Layout :sidebar="true" :top="false" :bottom="false">
		<h1>Speaking</h1>
		<p class="lead">I am passionate about sharing my craft and have had the privilage of speaking at a number of technology related conferences and meetups.</p>
		<h2>Topics I'm current excited about</h2>
		<p>These are the topics that are currently getting me excited. I'll update these over time as my interests develop.</p>
		<div class="grid gap-8 md:gap-4 grid-cols1">
			<article>
				<h3>The JAM Stack</h3>
				<p class="m-0">The JAMstack refers to building static sites (ie, no database or php) using modern tooling and programming practices. It's come along way in recent years and we have more tools available than ever.</p>
			</article>
			<article>
				<h3>The Beans Framework</h3>
				<p class="m-0">This talk introduces the audience to the Beans framework, what problems it attempts to solve, a breakdown of the various api's that are included and lastly some examples of using Beans in a real-world project. </p>
			</article>
			<article>
				<h3>My Startup Journey</h3>
				<p class="m-0">A brief history of the three digital product companies I helped create, our sweet taste of success, our discent down the rabbit whole, a tale of not giving up and a bunch of solid lessons learnt along the way.</p>
			</article>
		</div>
		<h2 class="mt-10">Past Talks</h2>
		<p>Below are some of my past talks from when I was still working with Joomla!.</p>
		<div class="grid gap-8 md:gap-4 grid-cols1">
			<article>
				<h3>Content Construction with Zoo</h3>
				<p class="mb-2">For those new to content construction and the Zoo component for Joomla. The talk covered an overview of how content construction works, an overview of Zoo's features and a couple tricks I learnt along the way.</p>
				<p class="mb-0 links">
					<a class="text-sm" href="https://vimeo.com/30687357">Video</a> &middot;
					<a class="text-sm" href="https://www.slideshare.net/sajoomladay/chris-rault-content-construction-with-zoo?qid=58a5318b-57d7-4846-b869-ae697265862a&v=&b=&from_search=2">Slides</a>
				</p>
			</article>
			<article>
				<h3>Introduction to Morph</h3>
				<p class="mb-2">An introduction to Morph, the Joomla template framework we created back in 2009. The talk included a demo of the setup process and admin user interface and finally some practical examples of theming using child-themes.</p>
				<p class="mb-0 links">
					<a class="text-sm" href="https://vimeo.com/31361114">Video</a>
				</p>
			</article>

			<article>
				<h3>Rapid Template Dev with Morph</h3>
				<p class="mb-2">A practical look at theming using the Morph framework. This was set over two 90 minute sessions, split over two days and covered setting a custom child theme and manipulating the front-end to implement an example design from scratch. The talk was split over two sessions.</p>
				<p class="mb-0 links">
					<a class="text-sm" href="https://www.slideshare.net/prothemer/rapid-template-development-part-1-presentation?qid=58a5318b-57d7-4846-b869-ae697265862a&v=&b=&from_search=3">Slides</a>
				</p>
			</article>
		</div>
		<template slot="secondary-nav">
			<NavWork />
		</template>
	</Layout>
</template>

<script>
import NavWork from "~/components/NavWork.vue";
export default {
	components: {
		NavWork
	},
	metaInfo: {
		title: "",
		bodyAttrs: {
			class: "speaking"
		}
	}
};
</script>