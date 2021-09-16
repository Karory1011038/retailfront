<template>
    <page-layout>
        <el-card class="mb-3">
            <totals-block :counts="counts"></totals-block>
        </el-card>
        <el-row>
            <el-col class="mb-3"
                    :span="24">
                <router-link :to="{name : 'change-customer', params: {id : 0}}">
                    <el-card class="green-border">
                        <el-row align="middle" class="pb-1 full-height">
                            <el-col>
                                <el-row>
                                    <el-col :span="15" class="h1 text-right text-bold text-success my-auto">Добавить клиента</el-col>
                                    <el-col class="text-left col-auto ml-3"><span class="el-icon-circle-plus-outline text-success text-60px"></span></el-col>
                                </el-row>
                            </el-col>
                        </el-row>
                    </el-card>
                </router-link>
            </el-col>
            <el-col v-if="loading" class="my-5" :span="24"
                    v-loading="loading"
                    element-loading-text="Загрузка..."
                    element-loading-spinner="el-icon-loading"
                    element-loading-background="rgba(255, 255, 255, 0.1)">

            </el-col>
            <el-col class="mb-3"
                    :span="24" v-for="customer in customers"
                    :key="customer.id">
                <router-link :to="{name : 'change-customer', params: {id : customer.id}}">
                    <customer-card :customer="customer"></customer-card>
                </router-link>
            </el-col>
        </el-row>
    </page-layout>
</template>

<script>
import {useStore} from "vuex";
import {ref} from "vue";
import PageLayout from "@/layouts/PageLayout";
import CustomerCard from "@/components/customers/CustomerCard";
import TotalsBlock from "@/components/misc/TotalsBlock";

export default {
    name: "Clients",
    components: {TotalsBlock, CustomerCard, PageLayout},
    setup() {
        const counts = [
            {
                label: 'Количество клиентов',
                count: 0,
                tool: 'Текст про количество клиентов',
                unit: 'шт'
            },
            {
                label: 'Сумма балансов',
                count: 0,
                tool: 'Текст про сумму балансов',
                unit: '₽'
            },
            {
                label: 'Долги',
                count: 0,
                tool: 'Текст про долги',
                unit: '₽'
            },
            {
                label: 'Итого',
                count: 0,
                tool: 'Текст про итог',
                unit: '₽'
            },
        ]

        const customers = ref([])
        const loading = ref(true)
        const store = useStore()
        store.dispatch('customer/GET_CUSTOMERS')
            .then(data => {
                customers.value = data
            })
            .finally(() => loading.value = false)

        return {
            counts,

            customers,
            loading,
        }
    }
}
</script>