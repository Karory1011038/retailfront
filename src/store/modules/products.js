import productService from "@/services/customerService"
import errorMsg from "@/logic/error-msg";

const state = {
}

const getters = {}

const actions = {
    async UPDATE(store,payload) {
        return new Promise((resolve, reject) => {
            productService.update(payload)
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
            productService.post(payload)
                .then((data) => {
                    resolve(data)
                })
                .catch((err) => {
                    errorMsg('Не удалось добавить нового пользователя', err)
                    reject()
                })
        })
    },
    async GET_PRODUCT({state},id) {
        return new Promise((resolve, reject) => {
            state.loading_current = true
            productService.getProduct(id)
                .then((data) => {
                    resolve(data)
                })
                .catch((err) => {
                    errorMsg('Не удалось получить пользователя', err)
                    reject()
                })
        })
    },
    async SEARCH(store,payload) {
        return new Promise((resolve, reject) => {
            productService.search(payload)
                .then((data) => {
                    resolve(data)
                })
                .catch((err) => {
                    errorMsg('По данному запросу ничего не найдено', err)
                    reject()
                })
        })
    },
    async GET_PRODUCTS(store,params) {
        return new Promise((resolve, reject) => {
            productService.fetchProducts(params)
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
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}