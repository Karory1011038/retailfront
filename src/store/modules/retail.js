import retailService from "@/services/retailService"
import errorMsg from "@/logic/error-msg"

const state = {
    current: null,
    loading_current: false
}

const getters = {}

const actions = {
    async GET_CURRENT({state, commit}) {
        return new Promise((resolve, reject) => {
            state.loading_current = true
            retailService.getCurrent()
                .then((data) => {
                    commit('SET_CURRENT', data)
                    resolve(data)
                })
                .catch((err) => {
                    errorMsg('Не удалось загрузить сайт', err)
                    commit('SET_CURRENT', null)
                    reject()
                })
                .finally(() => {
                    state.loading_current = false
                })
        })
    }, async UPDATE({commit}, payload) {
        return new Promise((resolve, reject) => {
            retailService.update(payload)
                .then((data) => {
                    commit('SET_CURRENT', data)
                    resolve(data)
                })
                .catch((err) => {
                    errorMsg('Не удалось обновить данные магазина', err)
                    reject()
                })
        })
    },
}

const mutations = {
    SET_CURRENT(state, data) {
        state.current = data
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}