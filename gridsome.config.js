// const purgecss = require('@fullhuman/postcss-purgecss')
// const tailwind = require('tailwindcss')

// const postcssPlugins = [
//   tailwind('./tailwind.config.js'),
// ]

// if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

module.exports = {
  siteName: "SmokeyFro",
  siteUrl: "https://smokeyfro.com",
  titleTemplate: "%s - SmokeyFro",
  siteDescription: "Chris Rault, aka SmokeyFro - a designer, front-end developer and oocassional entrepreneur from South Africa.",
  icon: 'src/favicon.png',
  trailingSlash: false,
  prefetch: {
    mask: '^$',
  },
  templates: {
    Theme: [
      {
        path: '/themes/:slug',
        component: './src/templates/Theme.vue'
      }
    ],
    Design: [
      {
        path: '/freebies/designs/:slug',
        component: './src/templates/Design.vue'
      }
    ],
    Work: [
      {
        path: '/work/:slug',
        component: './src/templates/Work.vue'
      }
    ],
    Service: [
      {
        path: '/services/:slug',
        component: './src/templates/Service.vue'
      }
    ],
    Project: [
      {
        path: '/projects/:slug',
        component: './src/templates/Project.vue'
      }
    ],
    Video: [
      {
        path: '/videos/:slug'
      }
    ],
    GhostPost: [
      {
        path: '/tutorials/:slug',
        component: './src/templates/Tut.vue'
      }
    ],
    GhostPage: [
      {
        path: '/journal/:slug',
        component: './src/templates/Post.vue'
      }
    ],
    GhostTag: [
      {
        path: '/tuts/about/:slug',
        component: './src/templates/Topic.vue'
      }
    ],
  },
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer']
    }
  },
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss"
    },
    {
      use: '@zefman/gridsome-source-instagram',
      options: {
        username: 'smokeyfro',
        typeName: 'Photo'
      }
    },
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        collections: [
          {
            typeName: 'Design',
            indexName: 'Designs',
            fields: ['title', 'excerpt', 'description']
          },
          {
            typeName: 'GhostTag',
            indexName: 'Tags',
            fields: ['title', 'excerpt', 'description']
          },
          {
            typeName: 'GhostPage',
            indexName: 'Journal',
            fields: ['title', 'excerpt', 'description']
          },
          {
            typeName: 'GhostPost',
            indexName: 'Tuts',
            fields: ['title', 'excerpt', 'description', 'tags']
          },
          {
            typeName: 'GhostTag',
            indexName: 'Tag',
            fields: ['name']
          },
          {
            typeName: 'Theme',
            indexName: 'Themes',
            fields: ['title', 'excerpt', 'description']
          },
          {
            typeName: 'Work',
            indexName: 'Portfolio',
            fields: ['title', 'excerpt', 'description']
          },
          {
            typeName: 'Service',
            indexName: 'Services',
            fields: ['title', 'excerpt', 'description']
          },
          {
            typeName: 'Video',
            indexName: 'Videos',
            fields: ['title', 'excerpt', 'description']
          }
        ],
        searchFields: ['title', 'searchTerms']
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/services/**/*.md",
        typeName: "Service",
        resolveAbsolutePaths: true
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/themes/**/*.md",
        typeName: "Theme",
        resolveAbsolutePaths: true
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/design/**/*.md",
        typeName: "Design",
        resolveAbsolutePaths: true
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/videos/**/*.md",
        typeName: "Video",
        resolveAbsolutePaths: true,
        remark: {
          plugins: [
            ['gridsome-plugin-remark-youtube', { width: '800px', align: 'auto' }]
          ]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/projects/**/*.md",
        typeName: "Project",
        resolveAbsolutePaths: true
      }
    },
    {
      use: '@gridsome/source-ghost',
      options: {
        typeName: 'Ghost',
        baseUrl: process.env.SF_BLOG_URL,
        contentKey: process.env.SF_BLOG_KEY,
        version: 'v3',
        routes: {
          post: '/tutorials/:slug',
          page: '/journal/:slug',
          tag: '/journal/tag/:slug'
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/work/**/*.md",
        typeName: "Work",
        resolveAbsolutePaths: true,
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
      }
    },
    {
      use: '@noxify/gridsome-plugin-image-download',
      options: {
        'typeName' : 'GhostPost',
        'sourceField': 'feature_image',
        'targetField': 'coverImage',
        'targetPath': 'media/tuts'
      }
    },
    {
      use: 'gridsome-plugin-feed',
      options: {
        contentTypes: ['GhostPost', 'GhostPage', 'Theme', 'Work'],
        feedOptions: {
          title: 'SmokeyFro - Syndicate',
          description: 'Web Development Tutorials, JAMStack themes and more'
        },
        rss: {
          enabled: true,
          output: '/feed.xml'
        },
        atom: {
          enabled: false,
          output: '/feed.atom'
        },
        json: {
          enabled: false,
          output: '/feed.json'
        },
        maxItems: 25,
        htmlFields: ['description', 'html'],
        enforceTrailingSlashes: false,
        filterNodes: (node) => true,
        nodeToFeedItem: (node) => ({
          title: node.title,
          date: node.date,
          content: node.html || node.content
        })
      }
    }
  ],
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: postcssPlugins,
  //     },
  //   },
  // },
}
