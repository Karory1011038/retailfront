import {useStore} from "vuex";
import {computed} from "vue";
import {ElLoading} from "element-plus";

export function useRetail() {
    const store = useStore()
    if (store.state.retail.current === null) {
        const loadingInstance = ElLoading.service({
            lock: true,
            text: 'Загрузка...',
            spinner: 'el-icon-loading',
            customClass: 'loader-text',
            background: 'rgba(255, 255, 255, 1)',
            fullscreen: true
        })
        store.dispatch('retail/GET_CURRENT')
            .then(() => {
                loadingInstance.close()
            })
    }
    const loading = computed(() => store.state.retail.loading_current)
    const retail = computed(() => store.state.retail.current)
    return {
        retail,
        loading
    }
}