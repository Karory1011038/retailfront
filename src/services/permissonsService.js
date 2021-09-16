import api from '@/services/api'

export default {
    getPermissions(){
        return api.get(`permissions/`)
            .then(response => response.data)
    }
}