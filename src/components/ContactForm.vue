<template>
<form method="post" action="https://forms.un-static.com/forms/d4fbb57513eeae3aba8993469f7b2e9b0cde03f5">
    <div class="my-4">
      <div class="mt-2">
        <label class="inline-flex items-center">
          <input v-model="radioValue" type="radio" class="text-black outline-red form-radio" name="message_type" value="message">
          <span class="ml-2">Say Hello</span>
        </label>
        <label class="inline-flex items-center ml-6">
          <input v-model="radioValue" type="radio" class="text-black outline-red form-radio" name="message_type" value="quote">
          <span class="ml-2">Get a Quote</span>
        </label>
      </div>
    </div>

    <label class="block">
      <span class="text-gray-700" v-if="radioValue === 'quote'" for="message">What do you need help with?</span>
      <span class="text-gray-700" v-if="radioValue === 'message'" for="message">Message</span>
      <textarea v-if="radioValue === 'quote'" @focus="$event.target.select()" name="quote" rows="10" focus class="block w-full mt-1 form-textarea" placeholder="Hi Chris,
I need help with...">
      </textarea>
      <textarea v-if="radioValue === 'message'" @focus="$event.target.select()" name="message" rows="5" focus class="block w-full mt-1 form-textarea" placeholder="Hey Chris!
