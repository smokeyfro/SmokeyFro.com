<template>
	<Journal :sidebar="true" :top="true" :bottom="false">
		<template slot="title">Subscribe</template>
		<template slot="excerpt">Want to keep up with my Journal entries, but not intrested in all my work stuff? Signup here!</template>
		<template slot="content">
			<form action="https://send.smokeyfro.com/subscribe" method="POST" accept-charset="utf-8">
				<label class="block">
					<span class="text-gray-700">Name</span>
					<input type="text" name="name" id="name" class="block w-full mt-1 form-input">
				</label>
				<label class="block mt-5">
					<span class="text-gray-700">Email</span>
					<input type="email" name="email" id="email" class="block w-full mt-1 form-input">
				</label>
				<div style="display:none;">
					<label for="hp">HP</label><br/>
					<input type="text" name="hp" id="hp"/>
				</div>
				<input type="hidden" name="list" value="ThUb8pZr32KZkIHilEJ0ZQ" />
				<input type="hidden" name="subform" value="yes" />
				<input type="submit" name="submit" id="submit" class="block w-full px-10 py-6 mt-4 mb-5 text-xl font-bold bg-gray-800 rounded-md text-accent md:mt-8" />
			</form>
		</template>
	</Journal>
</template>

<script>
import Newsletter from "@/components/Newsletter";
import Journal from '@/layouts/Journal'

export default {
	components: {
		Newsletter,
		Journal
	},
	metaInfo: {
		title: "Random thoughts by SmokeyFro",
		bodyAttrs: {
			class: "journal subscribe"
		}
	}
};
</script>