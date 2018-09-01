import axios from 'axios'

// Helper to make the http request with axios
const request = (url, method) => {
  const axiosConfig = { url, method }
  return axios(axiosConfig)
}

export default request
