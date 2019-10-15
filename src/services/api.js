import axios from 'axios'

export const url =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost/api'
    : 'https://api.linkapi.com/api'

async function api (data) {
  const headers = {
    Accept: 'application/json',
    'content-Type': 'application/json'
  }

  const response = await axios({ method: 'POST', headers, url, data })

  if (response.data.errors) throw response.data.errors[0].message

  return response.data.data
}

export default api
