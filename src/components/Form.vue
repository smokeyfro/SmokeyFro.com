<template>
<!--<form action="https://send.pageclip.co/m05qhlX2YJB9fXWwhr1EuTsdrFh6dNMH/Contact" class="pageclip-form contact-form border-none mt-0 pt-0 px-6 lg:px-0 lg:max-w-4xl mx-auto" method="post">-->

<form @submit.prevent="submit" method="post" accept-charset="utf-8" class="contact-form border-none mt-0 pt-0 px-6 lg:px-0 lg:max-w-4xl mx-auto">
    <div class="relative mt-0">
        <div class="flex flex-col md:flex-row">
            <div class="md:w-1/2 md:mr-5">
                <label class="block mt-4">
                    <span class="text-gray-700 block mb-2">Your name</span>
                    <input name="name" id="name" v-model="input.name" class="w-full p-4 rounded-md" placeholder="Eg: Dany Targaryen">
                </label>
            </div>
            <div class="md:w-1/2">
                <label class="block mt-4">
                    <span class="text-gray-700 block mb-2">Email address</span>
                    <input name="email" id="email" v-model="input.email" class="w-full p-4 rounded-md" placeholder="Eg: dany@allthekingdoms.gov">
                </label>
            </div>
        </div>

      <div class="my-4">
        <div class="mt-2">
            <label class="inline-flex items-center">
                <input v-model="input.radioValue" type="radio" class="text-black outline-red form-radio" name="message_type" id="is-message" value="message">
                <span class="ml-2">Say Hello</span>
            </label>
            <label class="inline-flex items-center ml-6">
                <input v-model="input.radioValue" type="radio" class="text-black outline-red form-radio" name="message_type" id="is-quote" value="quote">
                <span class="ml-2">Get a Quote</span>
            </label>
        </div>
    </div>



      <div class="flex flex-col md:flex-row">
        <div class="md:w-1/2 md:mr-5">
            <label class="block mt-4" v-if="input.radioValue === 'quote'">
                <span class="text-gray-700 block mb-2">Estimated budget (in USD)</span>
                <input name="budget" id="budget" v-model="input.budget" class="w-full p-4 rounded-md" placeholder="$3000 - $5000">
            </label>
        </div>
        <div class="md:w-1/2">
            <label class="block mt-4" v-if="input.radioValue === 'quote'">
                <span class="text-gray-700 block mb-2">Current site (if any)</span>
                <input name="website" id="website" v-model="input.website" class="w-full p-4 rounded-md" placeholder="http://allthekingdoms.gov">
            </label>
        </div>
    </div>

      <label class="block mt-6">
        <span class="text-gray-700" v-if="input.radioValue === 'quote'" for="message">What do you need help with?</span>
        <span class="text-gray-700" v-if="input.radioValue === 'message'" for="message">Message</span>
        <div v-if="input.radioValue === 'quote'">
            <ClientOnly>
            <vue-expand
            v-model="input.message" 
            :handler="input.handler" 
            placeholder="Hi Chris, I need help with..." 
            min-row="5"
            v-focus />
            </ClientOnly>
        </div>
        <div v-if="input.radioValue === 'message'">
            <ClientOnly>
            <vue-expand
            v-model="input.message" 
            :handler="input.handler" 
            placeholder="Hey Chris! Love the fro dude! xoxo Dany"
            min-row="3"
            v-focus />
            </ClientOnly>
        </div>
    </label>

      <div v-if="loading" class="bg-white bg-opacity-90 h-full z-50 absolute inset-0 flex items-center justify-center">
        <div class="text-center">
          <h3 class="text-white text-3xl uppercase">Sending Message</h3>
          <img src="/loading.gif" class="inline-block mx-auto" />
        </div>
      </div>
    </div>
    
    <div class="text-center">
        <button type="submit" class="pageclip-form__submit button block w-full h-24" aria-label="Send your message">
          <span v-if="loading == false">
            <span v-if="input.radioValue === 'quote'">Let's do this!</span>
            <span v-if="input.radioValue === 'message'">Send it, Sparky!</span>
          </span>
          <span v-else class="w-full h-full flex items-center justify-center">
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </span>
        </button>
      </div>
  </form>
</template>



<script>
import Vue from 'vue';

export default {
  name: "ContactForm",
  components: {
        VueExpand: () => import("vue-expand") 
    },
  data() {
    return {
      input: {
        handler: new Vue(),
        status: null,
        name: null,
        email: null,
        budget: '',
        website: '',
        message: null,
        radioValue: "message",
        message_type: null,
        message_type: this.radioValue
      },
      loading: false
    };
  },
  metaInfo: {
    script: [
      { src: 'https://s.pageclip.co/v1/pageclip.j' }
    ],
  },
  methods: {
    async submit() {
      this.loading = true
      const data = this.input
      window.Pageclip.send('m05qhlX2YJB9fXWwhr1EuTsdrFh6dNMH', 'Contact', data, function (error, response) {
        if (error) {
          return 'There was an problem sending your message. Please email chris@smokeyfro.com directly.'
        }
        location.replace('/thanks')
      })
    },
  }
}
</script>

<style>
.contact-form {
  @apply relative bg-gray-100 p-10 rounded-md mt-10;
  &:after {
    content: '';
    @apply hidden absolute inset-0 w-full h-full bg-white opacity-60 z-30;
  }
  & .container {
    @apply relative z-30;
  }
  & input,
  & textarea {
    @apply bg-white placeholder-gray-700 border-b border-gray-200 rounded-md text-xl;
  }
  & .button {
      @apply bg-gray-900 text-white mt-6 rounded-md;
  }
}.pageclip-form__success__message {
    background: #66ad66;
    padding: 20px;
    border-radius: 4px;
    margin-top: 20px;
    color: #fff;
}
</style>
