const sanityClient = require('@sanity/client')
const API_URL = 'https://fdnd-toc-api.netlify.app/river'

const client = sanityClient({
    projectId: 'xqdult3f',
    dataset: '<your-dataset>',
    token: '<your-token-with-write-access>', // we need this to get write access
    useCdn: false // We can't use the CDN for writing
})

fetch(API_URL)
    .then(res => res.json())
    .then(systems => {
        // we now have an array of catBreeds from the external API
    })

export default {
    name: 'riverSystems',
    type: 'document',
    fields: [
        {
        { name: 'name', type: 'string' },
        { id: 'id', type: 'string' },
        { name: 'status', type: 'string' },
        { name: 'status_label', type: 'string' },
        { name: 'latitude', type: 'string' },
        { name: 'longitude', type: 'string' },
        { name: 'type', type: 'string' },
        { name: 'debris_extracted_last_30d', type: 'string' },
        { name: 'debris_extracted_total', type: 'string' },
      }
    ]
  }