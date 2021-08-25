import authService from "@/services/authService";
import axios from "axios";
import errorMsg from "@/logic/error-msg";

const checkIsAuth = Boolean(localStorage.getItem(`app_${location.host}-token`))

const state = {
    is_auth: checkIsAuth,
}

const actions = {
    async SET_IS_AUTH({commit}, value) {
        commit('SET_IS_AUTH', value)
    },
    async SOCIAL_AUTH({commit}, params) {
        return new Promise((resolve, reject) => {
            authService.socialAuth(params)
                .then((data) => {
                    const token = data.key
                    if (token) {
                        localStorage.setItem(`app_${location.host}-token`, token)
                        axios.defaults.headers.common['Authorization'] = token
                        commit('SET_IS_AUTH', true)
                    }
                    resolve(data)
                })
                .catch((err) => {
					errorMsg('Не удалось авторизоваться', err)
                    commit('SET_IS_AUTH', false)
                    reject()
                })
        })
    },
    async LOGOUT({commit}) {
        return new Promise((resolve, reject) => {
            authService.logout()
                .then(() => {
                    localStorage.removeItem(`app_${location.host}-token`)
                    delete axios.defaults.headers.common['Authorization']
                    commit('SET_IS_AUTH', false)
                    resolve()
                })
                .catch((err) => {
                    errorMsg('Не удалось выйти из учетной записи', err)

                    reject()
                })
        })
    }
}

const mutations = {
    SET_IS_AUTH(state, value) {
        state.is_auth = value;
    }
}

export default {
    namespaced: true,
    mutations,
    actions,
    state
}