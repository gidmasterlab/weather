import axios from 'axios'
import router from '@/router'
import { ENVIRONMENT } from '@/utils/environment'

const httpClient = axios.create({
  baseURL: 'https://api.weatherapi.com/v1',
  timeout: 5000
})

httpClient.interceptors.request.use(async (request) => {
  // Include the API key and the set the response type.
  request.url = request.url + '.json'
  request.params.key = ENVIRONMENT.key

  return request
})

httpClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger and redirect to error page
    console.log(error.response)
    const status = error.response.status

    router.push(`/error/${status}`)
    return Promise.reject()
  }
)

export default httpClient
