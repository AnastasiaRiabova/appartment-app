import axios from 'axios'
import userAuth from '../store/modules/userAuth'

const instance = axios.create({
  baseURL: 'https://apt-booking-api.herokuapp.com'
})
instance.interceptors.request.use(
  (config) => {
    const { token } = userAuth.state

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => Promise.reject(error)
)

export default instance
