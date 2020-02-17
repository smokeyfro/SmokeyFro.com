<template>
	<Layout :sidebar="true" :image="false">
		<h1>Subscribe to my Journal</h1>
		<p>Want to keep up with my Journal entries, but not intrested in all my work related stuff? Signup here!</p>
		<Newsletter title="" summary="" />
		<template slot="navgroup">
			Journal
		</template>
		<template slot="secondary-nav">
			<NavJournal />
		</template>
		<template slot="repo_link">
			<a href="https://github.com/smokeyfro/smokeyfro/blob/master/src/pages/journal/Subscribe.vue">Source</a>
		</template>
	</Layout>
</template>

<script>
import NavJournal from "@/components/NavJournal";
import Newsletter from "@/components/Newsletter";

export default {
	components: {
		NavJournal,
		Newsletter
	},
	metaInfo: {
		title: "Random thoughts by SmokeyFro",
		bodyAttrs: {
			class: "journal subscribe"
		}
	}
};
</script>
<style>
/* .newsletter form div:nth-of-type(2n) {
		margin: 1rem 0 1.5rem;
}
.newsletter form {
		display: flex;
		width: 100%;
		flex-direction: row;
		padding: 2rem;
}
.newsletter {
		margin-top: 2rem;
}
.newsletter form {
		align-items: flex-end;
}
.newsletter form label {
		font-size: .9rem;
		margin-bottom: .5rem;
		font-weight: 500;
}
.newsletter form input {
		width: 100%;
		display: block;
		padding: 15px;
		margin: 0;
		border-radius: 5px;
		border: 1px solid #ddd;
}
.newsletter form > div {
		flex: 1;
}
.newsletter form button {
	margin: 0;
	padding: 1rem 0;
} */
</style>