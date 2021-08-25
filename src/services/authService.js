import api from '@/services/api'

export default {
  socialAuth(params) {
    return api.get(`auth/login/`, {params})
        .then(response => response.data)
  },
  logout() {
    return api.get(`auth/logout/`)
        .then(response => response.data)
  },
}