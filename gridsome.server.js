const axios = require('axios')

const upcomingTuts = [
  {
    "id": 1,
    "title": "Using NPM Modules with Gridsome",
    "slug": 1,
    "topic": "Gridsome",
    "tags": "npm, yarn, modules",
    "amount": 150,
    "level": "Intermediate"
  },
  {
    "id": 2,
    "title": "Easy state persistence with Vue.js",
    "slug": 2,
    "topic": "JAMstack",
    "tags": "state, cookies, persistence",
    "amount": 150,
    "level": "Beginner"
  },
  {
    "id": 3,
    "title": "Vue.js weather widget with Gridsome",
    "slug": 3,
    "topic": "Gridsome",
    "tags": "vue, weather, apis",
    "amount": 150,
    "level": "Intermediate"
  },
  {
    "id": 4,
    "title": "Build a robust search solution for Gridsome",
    "slug": 4,
    "topic": "Vue",
    "tags": "search, diy, gridsome",
    "amount": 300,
    "level": "Intermediate"
  },
  {
    "id": 5,
    "title": "Live search filtering with Gridsome",
    "slug": 5,
    "topic": "Gridsome",
    "tags": "search, filtering, live-search",
    "amount": 300,
    "level": "Beginner"
  },
  {
    "id": 6,
    "title": "Using Cockpit as a Gridsome source",
    "slug": 6,
    "topic": "Gridsome",
    "tags": "cockpit, source, headless",
    "amount": 150,
    "level": "Intermediate"
  },
  {
    "id": 7,
    "title": "Form processing for static sites",
    "slug": 7,
    "topic": "JAMstack",
    "tags": "contact, forms, forms-processing",
    "amount": 300,
    "level": "Intermediate"
  },
  {
    "id": 8,
    "title": "Output posts on a live map",
    "slug": 8,
    "topic": "Gridsome",
    "tags": "maps, linked-posts, mapquest",
    "amount": 150,
    "level": "Advanced"
  },
  {
    "id": 9,
    "title": "Using WordPress as a Gridsome source",
    "slug": 9,
    "topic": "Gridsome",
    "tags": "wordpress, source, headless",
    "amount": 150,
    "level": "Intermediate"
  },
  {
    "id": 10,
    "title": "Implementing a theme selector",
    "slug": 10,
    "topic": "Vue",
    "tags": "theme-selector, darkmode, presets",
    "amount": 150,
    "level": "Beginner"
  },
  {
    "id": 11,
    "title": "Using Markdown as a Gridsome source",
    "slug": 11,
    "topic": "Gridsome",
    "tags": "markdown, source, local",
    "amount": 150,
    "level": "Beginner"
  },
  {
    "id": 12,
    "title": "Using Ghost as a Gridsome source",
    "slug": 12,
    "topic": "Gridsome",
    "tags": "ghost, source, blogging",
    "amount": 150,
    "level": "Intermediate"
  },
  {
    "id": 13,
    "title": "Simple list layout toggling with Vue.js",
    "slug": 13,
    "topic": "Vue",
    "tags": "layout, toggle, switcher",
    "amount": 150,
    "level": "Beginner"
  },
  {
    "id": 14,
    "title": "Query multiple collections with Gridsome",
    "slug": 14,
    "topic": "Gridsome",
    "tags": "queries, graphql, loops",
    "amount": 150,
    "level": "Intermediate"
  },
  {
    "id": 15,
    "title": "Related content with Gridsome",
    "slug": 15,
    "topic": "Gridsome",
    "tags": "related-posts, graphql, content",
    "amount": 300,
    "level": "Intermediate"
  },
  {
    "id": 16,
    "title": "Using Forestry.io as a Gridsome source",
    "slug": 16,
    "topic": "Gridsome",
    "tags": "forestry, source, headless",
    "amount": 150,
    "level": "Intermediate"
  },
  {
    "id": 17,
    "title": "Using Google Sheets as a Gridsome source",
    "slug": 17,
    "topic": "Gridsome",
    "tags": "googlesheets, source, spreadsheets",
    "amount": 150,
    "level": "Intermediate"
  },
  {
    "id": 18,
    "title": "Using Airtable as a Gridsome source",
    "slug": 18,
    "topic": "Gridsome",
    "tags": "airtable, source, spreadsheets",
    "amount": 150,
    "level": "Intermediate"
  }
]

