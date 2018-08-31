import axios from 'axios'

const request = (url, method) => {
  const axiosConfig = { url, method }
  return axios(axiosConfig)
}

export default request
