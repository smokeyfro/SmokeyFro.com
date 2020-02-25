class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

module.exports = {
  siteName: "SmokeyFro",
  siteUrl: "https://smokeyfro.com",
  titleTemplate: "%s - SmokeyFro",
  siteDescription: "Chris Rault, aka SmokeyFro - a designer, front-end developer and oocassional entrepreneur from South Africa.",
  icon: 'src/favicon.svg',
  //trailingSlash: false,
  permalinks: { 
    trailingSlash: false 
  },
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
    Work: [
      {
        path: '/work/:slug',
        component: './src/templates/Work.vue'
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
      use: '~/src/plugins/gridsome-source-instagram',
      options: {
        username: 'smokeyfro',
        typeName: 'Photo'
      }
    },
    // {
    //   use: '@noxify/gridsome-plugin-remote-image',
    //   options: {
    //     'typeName' : 'GhostPost',
    //     'sourceField': 'feature_image',
    //     'targetField': 'coverImage',
    //     'targetPath': './media/tuts'
    //   }
    // },
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
            fields: ['title', 'excerpt', 'content']
          },
          {
            typeName: 'Project',
            indexName: 'Portfolio',
            fields: ['title', 'excerpt', 'content']
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
        path: "content/work/**/*.md",
        typeName: "Work",
        resolveAbsolutePaths: true
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
    // {
    //   use: '~/src/plugins/source-cockpit',
    //     options: {
    //       accessToken: process.env.SF_ACCESS_TOKEN,
    //       host: process.env.SF_API_HOST,
    //       routes: {
    //         CockpitWork: '/work/:slug',
    //         CockpitProjects: '/projects/:slug'
    //       }
    //     }
    // },
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
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
      }
    },
    {
      use: 'gridsome-plugin-feed',
      options: {
        contentTypes: ['GhostPost', 'GhostPage', 'Theme', 'Work', 'Project'],
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
  chainWebpack: config => {
    config.module
      .rule('css')
      .oneOf('normal')
      .use('postcss-loader')
      .tap(options => {
        options.plugins.unshift(...[
          require('postcss-import'),
          require('postcss-nested'),
          require('tailwindcss')
        ])

        if (process.env.NODE_ENV === 'production') {
          options.plugins.push(...[
            require('@fullhuman/postcss-purgecss')({
              content: [
                './../src/**/*.css',
                './../src/**/*.vue',
                './../src/**/*.js'
              ],
              defaultExtractor: content => content.match(/[\w-/:%]+(?<!:)/g) || []
            }),
          ])
        }

        return options
      })
  }
}
