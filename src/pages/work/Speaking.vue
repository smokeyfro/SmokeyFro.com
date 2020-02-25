<template>
	<Layout :sidebar="true" :top="false" :bottom="false">
		<h1>Speaking</h1>
		<p class="lead">I am passionate about sharing my craft and have had the privilage of speaking at a number of technology related conferences and meetups.</p>
		<div class="p-6 mt-10 bg-white border rounded-md md:p-10">
			<h2>Topics I'm current excited about</h2>
			<p>These are the topics that are currently getting me excited. I'll update these over time as my interests develop.</p>
			<div class="grid gap-4 md:gap-10 grid-cols1 md:grid-cols-2">
				<article>
					<h3>The JAM Stack</h3>
					<p class="m-0">The JAMstack refers to building static sites (ie, no database or php) using modern tooling and programming practices. It's come along way in recent years and we have more tools available than ever.</p>
				</article>
				<article>
					<h3>The Beans Framework</h3>
					<p class="m-0">This talk introduces the audience to the Beans framework, what problems it attempts to solve, a breakdown of the various api's that are included and lastly some examples of using Beans in a real-world project. </p>
				</article>
				<article>
					<h3>Bootstrap Business</h3>
					<p class="m-0">How do you launch your idea when you don't have access to funding? Myself and my business partners bootstrapped a number of online companies, each gaining their own success and failures along the way.</p>
				</article>
				<article>
					<h3>My Startup Journey</h3>
					<p class="m-0">A brief history of the three digital product companies I helped create, our sweet taste of success, our discent down the rabbit whole, a tale of not giving up and a bunch of solid lessons learnt along the way.</p>
				</article>
			</div>
		</div>
		<div class="mt-20 mb-1 lg:flex lg:items-center lg:justify-between">
			<h2 class="m-0 text-sm uppercase">Past Talks</h2>
			<p class="m-0 ml-2 text-base">Below are some of my past talks from when I was still working with Joomla!.</p>
		</div>
		
		<div class="grid gap-8 pt-6 mb-16 border-t-2 border-black md:gap-10 grid-cols1 md:pt-10">
			<article>
				<h3>Content construction with Zoo</h3>
				<p class="mb-2">For those new to content construction and the Zoo component for Joomla. The talk covered an overview of how content construction works, an overview of Zoo's features and a couple tricks I learnt along the way.</p>
				<table class="w-full mt-5 text-left bg-white">
					<thead>
						<tr>
							<th>Event</th>
							<th>Date</th>
							<th>Location</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>JoomlaDay South Africa</td>
							<td>August, 2011</td>
							<td>Cape Town, South Africa</td>
							<td><a class="text-sm" href="https://vimeo.com/30687357">Video</a> &middot; <a class="text-sm" href="https://www.slideshare.net/sajoomladay/chris-rault-content-construction-with-zoo?qid=58a5318b-57d7-4846-b869-ae697265862a&v=&b=&from_search=2">Slides</a></td>
						</tr>
						<tr>
							<td>JoomlaDay Malaysia</td>
							<td>June, 2011</td>
							<td>Kuala Lumpur, Malaysia</td>
							<td><a class="text-sm" href="https://www.slideshare.net/connectr/content-construction-with-zoo">Slides</a></td>
						</tr>
					</tbody>
				</table>
			</article>
			<article>
				<h3>Introduction to Morph</h3>
				<p class="mb-2">An introduction to Morph, the Joomla template framework we created back in 2009. The talk included a demo of the setup process and admin user interface and finally some practical examples of theming using child-themes.</p>
				<table class="w-full mt-5 text-left bg-white">
					<thead>
						<tr>
							<th>Event</th>
							<th>Date</th>
							<th>Location</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>JoomlaDay South Africa</td>
							<td>August, 2011</td>
							<td>Cape Town, South Africa</td>
							<td><a class="text-sm" href="https://vimeo.com/31361114">Video</a></td>
						</tr>
						<tr>
							<td>JoomlaDay Malaysia</td>
							<td>June, 2011</td>
							<td>Kuala Lumpur, Malaysia</td>
							<td><a class="text-sm" href="https://www.youtube.com/watch?v=byLujAw1Cas">Video</a></td>
						</tr>
					</tbody>
				</table>
			</article>
			<article>
				<h3>Rapid template development with Joomla YUI &amp; jQuery</h3>
				<p class="mb-2">A two part presentation that covered my tips and trips for Joomla development, using Yahoo's YUI and jQuery.</p>
				<table class="w-full mt-5 text-left bg-white">
					<thead>
						<tr>
							<th>Event</th>
							<th>Date</th>
							<th>Location</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>CMS Expo</td>
							<td>December, 2008</td>
							<td>Denver, CO, USA</td>
							<td><a class="text-sm" href="https://www.slideshare.net/prothemer/rapid-template-development-part-1-presentation">Part 1</a> &middot; <a class="text-sm" href="https://www.slideshare.net/prothemer/rapid-template-development-part-2-presentation">Part 2</a></td>
						</tr>
					</tbody>
				</table>
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