import customerService from "@/services/customerService"
import errorMsg from "@/logic/error-msg";

const state = {
    current: null,
    loading_current: false,
    permissions: {}
}

const getters = {}

const actions = {
    async GET_CURRENT({state, commit}) {
        return new Promise((resolve, reject) => {
            state.loading_current = true
            customerService.getCurrent()
                .then((data) => {
                    commit('SET_CURRENT', data)
                    resolve(data)
                })
                .catch((err) => {
                    errorMsg('Не получить данные профиля', err)
                    commit('SET_CURRENT', null)
                    reject()
                })
                .finally(() => {
                    state.loading_current = false
                })
        })
    },
    async GET_CUSTOMERS(store,params) {
        return new Promise((resolve, reject) => {
            customerService.fetchCustomers(params)
                .then((data) => {
                    resolve(data)
                })
                .catch((err) => {
                    errorMsg('Не удалось получить список пользователей', err)
                    reject()
                })
        })
    },
    async GET_PERMISSIONS({commit}) {
        return new Promise((resolve, reject) => {
            customerService.getPermissions()
                .then((data) => {
                    commit('SET_PERMISSIONS', data)
                    resolve(data)
                })
                .catch((err) => {
                    errorMsg('Не получить список разрешений', err)
                    reject()
                })
        })
    }
}

const mutations = {
    SET_CURRENT(state, data) {
        state.current = data
    },
    SET_PERMISSIONS(state, data) {
        state.permissions = data
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}