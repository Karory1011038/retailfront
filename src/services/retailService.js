import api from '@/services/api'

export default {
    getCurrent() {
        return api.get(`retail/current/`)
            .then(response => response.data)
    },
    update(payload) {
        return api.put(`retail/`, payload)
            .then(response => response.data)
    }
}