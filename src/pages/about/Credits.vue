<template>
	<Layout :sidebar="true" :top="false" :bottom="true">
		<h1>Site credits</h1>
		<p class="mt-6">This site is only possible thanks to hard work from a looong list of fine folks who have all contributed their skills, time and energy to provide the web development community with the awesome tools we have at our disposal.</p>
        <template slot="bottom-shelf">
		<div class="mt-6 mb-6 ml-20 space-x-20 lg:mt-10 lg:mb-20 flex flex-wrap items-start justify-start border-accent">
            <div v-for="({ title, links }, i) in credits.credits" :key="i">
                <h2 class="mb-5 text-sm uppercase">{{ title }}</h2>
                <ul class="reset">
                    <li v-for="({ title, desc, url }, i) in links" :key="i"><a :href="url" :aria-title="desc" target="_blank" rel="nofollow noopener">{{ title }}</a></li>
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
import credits from "@/data/credits.yaml";

export default {
	components: {
		NavAbout
	},
    data() {
        return {
            credits
        }
    },
	metaInfo: {
		title: "",
		bodyAttrs: {
			class: "about credits"
		}
	},
    mounted() {
        var outputCss = this.randomCss;
        setTimeout(console.log.bind(console, '\n%c\nFind the code for this page here:\nhttps://github.com/smokeyfro/smokeyfro/blob/master/src/pages/about/Credits.vue\n\n', outputCss));
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