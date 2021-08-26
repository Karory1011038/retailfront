import api from '@/services/api'

export default {
    getCurrent() {
        return api.get(`customers/current/`)
            .then(response => response.data)
    },
    fetchCustomers(params) {
        return api.get(`customers/`,{params})
            .then(response => response.data)
    },
    getPermissions(){
        return api.get(`permissions/`)
            .then(response => response.data)
    }
}