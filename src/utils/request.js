import axios from 'axios'

import { baseURL, APIKey } from '../config'

const request = axios.create({
  baseURL,
  headers: {
    accept: 'application/json',
  }
})

export const isProd = true

export default function ({ method = 'get', url = '', payload }) {
  return request[method](url, {
    params: {
      apikey: APIKey,
      q: payload,
    }
  })
}