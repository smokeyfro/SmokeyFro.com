<template>
<Journal :sidebar="true" :top="false" :bottom="true">
    <h1>Themes</h1>
    <p>My growing collection of themes for Gridsome and WordPress.</p>
    <div>
        <div v-for="(post, index) in posts" :key="index">
            {{ $prismic.richTextAsPlain(post.title) }}
        </div>
    </div>
    <template slot="bottom-shelf">

    </template>
    <template slot="secondary-nav">
        <NavJournal />
    </template>
    <template slot="repo_link">
        <a href="https://github.com/smokeyfro/smokeyfro/blob/master/src/pages/Themes/Index.vue">Source</a>
    </template>
</Journal>
</template>

<script>
import Journal from "@/layouts/Journal"
import NavJournal from "@/components/NavJournal"

export default {
    computed: {
        posts() {
            return this.$page.prismic.posts.edges.map(e => e.node)
        }
    },
    components: {
        Journal,
        NavJournal
    },
    metaInfo: {
        title: "Journal",
        bodyAttrs: {
            class: "journal index"
        }
    }
}
</script>

<page-query>
query Post {
    prismic {
        posts: allPosts {
            edges {
                node {
                    title
                    subtitle
                    date
                    excerpt
                }
            }
        }
    }
}
</page-query>
