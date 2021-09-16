import permissionsService from "@/services/permissonsService";
import errorMsg from "@/logic/error-msg";


const actions = {
    async GET_PERMISSIONS() {
        return new Promise((resolve, reject) => {
            permissionsService.getPermissions()
                .then((data) => {
                    resolve(data)
                })
                .catch((err) => {
                    errorMsg('Не получить список разрешений', err)
                    reject()
                })
        })
    }
}
export default {
    namespaced: true,
    actions,
}