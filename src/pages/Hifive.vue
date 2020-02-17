<template>
	<Layout :sidebar="true" :top="true" :bottom="false">
		<template slot="top-shelf">
			<div class="flex items-center justify-center w-full h-screen">
				<div class="max-w-lg p-10 bg-gray-100 border-l-8 border-accent">
					<h1>Message sent!</h1>
					<p class="m-0">Expect a response within the next 24 hours (though usually less).</p>
				</div>
			</div>
		</template>
		<template slot="secondary-nav">
			<NavContact />
		</template>
		<template slot="navgroup">
			Hello
		</template>
	</Layout>
</template>

<script>
import NavContact from "@/components/NavContact.vue"
export default {
	components: {
		NavContact
	},
	metaInfo: {
		title: "Message sent",
		bodyAttrs: {
			class: "success overflow-hidden"
		}
	},
	created(){
      setTimeout( () => this.$router.push({ path: '/contact'}), 5000);
    }
}
</script>

<style>
.success {
	background: var(--aside-color);
}
.success main {
	overflow: hidden;
}
.success .layout {
	grid-template-columns: 70px 1fr;
}
.success .layout main {
  grid-column: 2;
  column-span: 2;
}
.success .main {
	display: flex;
	flex-direction: column;
}
.success .main article {
	order: 2;
}
.success .main > div {
	margin:  3rem 0 0;
	order: 1;
}
.success .main > div figure {
	margin: 0;
}

.success h1 svg {
	width: 32px;
	margin-right: 5px;
}
.success h1 strong {
	font-size: 2.7rem;
	line-height: 1.8rem;
	display: block;
}
@media (min-width: 768px) {

	.success .main {
		flex-direction: row;
	}
	.success .main article {
		width: 70%;
		order: 1;
	}
	.success .main > div {
		width: 30%;
		padding-top: 3rem;
		order: 2;
	}
	.success .main > div figure {
		margin:  0;
	}
}
</style>