import axios from 'axios'
import store from '../store'

const instance = axios.create({
  baseURL: 'https://apt-booking-api.herokuapp.com'
})
instance.interceptors.request.use(
  (config) => {
    const token = store.state.userAuth.token

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => Promise.reject(error)
)

export default instance
