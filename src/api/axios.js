import Axios from 'axios'

let axios = Axios.create({
  baseURL: './json/',
  timeout: 1000 * 60,
  headers: { 'X-Custom-Header': 'foobar' }
})

export default axios
