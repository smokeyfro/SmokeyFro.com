<template>
	<Layout :sidebar="true" :top="false" :bottom="false">
		<div>
			<div>
				<h1 class="title">Preferences</h1>
				<p class="lead">Customize your browsing experience</p>
				<ul>
					<li>
						<h3>Color Scheme</h3>
						<div>
							<!-- <div>
								<input type="radio" name="mode" value="light">
								<label for="light">Light</label>
							</div>
							<div>
								<input type="radio" name="mode" value="dark">
								<label for="dark">Dark</label>
							</div>
							<div>
								<input type="radio" name="mode" value="auto" checked>
								<label for="auto">Auto</label>
							</div> -->
							<ToggleTheme />
						</div>
					</li>
					<li>
						<h3>Content Sources</h3>
						<div>
											
							<div>
								<label><input v-on:click="showSource = true" v-bind:class="{ 'active' : showSource == 'true' }" type="radio" name="sources" value="true"> Show</label>
							</div>
							<div>
								<label><input v-on:click="showSource = false" v-bind:class="{ 'active' : showSource == 'false' }" type="radio" name="sources" value="false" checked> Hide</label>
							</div>
						</div>
					</li>
					<li>
						<h3>Repo Link</h3>
						<div>
							<div>
								<label><input v-on:click="showRepo = true" v-bind:class="{ 'active' : showRepo == 'true' }" type="radio" name="repo" value="true"> Show</label>
							</div>
							<div>
								<label><input v-on:click="showRepo = false" v-bind:class="{ 'active' : showRepo == 'false' }" type="radio" name="repo" value="false" checked> Hide</label>
							</div>
						</div>
					</li>
					
					<!-- <li>
						<h3>Disable JavaScript</h3>
						<div>
							<div>
								<input type="radio" name="disable_js" value="1">
								<label for="dark">Yes</label>
							</div>
							<div>
								<input type="radio" name="disable_js" value="0" checked>
								<label for="auto">No</label>
							</div>
						</div>
					</li>
					<li>
						<h3>Disable CSS</h3>
						<div>
							<div>
								<input type="radio" name="disable_css" value="1">
								<label for="dark">Yes</label>
							</div>
							<div>
								<input type="radio" name="disable_css" value="0" checked>
								<label for="auto">No</label>
							</div>
						</div>
					</li> -->
				</ul>

				<a @click.prevent="$router.go(-1)" href="#" class="button">&larr; Back</a>

			</div>
		</div>
		<template slot="navgroup">
		Prefs
		</template>
	</Layout>
</template>

<script>
import ToggleTheme from '~/components/ToggleTheme.vue'

export default {
	name: 'prefs',
	components: {
		ToggleTheme
	},
	  stored: {
	showSource: {
	  type: Boolean,
	  key: "showSource",
	  default: false
	},
	showRepo: {
	  type: Boolean,
	  key: "showRepo",
	  default: false
	}
  },
	metaInfo: {
		title: "Customise your experience on SmokeyFro",
		bodyAttrs: {
			class: "prefs-page"
		}
	}
//   watch: {
//     showPrefs: function() {
//       if(this.showPrefs){
//         document.documentElement.style.overflow = 'hidden'
//         return
//       }

//       document.documentElement.style.overflow = 'auto'
//     }
//   }
};
</script>

<style scoped>
.button {
	background: #000;
	padding: 1rem 3rem;
	display: inline-block;
	border: 0;
	color: #fff;
	width: auto;
	margin-top: 2rem;
	border-radius: 2px;
}
.prefs-page ul, .prefs-page li {
	list-style: none;
	margin: 0;
	padding: 0;
}
.prefs-page li:first-of-type h3 {
	margin-bottom: 1.1rem;
}
/* .prefs-page li:first-of-type label {
	cursor: pointer;
	display: block;
	margin-top: -10px;
}
.prefs-page li:first-of-type svg {
	position: relative;
	left: -5px;
	bottom: -5px;
	width: 20px;
} */
.prefs-page .layout {
	grid-template-columns: 70px 1fr;
}
.prefs-page .layout main {
  grid-column: 2;
  column-span: 2;
}
.prefs-wrap {
	grid-column: 2;
}
/* .prefs-wrap input:focus{
	border-radius: 50%;
}
[type="radio"]:checked,
[type="radio"]:not(:checked) {
	position: absolute;
	left: -9999px;
}
[type="radio"]:checked + label,
[type="radio"]:not(:checked) + label {
	position: relative;
	padding-left: 28px;
	cursor: pointer;
	line-height: 20px;
	display: inline-block;
}
[type="radio"]:checked + label:before,
[type="radio"]:not(:checked) + label:before {
	content: '';
	position: absolute;
	left: 0;
	top: 0;
	width: 18px;
	height: 18px;
	border: 1px solid #ddd;
	border-radius: 100%;
	background: #fff;
}
[type="radio"]:checked + label:after,
[type="radio"]:not(:checked) + label:after {
	content: '';
	width: 10px;
	height: 10px;
	background: #ffd166;
	position: absolute;
	top: 4px;
	left: 4px;
	border-radius: 100%;
	-webkit-transition: all 0.2s ease;
	transition: all 0.2s ease;
}
[type="radio"]:not(:checked) + label:after {
	opacity: 0;
	-webkit-transform: scale(0);
	transform: scale(0);
}
[type="radio"]:checked + label:after {
	opacity: 1;
	-webkit-transform: scale(1);
	transform: scale(1);
} */
</style>