import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers : {
    'Authorization': 'Client-ID skvb09VUPNn_nYPUySKqfvnYAS7HWR2W_RgDYxBeIZA'
  }
})

export default api