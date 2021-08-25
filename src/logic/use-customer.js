import {useStore} from "vuex";
import {computed} from "vue";

export function useCustomer() {
    const store = useStore()
    if (store.state.auth.is_auth && store.state.customer.current === null) {
        store.dispatch('customer/GET_CURRENT')
    }
    const loading = computed(() => store.state.customer.loading_current)
    const customer = computed(() => store.state.customer.current)
    const hasPerm = perm => {
        if (!customer.value) return false
        return customer.value.permissions.includes(perm)
    }
    return {
        customer,
        loading,
        hasPerm
    }
}