<template>
    <page-layout>
        <el-form label-position="top" :model="customerData" status-icon :rules="rules" ref="form" label-width="120px"
                 class="demo-ruleForm" @change="disabled = false">
                <el-switch
                    v-if="props['id'] === '0'"
                    active-text="По ссылке вк"
                    inactive-text="По имени и фамилии"
                    v-model="social_auth"
                ></el-switch>
            <el-form-item v-if="!social_auth" label="Имя" prop="user.first_name">
                <el-input type="text" v-model="customerData.user.first_name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item v-if="social_auth" label="Ссылка" prop="link">
                <el-input type="text" v-model="customerData.link" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item v-if="!social_auth" label="Фамилия" prop="user.last_name">
                <el-input type="text" v-model="customerData.user.last_name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="Номер" prop="number">
                <el-input v-model="customerData.number" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="Баланс" prop="balance">
                <el-input v-model="customerData.balance" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button :disabled="disabled" :loading="loading_save" type="primary" @click="submitForm">Сохранить
                </el-button>
                <el-button @click="resetForm()">Сброс</el-button>
            </el-form-item>
            <el-form-item label="Дополнительный доступ">
                <el-row>
                    <el-input v-model="selected" clearable placeholder="Поиск">
                    </el-input>
                </el-row>
                <div v-for="perm in filtered_permissions_list" :key="perm.id">
                    <el-switch
                        :active-text="perm.name"
                        v-model="perm.value"
                    ></el-switch>
                </div>
            </el-form-item>
        </el-form>
    </page-layout>
</template>

<script>
import PageLayout from "@/layouts/PageLayout";
import {computed, ref} from "vue";
import {useStore} from "vuex";
import {ElLoading, ElNotification} from 'element-plus';

export default {
    name: "ChangeCustomer",
    components: {PageLayout},
    props: ['id'],
    setup(props) {
        const social_auth = ref(false)
        const form = ref(null)
        const store = useStore()
        let permissions_list = ref([])
        const disabled = ref(true)
        const loading_save = ref(false)
        const loading = ElLoading.service({
            lock: true,
            text: 'Загрузка...',
            spinner: 'el-icon-loading',
            customClass: 'loader-text',
            background: 'rgba(255, 255, 255, 1)',
            fullscreen: true
        });
        const selected = ref('')
        const customerData = ref({
            "user": {
                "first_name": '',
                "last_name": ''
            },
            "number": '',
            "balance": '',
            "permissions": []
        })

        const getPermissions = () => {
            store.dispatch('permissions/GET_PERMISSIONS')
                .then((response) => {
                    response.forEach((perm) => {
                        permissions_list.value.push({
                            ...perm,
                            value: customerData.value.permissions.includes(perm.id)
                        })
                    })
                    loading.close()
                })
        }

        if (props['id'] !== '0') {
            store.dispatch('customer/GET_CUSTOMER', props['id'])
                .then((response) => {
                    customerData.value = response
                    getPermissions()
                })
        } else {
            getPermissions()
        }
        const filtered_permissions_list = computed(() => {
            return permissions_list.value.filter(perm => perm.name.toLowerCase().includes(selected.value.toLowerCase()))
        })
        const rules = {
            "user.first_name": [
                {
                    validator: (rule, value, callback) => {
                        if (value === '') {
                            callback(new Error('Не может быть пустым'));
                        } else if (value.match(/([^а-яА-Яa-zA-Z/-]+)/g)) {
                            callback(new Error('Разрешены только буквы'));
                        } else {
                            callback();
                        }
                    },
                    trigger: 'blur'
                }
            ],
            'user.last_name': [
                {
                    validator: (rule, value, callback) => {
                        if (value === '') {
                            callback(new Error('Не может быть пустым'));
                        } else if (value.match(/([^а-яА-Яa-zA-Z/-]+)/g)) {
                            callback(new Error('Разрешены только буквы'));
                        } else {
                            callback();
                        }
                    },
                    trigger: 'blur'
                }
            ],
            number: [
                {
                    validator: (rule, value, callback) => {
                        if (value === '') {
                            callback(new Error('Не может быть пустым'));
                        } else if (`${value}`.match(/([^0-9]+)/g)) {
                            callback(new Error('Разрешены только положительные целые числа'));
                        } else {
                            callback();
                        }
                    },
                    trigger: 'blur'
                }
            ],
            balance: [
                {
                    validator: (rule, value, callback) => {
                        if (value === '') {
                            callback(new Error('Не может быть пустым'));
                        } else if (isNaN(parseFloat(value))) {
                            callback(new Error('Разрешены только числа'));
                        } else {
                            callback();
                        }
                    },
                    trigger: 'blur'
                }
            ],
        }

        const succesMsg = (msg) => {
            ElNotification({
                title: 'Успешно!',
                message: msg,
                type: 'success',
                position: 'top-right',
                duration: 2000,
            })
        }

        const submitForm = () => {
            console.log('success')
            form.value.validate((valid) => {
                if (valid) {
                    loading_save.value = true
                    customerData.value.permissions = permissions_list.value.filter(obj => obj.value).map(perm => perm.id)
                    if (props['id'] !== '0') {
                        store.dispatch('customer/UPDATE', customerData.value)
                            .then(() => succesMsg('Данные клиента обновлены.'))
                            .finally(() => loading_save.value = false)
                    } else {
                        store.dispatch('customer/POST', customerData.value)
                            .then(() => succesMsg('Клиент создан.'))
                            .finally(() => loading_save.value = false)
                    }
                } else {
                    return false
                }
            })
        }
        const resetForm = () => {
            form.value.resetFields();
        }
        return {
            props,
            social_auth,
            customerData,
            loading,
            loading_save,
            filtered_permissions_list,
            selected,
            form,
            disabled,
            rules,
            resetForm,
            submitForm
        }
    }
}
</script>

<style scoped>

</style>