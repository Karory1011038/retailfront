import api from '@/services/api'

export default {
    getCurrent() {
        return api.get(`customers/current/`)
            .then(response => response.data)
    },
    getCustomer(id) {
        return api.get(`customers/${id}/`)
            .then(response => response.data)
    },
    fetchCustomers(params) {
        return api.get(`customers/`,{params})
            .then(response => response.data)
    },
    update(payload) {
        return api.put(`customers/${payload.id}/`, payload)
            .then(response => response.data)
    },
    post(payload) {
        return api.post(`customers/`, payload)
            .then(response => response.data)
    }
}