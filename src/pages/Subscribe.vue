<template>
	<Layout :sidebar="false" :top="true" :bottom="false">
		<template slot="top-shelf">
            <div class="w-full h-screen md:flex md:items-center md:justify-center">
                <div class="mx-6 md:border md:border-gray-300 md:rounded-md md:shadow-lg md:px-12 md:py-8 md:bg-white md:w-1/2 subscribe-wrap">
                    <h1 class="mt-0">Subscribe</h1>
                    <p class="text-xl">Signup below to get notified when I post new themes, tutorials and journal updates. Pick and choose what you get notified about. Once a month digest on your selected topics.</p>
                    <form class="subscribe-form" action="https://subscribe.smokeyfro.com" method="POST" accept-charset="utf-8">
                        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <label class="block">
                                <span class="text-gray-700">Name</span>
                                <input type="text" name="name" id="name" class="block w-full mt-1 form-input" required aria-required="Please fill in your name">
                            </label>
                            <label class="block">
                                <span class="text-gray-700">Email</span>
                                <input type="email" name="email" id="email" class="block w-full mt-1 form-input" required aria-required="Please fill in your email address">
                            </label>
                        </div>
                        <div style="display:none;">
                            <label for="hp">HP</label><br/>
                            <input type="text" name="hp" id="hp"/>
                        </div>
                        <ul class="p-0 m-0 mt-5 list-none reset">
                            <li class="inline-block p-0 m-0 mr-4">
                                <label>
                                    <input type='checkbox' @click='checkAll()' v-model='isCheckAll' value=""> <span>Everything</span>
                                </label>
                            </li>
                            <li class="inline-block p-0 m-0 mr-4" v-for='(list, $index) in listsdata' :key="$index">
                                <label>
                                    <input name="list[]" type='checkbox' v-bind:value='list.value' v-model='lists' @change='updateCheckall()'> 
                                    <span>{{ list.name }}</span>
                                </label>
                            </li>
                        </ul>
                        <input type="hidden" name="subform" value="yes" />
                        <input type="submit" name="submit" id="submit" class="block w-full px-10 py-6 mt-4 mb-5 text-xl font-bold bg-gray-800 rounded-md text-accent md:mt-8" />
                    </form>
                    <p class="mt-10 mb-10 text-base italic sm:mb-0">Alternatively, subscribe via your feed reader of choice -> <span class="block mb-2 sm:mb-0 sm:hidden"></span><a href="/feed.atom" target="_blank" title="Grab the Atom feed">Atom</a> &middot; <a href="/feed.json" target="_blank" title="Grab the JSON feed">JSON</a> &middot; <a href="/feed.xml" target="_blank" title="Grab the XML feed">XML</a></p>
                </div>
            </div>
        </template>
	</Layout>
</template>

<script>
import Newsletter from "@/components/Newsletter";

export default {
    components: {
        Newsletter
	},
	metaInfo: {
		title: "Random thoughts by SmokeyFro",
		bodyAttrs: {
			class: "subscribe two-col"
		}
	},
    data() {
        return {
            isCheckAll: false,
            listsdata: [
                { name: 'New tutorials', value: 'cbj3D8Vn8KzuBVw391Q3pw', checked: false },
                { name: 'Theme releases', value: 'p1nxnKya25ldkTpYc7Z3Kw', checked: false },
                { name: 'Journal entries', value: 'ThUb8pZr32KZkIHilEJ0ZQ', checked: false }
            ],
            lists: []
        }
    },
    methods: {
        checkAll: function(){
            this.isCheckAll = !this.isCheckAll;
            this.lists = [];
            if( this.isCheckAll ){
                for ( var key in this.listsdata ) {
                    this.lists.push( this.listsdata[key].value );
                }
            }
        },
        updateCheckall: function(){
            if(this.lists.length == this.listsdata.length){
                this.isCheckAll = true;
            }else{
                this.isCheckAll = false;
            }
        }
    },
    created(){
        if(process.isClient) {
			const confetti = require('vue-confetti').default
			this.$confetti.stop();
		}
	}
};
</script>
<!--<style>
.subscribe-form {
    input + span {
        margin-left: 5px;
    }
    input:checked + span {
        font-weight: bold;
    }
}
</style>-->