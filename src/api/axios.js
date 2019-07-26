import Axios from 'axios'

let axios = Axios.create({
  baseURL: './json/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
})

export default axios