Love the fro dude!
xoxo Dany">
      </textarea>
    </label>

      <div>
      
        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/2 md:mr-5">
            <label class="block mt-4">
              <span class="text-gray-700">Your name</span>
              <input name="name" class="block w-full mt-1 form-input" placeholder="Dany Targaryen">
            </label>
          </div>
          <div class="md:w-1/2">            
            <div class="relative w-full contact-methods">
              <label class="block mt-4" for="email">
                <span class="text-gray-700">How should I respond?</span>
              </label>
              <ContactMethod v-if="contactMethod == 'email'" name="email" type="email" placeholder="whosdabossallthekingdoms.org" />
              <ContactMethod v-if="contactMethod == 'skype'" name="skype" type="text" placeholder="@motherofdragons" />
              <ContactMethod v-if="contactMethod == 'whatsapp'" name="whatsapp" type="tel" placeholder="+0013433454" />
              <ContactMethod v-if="contactMethod == 'messenger'" name="messenger" type="text" placeholder="@dany.targaryen" />
          <div class="absolute top-0 right-0 contact-method-buttons">
            
            <nav>
              <button
                v-on:click.prevent="contactMethod = 'email'"
                v-bind:class="{ 'active' : contactMethod == 'email' }"
                title="Email"
                class
              >
                <svg
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  stroke-linejoin="round"
                  stroke-miterlimit="2"
                >
                  <path
                    d="M10.029 0c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10 5.522 0 10-4.478 10-10 0-5.523-4.478-10-10-10zm0 3.512l5.918 3.69H4.11l5.918-3.69zm5.991 9.583c0 .592-.48 1.071-1.072 1.071H5.11c-.592 0-1.072-.48-1.072-1.071V7.437c0-.062.007-.123.017-.183L9.71 10.78l.021.01a.613.613 0 00.146.06l.013.004a.599.599 0 00.28 0l.013-.003a.6.6 0 00.146-.06l.022-.011 5.654-3.526c.01.06.016.12.016.183v5.658z"
                    fill-rule="nonzero"
                  />
                </svg>
              </button>
              <button
                v-on:click.prevent="contactMethod = 'skype'"
                v-bind:class="{ 'active': contactMethod == 'skype'}"
                title="Skype"
                class
              >
                <svg
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  stroke-linejoin="round"
                  stroke-miterlimit="2"
                >
                  <g fill-rule="nonzero">
                    <path
                      d="M11.073 9.288l-1.375-.306c-.523-.119-1.125-.276-1.125-.77s.422-.839 1.184-.839c1.537 0 1.397 1.056 2.16 1.056.401 0 .753-.236.753-.642 0-.947-1.516-1.658-2.802-1.658-1.396 0-2.883.593-2.883 2.172 0 .76.272 1.57 1.768 1.944l1.858.464c.563.139.703.455.703.74 0 .475-.471.939-1.325.939-1.668 0-1.436-1.284-2.33-1.284-.402 0-.693.277-.693.671 0 .77.934 1.797 3.023 1.797 1.987 0 2.972-.958 2.972-2.24 0-.83-.382-1.709-1.888-2.044z"
                    />
                    <path
                      d="M9.962 0c-5.522 0-10 4.478-10 10s4.478 10 10 10 10-4.478 10-10-4.478-10-10-10zm5.206 15.192a3.478 3.478 0 01-4.173.568 5.832 5.832 0 01-3.318-.371c-.7-.296-1.33-.72-1.87-1.26A5.854 5.854 0 014.086 9.97c0-.34.03-.68.088-1.013a3.477 3.477 0 01.582-4.15A3.458 3.458 0 017.217 3.79c.57 0 1.132.142 1.632.408h.003a5.93 5.93 0 013.402.357c.7.296 1.33.72 1.869 1.26a5.855 5.855 0 011.722 4.157c0 .358-.034.716-.098 1.066a3.48 3.48 0 01-.579 4.155z"
                    />
                  </g>
                </svg>
              </button>
              <button
                v-on:click.prevent="contactMethod = 'whatsapp'"
                v-bind:class="{ 'active': contactMethod == 'whatsapp'}"
                title="Whatsapp"
                class
              >
                <svg
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  stroke-linejoin="round"
                  stroke-miterlimit="2"
                >
                  <g fill-rule="nonzero">
                    <path
                      d="M10.027 0c-5.522 0-10 4.478-10 10s4.478 10 10 10 10-4.478 10-10-4.478-10-10-10zm.212 15.822h-.003a5.983 5.983 0 01-2.86-.728l-3.173.832.85-3.1a5.97 5.97 0 01-.8-2.992 5.993 5.993 0 015.986-5.983c1.6.001 3.104.624 4.234 1.755a5.946 5.946 0 011.751 4.233 5.993 5.993 0 01-5.985 5.983z"
                    />
                    <path
                      d="M10.24 4.862a4.981 4.981 0 00-4.976 4.973c0 .94.263 1.854.76 2.646l.119.188-.503 1.836 1.883-.494.182.108c.764.453 1.64.692 2.532.693h.002a4.981 4.981 0 004.974-4.973 4.942 4.942 0 00-1.455-3.518 4.942 4.942 0 00-3.517-1.459zm2.927 7.11c-.125.35-.722.669-1.01.712a2.052 2.052 0 01-.941-.06 8.641 8.641 0 01-.853-.314c-1.5-.648-2.48-2.158-2.555-2.258-.074-.1-.61-.81-.61-1.546s.386-1.098.523-1.248a.55.55 0 01.399-.187c.1 0 .2.001.287.006.091.004.215-.035.336.256.125.3.424 1.035.461 1.11.037.075.062.162.013.262-.05.1-.216.315-.374.511-.067.083-.153.156-.066.306s.388.639.832 1.035c.571.51 1.053.667 1.203.742.15.075.236.063.324-.037.087-.1.374-.437.473-.586.1-.15.2-.125.337-.075s.872.411 1.022.486c.149.075.249.112.286.175.038.062.038.362-.087.71z"
                    />
                  </g>
                </svg>
              </button>
              <button
                v-on:click.prevent="contactMethod = 'messenger'"
                v-bind:class="{ 'active': contactMethod == 'messenger'}"
                title="Skype"
                class
              >
                <svg
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  stroke-linejoin="round"
                  stroke-miterlimit="2"
                >
                  <g fill-rule="nonzero">
                    <path
                      d="M9.431 8.211l-3.24 3.431 2.949-1.618 1.54 1.618 3.223-3.43L10.987 9.8 9.43 8.211z"
                    />
                    <path
                      d="M9.995 0c-5.522 0-10 4.478-10 10s4.478 10 10 10 10-4.478 10-10-4.478-10-10-10zm.078 15.353c-.619 0-1.216-.087-1.779-.25L6.278 16.25v-2.157c-1.35-1.027-2.213-2.593-2.213-4.346 0-3.096 2.69-5.606 6.008-5.606 3.319 0 6.009 2.51 6.009 5.606s-2.69 5.606-6.009 5.606z"
                    />
                  </g>
                </svg>
              </button>
            </nav>
          </div>
        </div>
          </div>
        </div>

        <label class="block mt-4" v-if="radioValue === 'quote'">
          <span class="text-gray-700">Estimated budget (in USD)</span>
          <input name="budget" class="block w-full mt-1 form-input" placeholder="$5000">
        </label>

        <label class="block mt-4" v-if="radioValue === 'quote'">
          <span class="text-gray-700">Current site (if any)</span>
          <input name="website" class="block w-full mt-1 form-input" placeholder="https://your-site.com">
        </label>

        <button type="submit" class="block w-full px-10 py-6 mt-4 mb-5 text-xl font-bold bg-gray-800 rounded-md text-accent md:mt-8">
          <span v-if="radioValue === 'quote'">Let's do this!</span>
          <span v-if="radioValue === 'message'">Send it, Sparky!</span>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import ContactMethod from "@/components/ContactMethod.vue";
export default {
  components: {
    ContactMethod
  },
  data() {
    return {
      radioValue: "message",
      message_type: "",
      message_type: this.radioValue
    };
  },
  methods: {
    setFocus: function() {
      this.$refs.message.focus();
    }
  },
  stored: {
    contactMethod: {
      type: String,
      key: "contactMethod",
      default: "email"
    }
  }
};
</script>
