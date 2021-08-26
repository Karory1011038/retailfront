<template>
    <page-layout>
        <el-form label-position="top" :model="customerData" status-icon :rules="rules" ref="form" label-width="120px"
                 class="demo-ruleForm">
            <el-form-item label="Имя" prop="name">
                <el-input type="text" v-model="customerData.user.first_name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="Фамилия" prop="name">
                <el-input type="text" v-model="customerData.user.last_name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="Номер" prop="number">
                <el-input type="number" v-model="customerData.number" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="Баланс" prop="number">
                <el-input type="number" v-model="customerData.balance" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button :loading="loading_save" type="primary" @click="submitForm()">Сохранить</el-button>
                <el-button @click="resetForm()">Сброс</el-button>
            </el-form-item>
            <el-form-item label="Дополнительный доступ">
                <el-select v-model="value" filterable placeholder="Select">
                    <el-option
                        v-for="perm in permissions"
                        :key="perm.id"
                        :label="perm.name"
                        :value="perm.value">
                    </el-option>
                </el-select>
                <div v-for="perm in permissions" :key="perm.id">
                    <el-switch
                        :active-text="perm.name"
                    ></el-switch>
                </div>
            </el-form-item>
        </el-form>
    </page-layout>
</template>

<script>
import PageLayout from "@/layouts/PageLayout";
import {ref} from "vue";
import {useStore} from "vuex";
import {computed} from "vue";

export default {
    name: "ChangeCustomer",
    components: {PageLayout},
    props: ['id'],
    setup(props) {
        const form = ref(null)
        const store = useStore()
        store.dispatch('customer/GET_PERMISSIONS')
        const permissions = computed(() => store.state.customer.permissions)
        // const customerData = ref({
        //         "id": customer.id,
        //         "number": customer.number,
        //         "user": {
        //             "id": customer.user.id,
        //             "is_superuser": customer.user.is_superuser,
        //             "username": customer.user.username,
        //             "first_name": customer.user.first_name,
        //             "last_name": customer.user.last_name
        //         },
        //         "avatar": customer.avatar,
        //         "retail": customer.retail,
        //         "balance": customer.balance,
        //         "deleted": customer.deleted,
        //         "created": customer.created,
        //         "permissions": customer.permissions
        //     })
        const customerData = ref({
             "number": '',
            "user": {
                "first_name": '',
                "last_name": ''
            },
            "balance": '',
            "permissions": []
        })
        const rules = {
            name: [
                {
                    validator: (rule, value, callback) => {
                        if (value === '') {
                            callback(new Error('Не может быть пустым'));
                        } else if (value.match(/([^а-яА-Я/-]+)/g)) {
                            callback(new Error('Разрешены только русские буквы'));
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
                        } else if (value.match(/([^0-9]+)/g)) {
                            callback(new Error('Разрешены только положительные целые числа'));
                        } else {
                            callback();
                        }
                    },
                    trigger: 'blur'
                }
            ],
        }
        const loading_save = ref(false)
        const submitForm = () => {
            // form.value.validate((valid) => {
            //     if (valid) {
            //         loading_save.value = true
            //         store.dispatch('retail/UPDATE', retailData.value)
            //             .finally(() => loading_save.value = false)
            //     } else {
            //         return false;
            //     }
            // })
        }
        const resetForm = () => {
            form.value.resetFields();
        }
        return {customerData, rules, submitForm, resetForm, form, loading_save, permissions}
    }
}
</script>

<style scoped>

</style>