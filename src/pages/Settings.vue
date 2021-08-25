<template>
    <page-layout>
        <el-form label-position="top"  :model="retailData" status-icon :rules="rules" ref="form" label-width="120px"
                 class="demo-ruleForm">
            <el-form-item label="Наименование" prop="name">
                <el-input type="text" v-model="retailData.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="Хост" prop="host">
                <el-input type="text" v-model="retailData.host" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="private">
                <template v-slot:label>
                    Приватный
                    <el-tooltip placement="top" :append-to-body="false" :content="'Если включен, то на сайт могут зайти только по приглашению владельца'">
                    <span class="el-icon-question ml-2"></span>
                    </el-tooltip>
                </template>
                <el-switch v-model="retailData.private"></el-switch>
            </el-form-item>
            <el-form-item>
                <el-button :loading="loading_save" type="primary" @click="submitForm()">Сохранить</el-button>
                <el-button @click="resetForm()">Сброс</el-button>
            </el-form-item>
        </el-form>
    </page-layout>
</template>

<script>
import {useRetail} from "@/logic/use-retail";
import PageLayout from "@/layouts/PageLayout";
import {ref} from "vue";
import {useStore} from "vuex";

export default {
    name: "Settings",
    components: {PageLayout},
    setup() {
        const form = ref(null)

        const store = useStore()
        const {retail} = useRetail()

        const retailData = ref({
            "name": retail.value.name,
            "host": retail.value.host,
            "private": retail.value.private,
            "additional": retail.value.additional
        })
        const rules = {
            name: [
                {
                    validator: (rule, value, callback) => {
                        if (value === '') {
                            callback(new Error('Наименование не может быть пустым'));
                        } else {
                            callback();
                        }
                    },
                    trigger: 'blur'
                }
            ],
            host: [
                {
                    validator: (rule, value, callback) => {
                        if (value === '') {
                            callback(new Error('Хост не может быть пустым'));
                        } else if (value.match(/([^a-z0-9/-]+)/g)) {
                            callback(new Error('Разрешены только маленькие английские буквы, цифры и тире'));
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
            form.value.validate((valid) => {
                if (valid) {
                    loading_save.value = true
                    store.dispatch('retail/UPDATE', retailData.value)
                        .finally(() => loading_save.value = false)
                } else {
                    return false;
                }
            })
        }
        const resetForm = () => {
            form.value.resetFields();
        }
        return {retail, retailData, rules, submitForm, resetForm, form, loading_save}
    }
}
</script>