module.exports = function (api) {

  api.loadSource(async store => {

    const contentType = store.addCollection({
      typeName: 'UpcomingTuts'
    })

    for (const item of upcomingTuts) {
      contentType.addNode({
        id: item.id,
        title: item.title,
        path: item.slug,
        topic: item.topic,
        tags: item.tags,
        level: item.level,
        amount: item.amount
      })
    }
  })

  api.loadSource( async store => {
    const bookStore = store.addCollection('Book')
   
    // Get all books at once using map (or object)
    const allReviews = new Map([
      /* Work */
      // Vue.js: Up and Running
      ['isbn:9781491997246', { isbn: "9781491997246", short_title: "Vue.js: Up and Running", status: 0, review: "", category: "work", tags: ["javascript","vue","coding"] }],
      // Vue.js in Action
      ['isbn:9781617294624', { isbn: "9781617294624", short_title: "", status: 0, review: "", category: "work", tags: ["javascript","vue","coding"] }],
      // Pro Vue.js 2
      ['isbn:9781484238042', { isbn: "9781484238042", short_title: "", status: 0, review: "", category: "work", tags: ["javascript","vue","coding"] }],
      // Learning Vue.js 2
      ['isbn:9781786469946', { isbn: "9781786469946", short_title: "Learning Vue.js 2", status: 0, review: "", category: "work", tags: ["javascript","vue","coding"] }],
      // Getting to Know Vue.js
      ['isbn:9781484237809', { isbn: "9781484237809", short_title: "Getting to Know Vue.js", status: 2, review: "", category: "work", tags: ["javascript","vue","coding"] }],
      // Full-Stack Web Development with Vue.js and Node
      ['isbn:9781788831147', { isbn: "9781788831147", short_title: "Full-Stack Web Development with Vue.js and Node", status: 0, review: "", category: "work", tags: ["javascript","vue","coding"] }],
      // Vue.js 2 Cookbook
      ['isbn:9781786468093', { isbn: "9781786468093", short_title: "Vue.js 2 Cookbook", status: 0, review: "", category: "work", tags: ["javascript","vue","coding"] }],
      // Complete Vue.js 2 Web Development
      ['isbn:9781789959901', { isbn: "9781789959901", short_title: "Complete Vue.js 2 Web Development", status: 0, review: "", category: "work", tags: ["javascript","vue","coding"] }],
      // Fullstack Vue
      ['isbn:9781987595291', { isbn: "9781987595291", short_title: "Fullstack Vue", status: 0, review: "", category: "work", tags: ["javascript","vue","coding"] }],
      // Vue.js 2 Web Development Projects: Learn Vue.js by building 6 web apps
      ['isbn:9781787127463', { isbn: "9781787127463", short_title: "Vue.js 2 Web Development Projects", status: 0, review: "", category: "work", tags: ["javascript","vue","coding"] }],
      // Mastering Modular JavaScript
      ['isbn:9781491955680', { isbn: "9781491955680", short_title: "", status: 0, review: "", category: "work", tags: ["javascript","vue","coding"] }],
      // JavaScript Data Structures and Algorith["javascript","vue","coding"]
      ['isbn:9781484239872', { isbn: "9781484239872", short_title: "JavaScript Data Structures and Algorithms", status: 0, review: "", category: "work", tags: ["javascript","vue","coding"] }],
      // Beginning Functional JavaScript
      ['isbn:9781484226551', { isbn: "9781484226551", short_title: "Beginning Functional JavaScript", status: 0, review: "", category: "work", tags: ["javascript","vue","coding"] }],
      // Understanding ECMAScript 6
      ['isbn:9781593277574', { isbn: "9781593277574", short_title: "Understanding ECMAScript 6", status: 0, review: "", category: "work", tags: ["javascript","vue","coding"] }],
      // Secrets of the JavaScript Ninja
      ['isbn:9781617292859', { isbn: "9781617292859", short_title: "", status: 0, review: "", category: "work", tags: ["javascript","vue","coding"] }],
      // Visual Studio Code: End-to-End Editing and Debugging Tools for Web Developers
      ['isbn:9781119588184', { isbn: "9781119588184", short_title: "Visual Studio Code", status: 0, review: "", category: "work", tags: ["vscode","tools","coding"] }],
      // Masterng CSS: A guided journey through modern CSS
      ['isbn:9781787281585', { isbn: "9781787281585", short_title: "Masterng CSS", status: 0, review: "", category: "work", tags: ["css","css3","coding"] }],
      // Grid Layout in CSS: Interface Layout for the Web
      ['isbn:9781491930212', { isbn: "9781491930212", short_title: "Grid Layout in CSS", status: 0, review: "", category: "work", tags: ["css","css3","coding"] }],
      // CSS Pocket Reference: Visual Presentation for the Web
      ['isbn:9781492033394', { isbn: "9781492033394", short_title: "CSS Pocket Reference", status: 0, review: "", category: "work", tags: ["css","css3","coding"] }],
      // CSS in Depth
      ['isbn:9781617293450', { isbn: "9781617293450", short_title: "", status: 0, review: "", category: "work", tags: ["css","css3","coding"] }],
      // CSS3 for Web Designers
      ['isbn:9780984442522', { isbn: "9780984442522", short_title: "", status: 0, review: "", category: "work", tags: ["css","css3","coding"] }],
      
      /* Fiction */
      // Celestine Prophecy
      ['isbn:9780446518628', { isbn: "9780446518628", short_title: "", status: 1, review: "I read this when I was 15 and it had a profound impact on the direction my life was taking.", category: "fiction", tags: ["personal-development", "profound", "recommended"] }],
      // The Zahir
      ['isbn:9780060825218', { isbn: "9780060825218", short_title: "", status: 1, review: "", category: "fiction", tags: ["story", "profound", "recommended"] }],
      // Witch of Portabello
      ['isbn:9780061459146', { isbn: "9780061459146", short_title: "", status: 1, review: "", category: "fiction", tags: ["story", "profound", "recommended"] }],
      // The Alchemist
      ['isbn:9780062315007', { isbn: "9780062315007", short_title: "The Alchemist", status: 1, review: "The first Paulo Coelho book I ever read and after was instantly hooked.", category: "fiction", tags: ["story", "profound", "recommended"] }],
      // Veronica Decides to Die
      ['isbn:9785955000831', { isbn: "9785955000831", short_title: "", status: 1, review: "", category: "fiction", tags: ["story", "profound", "recommended"] }],
      // Magic Kingdom for Sale
      ['isbn:9780345317582', { isbn: "9780345317582", short_title: "", status: 1, review: "I first read this series when I was in highschool and have been a fan of Terry Brooks' writing ever since.", category: "fantasy", tags: ["landover", "fantasy", "series"] }],
      // Princess of Landover
      // ['isbn:', { isbn: "", short_title: "", status: 1, review: "I first read this series when I was in highschool and have been a fan of Terry Brooks' writing ever since.", category: "fantasy", tags: ["landover", "fantasy", "series"] }],
      ['isbn:9780553564945', { isbn: "9780553564945", short_title: "The Magician: Apprentice", status: 1, review: "", category: "fantasy", tags: ["magician", "fantasy", "series"] }],
      ['isbn:9780553564938', { isbn: "9780553564938", short_title: "The Magician: Master", status: 1, review: "", category: "fantasy", tags: ["magician", "fantasy", "series"] }],
      ['isbn:9780586064177', { isbn: "9780586064177", short_title: "Silverthorn", status: 1, review: "", category: "fantasy", tags: ["magician", "fantasy", "series"] }],
      ['isbn:9780586066881', { isbn: "9780586066881", short_title: "A Darkness At Sethanon", status: 1, review: "", category: "fantasy", tags: ["magician", "fantasy", "series"] }],
      // Illustrated cookbook of ingredients
      ['isbn:9780756667306', { isbn: "9780756667306", short_title: "", status: 1, review: "", category: "cooking", tags: ["recipes", "ingredients", "illustrated"] }],
      // 
      // ['isbn:', { isbn: "", short_title: "", status: 1, review: "", category: "cooking", tags: ["recipes", "ingredients", "reference"] }],
      // gordon ramseys ultimate cookery course
      ['isbn:9781444756692', { isbn: "9781444756692", short_title: "", status: 1, review: "", category: "cooking", tags: ["recipes", "basics", "course"] }],
      // slow bread real bread  
      ['isbn:9781848997370', { isbn: "9781848997370", short_title: "Slow Dough: Real Bread", status: 1, review: "", category: "cooking", tags: ["recipes", "baking", "bread"] }],
      // Salt, fat, acid, heat
      ['isbn:9781476753836', { isbn: "9781476753836", short_title: "Salt, Fat, Acid, Heat", status: 2, review: "", category: "cooking", tags: ["recipes", "cooking", "food-science"] }],

      
      // Soup bible
      ['isbn:9780760790458', { isbn: "9780760790458", short_title: "", status: 1, review: "", category: "cooking", tags: ["recipes", "soup", "reference"] }],
      // The kitchen garden cookbook
      ['isbn:9780756671884', { isbn: "9780756671884", short_title: "", status: 1, review: "", category: "cooking", tags: ["recipes", "garden", "reference"] }],

      // Kitchen herb garden
      ['isbn:9780804852302', { isbn: "9780804852302", short_title: "", status: 0, review: "", category: "gardening", tags: ["kitchen", "herbs", "garden"] }],

      /* Natural Building */
      // Cob Builders Handbook
      ['isbn:97819059780965908207862894', { isbn: "9780965908207", short_title: "", status: 0, review: "", category: "natural-building", tags: ["cobb", "sustainable-building", "earth-works"] }],
      // Hand Sculptured House
      ['isbn:9781890132347', { isbn: "9781890132347", short_title: "", status: 0, review: "", category: "natural-building", tags: ["cobb", "sustainable-building", "earth-works"] }],

      
      
      
    ])
    // Create a string of all used ISBN numbers, i.e. 'isbn:1234,isbn:5678'
    const allISBN = [...allReviews.keys()].reduce((str, isbn) => str.concat(`${ isbn },`), '')
    // Get all books using the above ISBN query string
    const { data: allBooks }= await axios.get(`http://openlibrary.org/api/books?bibkeys=${allISBN}&format=json&jscmd=data`)

    // Loop through all books, getting the ISBN as a key, and the data as book value
    for (const [isbn, book] of Object.entries(allBooks)) {
      // Use ISBN key to get review from map
      const review = allReviews.get(isbn)

      // Add both fields to book store
      bookStore.addNode({
        ...book,
        ...review
      })
    }

  })
}