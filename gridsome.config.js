module.exports = {
  siteName: "SmokeyFro",
  siteUrl: "https://smokeyfro.com",
  titleTemplate: "%s - SmokeyFro",
  siteDescription: "The personal portfolio of Chris Rault, a designer, front-end developer and occassional entrepreneur from South Africa.",
  icon: 'src/favicon.png',
  permalinks: {
    trailingSlash: false,
  },
  resolveAbsolutePaths: true,
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
        path: '/videos/:slug',
        component: './src/templates/Video.vue'
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
        path: '/tutorials/about/:slug',
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
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          // whitelist: [
          //   'pre',
          //   'code',
          //   'code-toolbar', 
          //   'toolbar',
          //   'toolbar-item',
          //   'language-javascript', 
          //   'language-html', 
          //   'language-css', 
          //   'language-php',
          //   'token',
          //   'operator',
          //   'keyword',
          //   'function',
          //   'function-variable',
          //   'punctuation',
          //   'class-name',
          //   'string',
          //   'number',
          //   '.token.keyword',
          //   '.token.atrule',
          //   '.token.attr-value',
          //   'code[class*="language-"]',
          //   'pre[class*="language-"]'
          // ],
          whitelistPatterns: [
            /video/,
            /code-toolbar/,
            /$code-toolbar/,
            /plyr/,
            /$plyr/,
            /prism/,
            /markdown/
          ],
          whitelistPatternsChildren: [
            /plyr/
          ]
        },
        presetEnvConfig: {
            features: {
              'nesting-rules': true
            }
        },
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true
      }
    },
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        collections: [
          // {
          //   typeName: 'Design',
          //   indexName: 'Designs',
          //   fields: ['title', 'excerpt', 'description']
          // },
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
            indexName: 'Tutorials',
            fields: ['title', 'excerpt', 'description', 'tags']
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
            indexName: 'Side-Project',
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
            ['gridsome-plugin-remark-youtube', { width: '100%', align: 'auto' }]
          ]
        }
      }
    },
    {
      use: '@gridsome/source-ghost',
      options: {
        typeName: 'Ghost',
        baseUrl: process.env.SF_GHOST_URL,
        contentKey: process.env.SF_GHOST_KEY,
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
        exclude: ['/wo0t','/hifive','/easteregg','/devtools','/jamstack'],
      }
    },
    {
      use: 'gridsome-plugin-feed',
      options: {
        contentTypes: ['GhostPost', 'GhostPage', 'Theme', 'Work', 'Project', 'Video', 'Service'],
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