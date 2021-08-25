import api from '@/services/api'

export default {
    getCurrent() {
        return api.get(`customers/current/`)
            .then(response => response.data)
    },
    fetchCustomers() {
        return api.get(`customers/`)
            .then(response => response.data)
    },
}