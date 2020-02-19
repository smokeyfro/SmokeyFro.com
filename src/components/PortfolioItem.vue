<template>
  <article>
    <header class="mb-1">
      <h2 class="font-sans text-3xl leading-tight">
        <g-link :to="`${post.path}`" class="font-bold text-black">{{ post.title }}</g-link>
      </h2>
    </header>
    <p v-html="post.excerpt" />
  </article>
</template>

<script>
export default {
  props: ['post']
}
</script>
