import customerService from "@/services/customerService"
import errorMsg from "@/logic/error-msg";

const state = {
    current: null,
    loading_current: false,
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
    async UPDATE(store,payload) {
        return new Promise((resolve, reject) => {
            customerService.update(payload)
                .then((data) => {
                    resolve(data)
                })
                .catch((err) => {
                    errorMsg('Не удалось обновить данные пользователя', err)
                    reject()
                })
        })
    },
    async POST(store,payload) {
        return new Promise((resolve, reject) => {
            customerService.post(payload)
                .then((data) => {
                    resolve(data)
                })
                .catch((err) => {
                    errorMsg('Не удалось добавить нового пользователя', err)
                    reject()
                })
        })
    },
    async GET_CUSTOMER({state},id) {
        return new Promise((resolve, reject) => {
            state.loading_current = true
            customerService.getCustomer(id)
                .then((data) => {
                    resolve(data)
                })
                .catch((err) => {
                    errorMsg('Не удалось получить пользователя', err)
                    reject()
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
    }
}

const mutations = {
    SET_CURRENT(state, data) {
        state.current = data
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}