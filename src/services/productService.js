import api from '@/services/api'

export default {
    getProduct(id) {
        return api.get(`products/${id}/`)
            .then(response => response.data)
    },
    fetchProducts() {
        return api.get(`products/`,)
            .then(response => response.data)
    },
    update(payload) {
        return api.put(`products/${payload.id}/`, payload)
            .then(response => response.data)
    },
    post(payload) {
        return api.post(`products/`, payload)
            .then(response => response.data)
    },
    search(payload) {
        return api.get(`products/search/`, payload)
            .then(response => response.data)
    }
}