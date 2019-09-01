const BASE_API_URL = 'https://www.eventbriteapi.com/v3/'
const API_TOKEN = 'H3XNKDXWLEAP3RPVC4X6'
const sort_by = 'date'

export const API_URLS = {
  categories: `${BASE_API_URL}categories/?token=${API_TOKEN}`,
  events: (search) => `${BASE_API_URL}events/search/?expand=venue&q=${search.name}&categories=${search.category}&location.address=${search.location}&sort_by=${sort_by}&token=${API_TOKEN}`,
}
