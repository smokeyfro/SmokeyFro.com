module.exports = {
  siteName: "SmokeyFro",
  siteUrl: "https://smokeyfro.com",
  titleTemplate: "%s - SmokeyFro",
  siteDescription: "The personal portfolio of Chris Rault, a designer, front-end developer and occassional entrepreneur from South Africa.",
  icon: 'src/favicon.png',
  permalinks: {
    trailingSlash: false,
  },
  resolveAbsolutePaths: false,
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
    Book: [
      {
        path: '/about/library/:title',
        component: './src/templates/Book.vue'
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
    Work: [
      {
        path: '/work/:slug',
        component: './src/templates/Work.vue'
      }
    ],
    Video: [
      {
        path: '/videos/:slug',
        component: './src/templates/Video.vue'
      }
    ],
    GhostPage: [
      {
        path: '/tutorials/:slug',
        component: './src/templates/Tut.vue'
      }
    ],
    GhostPost: [
      {
        path: '/journal/:slug',
        component: './src/templates/Post.vue'
      }
    ],
    GhostTag: [
      {
        path: '/tutorials/:slug',
        component: './src/templates/Topic.vue'
      }
    ],
    Album: [
      {
        path: '/about/photos/:slug',
        component: './src/templates/Album.vue'
      }
    ],
    Category: [
      {
        path: '/about/photos/category/:title',
        component: './src/templates/Category.vue'
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
      use: '@noxify/gridsome-plugin-remote-image',
      options: {
        'typeName' : 'GhostPage',
        'sourceField': 'feature_image',
        'targetField': 'cover',
        'targetPath': './src/assets/remote-images'
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          whitelist: [
            'pre',
            'code',
            'code-toolbar', 
            'toolbar',
            'toolbar-item',
            'language-javascript', 
            'language-html', 
            'language-css', 
            'language-php',
            'token',
            'operator',
            'keyword',
            'function',
            'function-variable',
            'punctuation',
            'class-name',
            'string',
            'number',
            '.token.keyword',
            '.token.atrule',
            '.token.attr-value',
            'code[class*="language-"]',
            'pre[class*="language-"]'
          ],
          whitelistPatterns: [
            /code-toolbar/,
            /plyr/,
            /drawer-mask/,
            /$plyr/,
            /markdown/,
            /$token/,
            /$function/,
            /$code/

          ],
          whitelistPatternsChildren: [
            /plyr/,
            /code-toolbar/
          ]
        },
        presetEnvConfig: {
            features: {
              'nesting-rules': true
            }
        },
        shouldPurge: true,
        shouldImport: false,
        shouldTimeTravel: true
      }
    },
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        collections: [
          {
            typeName: 'GhostTag',
            indexName: 'Tags',
            fields: ['name', 'description']
          },
          {
            typeName: 'GhostPost',
            indexName: 'Journal',
            fields: ['title', 'excerpt']
          },
          {
            typeName: 'GhostPage',
            indexName: 'Tutorials',
            fields: ['title', 'excerpt']
          },
          {
            typeName: 'Theme',
            indexName: 'Themes',
            fields: ['title', 'excerpt']
          },
          {
            typeName: 'Work',
            indexName: 'Portfolio',
            fields: ['title', 'excerpt', 'content']
          },
          {
            typeName: 'Service',
            indexName: 'Services',
            fields: ['title', 'excerpt']
          },
          {
            typeName: 'Video',
            indexName: 'Videos',
            fields: ['title', 'excerpt']
          },
          {
            typeName: 'Album',
            indexName: 'photos',
            fields: ['title', 'excerpt']
          }
        ],
        searchFields: ['title', 'searchTerms']
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/release-notes/**/*.md",
        typeName: "ReleaseNote",
        resolveAbsolutePaths: true
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
        path: "content/videos/**/*.md",
        typeName: "Video",
        resolveAbsolutePaths: true,
        remark: {
          plugins: [
            ['gridsome-plugin-remark-youtube', { width: '100%', align: 'auto' }]
          ]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/albums/**/*.md",
        typeName: "Album",
        resolveAbsolutePaths: true,
        refs: {
          category: {
            typeName: 'Category',
            create: true,
          }
        }
      }
    },
    {
      use: '@gridsome/source-ghost',
      options: {
        typeName: 'Ghost',
        baseUrl: process.env.SF_GHOST_URL,
        contentKey: process.env.SF_GHOST_KEY,
        version: 'v4',
        routes: {
          page: '/journal/:slug',
          post: '/tutorials/:slug',
          tag: '/tutorials/:slug'
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
        exclude: ['/wo0t','/hifive','/easteregg','/devtools','/jamstack'],
      }
    },
    {
      use: 'gridsome-plugin-feed',
      options: {
        contentTypes: ['GhostPost', 'GhostPage', 'GhostTag', 'Theme', 'Work', 'Video', 'Service', 'Album'],
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
  ]
}