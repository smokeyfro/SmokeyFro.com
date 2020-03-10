<template>
	<DevToolsWrap>
        <div class="relative z-30 flex items-center justify-center w-full h-screen">
			<div class="max-w-2xl p-10 bg-white rounded-md shadow-xl ">
				<div class="flex items-center justify-start">
					<figure>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M392.821 222.398H170.173l-20.589-56.569c-16.224-44.574 6.84-94.037 51.415-110.26 44.574-16.223 94.037 6.841 110.26 51.415l11.847 32.549c3.124 8.582 12.65 13.021 21.23 9.9l16.068-5.848a16.459 16.459 0 009.346-8.565 16.457 16.457 0 00.554-12.666l-10.578-29.065C335.59 22.358 261.079-15.861 190.053 6.268c-36.01 11.219-65.032 35.955-81.721 69.65-16.698 33.715-18.809 71.747-5.946 107.089l14.382 39.514c-12.688 1.249-22.634 11.978-22.634 24.99v102.59c0 89.271 72.627 161.9 161.899 161.9s161.9-72.627 161.9-161.9v-102.59c.001-13.848-11.265-25.113-25.112-25.113zM122.697 83.033c14.725-29.731 40.339-51.558 72.125-61.46 62.686-19.532 128.465 14.273 149.753 76.955.018.055.037.11.058.164l10.607 29.145a.504.504 0 01-.018.408.503.503 0 01-.301.276l-16.068 5.848a.537.537 0 01-.685-.318l-11.846-32.549c-9.324-25.616-28.065-46.068-52.771-57.589-24.707-11.52-52.42-12.731-78.035-3.407-25.616 9.324-46.068 28.065-57.589 52.771s-12.731 52.419-3.407 78.034l18.593 51.086H133.78l-16.332-44.872c-11.349-31.186-9.485-64.744 5.249-94.492zm279.207 267.068c0 80.432-65.437 145.87-145.87 145.87s-145.87-65.436-145.87-145.87v-102.59c0-5.009 4.075-9.083 9.083-9.083H392.82c5.009 0 9.083 4.075 9.083 9.083v102.59z"/><path d="M256.034 307.889c-18.561 0-33.662 15.101-33.662 33.662 0 15.8 10.944 29.084 25.647 32.691v27.153a8.016 8.016 0 0016.03 0v-27.153c14.703-3.606 25.647-16.891 25.647-32.691 0-18.561-15.101-33.662-33.662-33.662zm0 51.295c-9.723 0-17.633-7.91-17.633-17.633 0-9.722 7.91-17.633 17.633-17.633s17.633 7.91 17.633 17.633c0 9.723-7.91 17.633-17.633 17.633zM208.208 451.005c-31.038-14.774-53.941-43.548-61.266-76.972a8.015 8.015 0 10-15.658 3.432c8.378 38.224 34.559 71.127 70.035 88.014a7.989 7.989 0 003.439.78 8.015 8.015 0 003.45-15.254zM375.722 324.987a8.016 8.016 0 00-8.015 8.015V350.1c0 20.279-5.515 40.147-15.948 57.46a8.016 8.016 0 0013.729 8.274c11.938-19.809 18.248-42.539 18.248-65.733v-17.098a8.014 8.014 0 00-8.014-8.016zM375.722 273.689a8.016 8.016 0 00-8.015 8.015v17.105a8.016 8.016 0 0016.03 0v-17.105a8.015 8.015 0 00-8.015-8.015z"/></svg>
					</figure>
					<div>
						<h1 class="m-0 mb-4 text-4xl font-bold">This shnit aint done yet, yo!</h1>
						<p class="mb-5">I know you were probably expecting to find something dope here, but truth is I haven't gotten around to implementing it yet. I probably should have disabled the access code until it's done, but where would the fun be in that?</p>
						<!-- <DevTools /> -->
						<iframe class="overflow-hidden rounded-lg shadow-lg" width="590" height="345" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen autoplay></iframe>
					</div>
				</div>
            </div>
        </div>
		<template slot="repo_link">
			<a href="https://github.com/smokeyfro/smokeyfro/blob/master/src/pages/404.vue" class="border-b border-transparent hover:border-gray-400 transition-border-color">Source</a>
		</template>
	</DevToolsWrap>
</template>

<script>
// import DevTools from "~/components/DevTools.vue";
import DevToolsWrap from "~/layouts/DevToolsWrap.vue";

export default {
    components: {
        // DevTools,
        DevToolsWrap
    },
	metaInfo: {
		title: `DevTools`,
		htmlAttrs: {
			class: ""
		},
		bodyAttrs: {
			class: "devtools bg"
		},
	},
    created(){
        if(process.isClient) {
			const confetti = require('vue-confetti').default
			this.$confetti.stop();
		}
	}
}
</script>