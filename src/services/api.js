import axios from 'axios'
// import Cookies from 'js-cookie'

axios.defaults.headers.common['Content-Type'] = 'application/json'
// axios.defaults.headers.common['X-CSRFToken'] = Cookies.get('csrftoken')

let token = localStorage.getItem(`app_${location.host}-token`);

if (token) {
  axios.defaults.headers.common['Authorization'] = token
}

axios.defaults.baseURL = '/api'
axios.defaults.timeout = 60000 * 3 // 3 min

export default axios