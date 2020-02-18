<template>
<div class="newsletter">
    <h2 v-if="title">{{ title || "Sign up for my newsletter" }}</h2>
    <p v-if="summary">{{ summary || "Get notified of new posts" }}</p>

    <form action="https://send.smokeyfro.com/subscribe" method="POST" accept-charset="utf-8">
    
        <label class="block w-full mt-4">
          <span class="text-gray-700">Your name</span>
          <input name="name" id="name" class="block w-full mt-1 form-input" placeholder="Dany Targaryen">
        </label>

        <label class="block w-full mt-4">
          <span class="text-gray-700">Your email</span>
          <input name="email" id="email" class="block w-full mt-1 form-input" placeholder="dani@allthekingdoms.org">
        </label>

       <button name="submit" id="submit" type="submit" class="block w-full px-10 py-6 mt-6 mb-5 text-xl font-bold bg-gray-800 rounded-md text-accent">
          Subscribe
        </button>

        <input type="hidden" name="list" value="cbj3D8Vn8KzuBVw391Q3pw"/>
        <input type="hidden" name="subform" value="yes"/>

        <div class="hidden">
          <label for="hp">HP</label>
          <input type="text" name="hp" id="hp"/>
        </div>
          
	  </form>
	</div>
</template>

<script>
export default {
  name: 'Newsletter',
  props: ['title', 'summary']
}
</script>
