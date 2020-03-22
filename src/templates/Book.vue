<template>
	<Layout :sidebar="true" :top="false" :bottom="true">
        <div class="flex justify-start book">
            <div class="lg:mr-10">
                <figure v-if="$page.book.cover">
                    <g-image :src="$page.book.cover.large" />
                </figure>
                <figure v-else>
                    <g-image src="/spacer.gif" class="block w-full h-auto shadow-sm" />
                </figure>
            </div>
            <div>
                <h1 class="text-3xl" v-html='$page.book.title' />
                <div class="flex items-center justify-start">
                    <div v-if="$page.book.authors"> By <strong v-html="$page.book.authors[0].name" /></div>
                    <div v-if="$page.book.publish_date" class="md:ml-1">&middot; Published on <span v-html="$page.book.publish_date" /></div>
                    <div v-if="$page.book.number_of_pages" class="md:ml-1">&middot; <span v-html="$page.book.number_of_pages" /> Pages</div>
                </div>
                <div class="mt-5" v-if="$page.book.category">
                    <span v-if="$page.book.status === 0" class="badge unread">Unread</span>
                    <span v-if="$page.book.status === 1" class="badge read">Read</span>
                    <span v-if="$page.book.status === 2" class="badge reading">Reading</span>
                   <span class="ml-2">Filed under <strong class="capitalize">{{ $page.book.category }}</strong></span>
                </div>


                <div class="flex items-center mt-5">
                    <span class="mr-2 text-gray-700" v-for="(tag, i) in $page.book.tags" :key="i">#{{ tag }}</span>
                </div>

                <div class="mt-5" v-if="$page.book.review">
                    <h2 class="text-xl">My review</h2>
                    {{ $page.book.review }}
                </div>
            </div>
        </div>
                    
        <template slot="secondary-nav">
			<NavAbout />
		</template>
    </Layout>
</template>

<page-query>
query Book ($id: ID!){
  book (id: $id) {
    id
    title
    status
    review
    category
    tags
    authors {
        name
    },
    cover {
        large
    }
    publish_date
    url
    subjects {
        name
    }
    number_of_pages
  }
}
</page-query>

<script>
import NavAbout from "~/components/NavAbout.vue";

export default {
    components: {
        NavAbout
	},
    metaInfo: {
        title: 'Book Details',
        bodyAttrs: {
			class: "about library book"
		}
    }
}
</script>

<style>
.badge {
    @apply rounded-full inline-block px-4 py-1 
}
.unread {
    @apply bg-red-400;
}
.read {
    @apply bg-green-400;
}
.reading {
    @apply bg-orange-400;
}
</style>