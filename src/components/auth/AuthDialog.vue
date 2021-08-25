<template>
    <el-dialog
        title="Авторизация"
        v-model="show"
        center
        custom-class="max-width-450">
        <div class="mb-2">Выберите способ авторизации</div>
        <el-button :loading="loading" @click="onVkAuth" type="primary" style="background-color: #4d7198;" class="full-width text-white mb-2">Вконтакте
        </el-button>
        <el-button disabled type="warning" style="background-color: #ed812b;" class="full-width text-white m-0">Одноклассники
        </el-button>
    </el-dialog>
</template>

<script>
import EventBus from "@/event-bus";
import {useStore} from "vuex";
import {useRoute, useRouter} from "vue-router";
import {ref} from "vue";

export default {
    name: "AuthDialog",
    setup() {
        const show = ref(false);
        EventBus.$on("show-auth-dialog", () => {
            show.value = true;
        })
        const onClose = () => {
            show.value = false;
        }

        let loading = ref(false);
        const onVkAuth = () => {
            loading.value = true;
            window.open(`/api/auth/login/?provider=vk&redirect_uri=${location.href}`, '_self')
        }

        const store = useStore()
        const route = useRoute()
        const router = useRouter()
        const getCurrentCustomer = () => store.dispatch('customer/GET_CURRENT')
        const socialAuth = (payload) => store.dispatch('auth/SOCIAL_AUTH', payload)
        if (route.query.code) {
            socialAuth({
                provider: 'vk',
                redirect_uri: location.href,
                code: route.query.code
            })
                .then(() => {
                    show.value = false;
                    getCurrentCustomer()
                })
                .finally(() => {
                    router.replace({
                        ...router.currentRoute,
                        query: {}
                    })
                    loading.value = false;
                })
        }

        return {
            onVkAuth,
            onClose,
            loading,
            show
        }
    }
}
</script>