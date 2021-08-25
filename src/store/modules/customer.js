import customerService from "@/services/customerService"
import errorMsg from "@/logic/error-msg";

const state = {
    current: null,
    loading_current: false,
    customers:[],
    loading_customers:false,
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
    async GET_CUSTOMERS({state, commit}) {
        return new Promise((resolve, reject) => {
            state.loading_customers = true
            customerService.fetchCustomers()
                .then((data) => {
                    commit('SET_CUSTOMERS', data)
                    resolve(data)
                })
                .catch((err) => {
                    errorMsg('Не получить список пользователей', err)
                    reject()
                })
                .finally(() => {
                    state.loading_customers = false
                })
        })
    }
}

const mutations = {
    SET_CURRENT(state, data) {
        state.current = data
    },
    SET_CUSTOMERS(state, data) {
        state.customers = data
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}