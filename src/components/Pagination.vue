<template>
  <section class="max-w-3xl px-6 py-16 mx-auto border-b border-gray-300 md:px-8">
    <nav role="navigation" aria-label="pagination">
      <ul class="flex items-center justify-between reset sm:text-lg lg:text-xl">
        <li class="lg:w-1/5">
          <g-link :to="previousPage(info.currentPage)" :class="{'pointer-events-none opacity-0': info.currentPage == 1}" class="px-4 py-2 text-gray-700 transition-colors duration-300 hover:text-black" :rel="info.currentPage == 1 ? 'nofollow' : 'prev'">
            &larr; Previous
          </g-link>
        </li>
        <li class="hidden w-auto text-base text-center text-gray-600 md:flex">Page {{ info.currentPage }} of {{ info.totalPages }}</li>
        <li class="text-right lg:w-1/5">
          <g-link :to="nextPage(info.currentPage,info.totalPages)" :class="{'pointer-events-none opacity-0': info.currentPage == info.totalPages}" class="px-4 py-2 text-gray-700 transition-colors duration-300 hover:text-black" :rel="info.currentPage == info.totalPages ? 'nofollow' : 'next'">
            Next &rarr;
          </g-link>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  props: ['base','info'],
  methods: {
    previousPage(currentPage) {
      return [0, 1].includes(currentPage - 1) ? `${this.basePath}/` : `${this.basePath}/${currentPage - 1}/`;
    },
    nextPage(currentPage, totalPages) {
      return totalPages > currentPage ? `${this.basePath}/${currentPage + 1}/` : `${this.basePath}/${currentPage}/`;
    }
  },
  computed: {
    basePath() {
      return this.base || ''
    }
  }
}
</script>