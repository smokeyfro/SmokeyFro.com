<template>
    <div class="form">
        <div class="success" v-if="status === 'success'">
            <div class="flex items-center justify-start w-full">
				<div class="w-full p-10 mt-10 bg-gray-100 border-l-8 bg-accent border-accent">
					<h2>Message sent!</h2>
					<p class="m-0">Expect a response within the next 24 hours (though usually less).</p>
				</div>
			</div>
        </div>
        <div class="error" v-if="status === 'error'">
            Oops, something went wrong. Please try again.
        </div>
        <form v-if="!status" @submit="sendForm">
            <div class="my-4">
                <div class="mt-2">
                    <label class="inline-flex items-center">
                        <input v-model="radioValue" type="radio" class="text-black outline-red form-radio" name="message_type" id="is-message" value="message">
                        <span class="ml-2">Say Hello</span>
                    </label>
                    <label class="inline-flex items-center ml-6">
                        <input v-model="radioValue" type="radio" class="text-black outline-red form-radio" name="message_type" id="is-quote" value="quote">
                        <span class="ml-2">Get a Quote</span>
                    </label>
                </div>
            </div>
            <label class="block">
                <span class="text-gray-700" v-if="radioValue === 'quote'" for="message">What do you need help with?</span>
                <span class="text-gray-700" v-if="radioValue === 'message'" for="message">Message</span>
                <textarea v-if="radioValue === 'quote'" name="message" id="message" rows="10" v-model="message" required focus class="block w-full mt-1 form-textarea" placeholder="Hi Chris, I need help with..."></textarea>
                <textarea v-if="radioValue === 'message'" name="message" id="message" rows="5" v-model="message" required focus class="block w-full mt-1 form-textarea" placeholder="Hey Chris! Love the fro dude! xoxo Dany"></textarea>
            </label>
            <div>
                <div class="flex flex-col md:flex-row">
                    <div class="md:w-1/2 md:mr-5">
                        <label class="block mt-4">
                            <span class="text-gray-700">Your name</span>
                            <input name="name" id="name" v-model="name" class="block w-full mt-1 form-input" placeholder="Dany Targaryen" required>
                        </label>
                    </div>
                    <div class="md:w-1/2">            
                        <label class="block mt-4">
                            <span class="text-gray-700">Your email</span>
                            <input name="email" id="email" v-model="email" class="block w-full mt-1 form-input" placeholder="dani@allthekingdoms.org" required>
                        </label>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row">
                    <div class="md:w-1/2 md:mr-5">
                        <label class="block mt-4" v-if="radioValue === 'quote'">
                            <span class="text-gray-700">Estimated budget (in USD)</span>
                            <input name="budget" id="budget" v-model="budget" class="block w-full mt-1 form-input" placeholder="$5000">
                        </label>
                    </div>
                    <div class="md:w-1/2">
                        <label class="block mt-4" v-if="radioValue === 'quote'">
                            <span class="text-gray-700">Current site (if any)</span>
                            <input name="website" id="website" v-model="website" class="block w-full mt-1 form-input" placeholder="https://your-site.com">
                        </label>
                    </div>
                </div>
                <input type="hidden" name="_gotcha">
                <button type="submit" class="block w-full px-10 py-6 mt-4 mb-5 text-xl font-bold bg-gray-800 rounded-md text-accent md:mt-8">
                    <span v-if="radioValue === 'quote'">Let's do this!</span>
                    <span v-if="radioValue === 'message'">Send it, Sparky!</span>
                </button>
            </div>
        </form>
    </div>
</template>

<script>
    import ContactMethod from "@/components/ContactMethod.vue";
    export default {
        name: 'Form',
        components: {
            ContactMethod
        },
        data: function() {
            return {
                status: null,
                name: null,
                email: null,
                budget: '',
                website: '',
                message: null,
                radioValue: "message",
                message_type: null,
                message_type: this.radioValue
            }
        },
        methods: {
            setFocus: function() {
                this.$refs.message.focus();
            },
            sendForm: function(event) {
                event.preventDefault()

                fetch('https://formcarry.com/s/iqNMdsHQ9Zt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({ 
                    name: this.name, 
                    email: this.email, 
                    message: this.message,
                    budget: this.budget, 
                    website: this.website
                 })
                })
                .then(response => response.json())
                .then(response => {
                    if (response.code === 200) {
                        this.status = 'success'
                    } else {
                        // Formcarry error
                        this.status = 'error'
                    }
                })
                // network error
                .catch(() => (this.status = 'error'))
            }
        }
    }
</script>