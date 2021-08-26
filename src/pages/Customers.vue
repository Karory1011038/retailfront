<template>
    <page-layout>
        <el-card class="mb-3">
            <totals-block :counts="counts"></totals-block>
        </el-card>
        <el-row>
            <el-col class="mb-3"
                    :span="24">
                <el-card class="green-border">
                    <el-row class="pb-1 full-height">
                        <el-col>
                            <div class="h1 text-center my-4 text-bold">Новый пользователь</div>
                            <div class="text-center"><span class="el-icon-circle-plus-outline text-60px"></span></div>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
            <el-col class="mb-3"
                    :span="24" v-for="customer in customers"
                    :key="customer.id">
                <router-link :customer="customer" :to="{name : 'change-customer', params: {id : customer.id}}">
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