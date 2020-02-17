const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async store => {
    const { data } = await axios.get('https://gson.fayazara.now.sh/?url=https://docs.google.com/spreadsheets/d/e/2PACX-1vQX5bUPLhPh8tHli7fGq9YJUFKnUle1xrNpUpu5Agupb3X4PbUWOi7Ere6XbRxPGudhntfzK7hfjPUo/pub?output=csv')

    const contentType = store.addCollection({
      typeName: 'UpcomingTuts'
    })

    for (const item of data) {
      contentType.addNode({
        id: item.id,
        title: item.title,
        path: item.slug
      })
    }
  })

}