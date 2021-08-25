<template>
    <page-layout>
        <el-row>
            <el-col class="mb-3"
                    :span="24" v-for="customer in customers"
                    :key="customer.id">
                <customer-card :customer="customer"></customer-card>
            </el-col>
        </el-row>
    </page-layout>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";
import PageLayout from "@/layouts/PageLayout";
import CustomerCard from "@/components/customers/CustomerCard";

export default {
    name: "Clients",
    components: {CustomerCard, PageLayout},
    setup() {
        const store = useStore()
        store.dispatch('customer/GET_CUSTOMERS')
        const customers = computed(() => store.state.customer.customers)
        return {store, customers}
    }
}
</script>