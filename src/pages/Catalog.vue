<template>
    <page-layout>
        <el-input
            placeholder="Поиск..."
            v-model="search_data"
            @keydown.enter="sendRequest('products/SEARCH',search_data)"
            class="input-with-select">
            <template #append>
                <el-button :icon=" loading ?'el-icon-loading' : 'el-icon-search'  "
                           @click="sendRequest('products/SEARCH',search_data)"></el-button>
            </template>
        </el-input>
        <el-scrollbar>
            <div class="flex-content">
                <p class="item" v-for="(item,index) in 50" :key="index">{{ item }}</p>
            </div>
        </el-scrollbar>
        <el-select
            v-model="selectedFilter"
            class="min-width-100 ">
            <el-option
                v-for="(item,index) in filters"
                :key="index"
                :label="item.name"
                :value="item">
            </el-option>
        </el-select>
        <el-row>
            <el-col class="col-auto" v-for="(item,index) in productsList" :key="index">
                <el-card class="m-5 max-width-300" shadow="hover">
                    <template #header>
                        <div class="text-center">
                            <span class="h2">{{ item.name }}</span>
                        </div>
                    </template>
                    <el-image :src="item.img"></el-image>
                    <div class="h3 mb-4 h2">{{ item.price }}₽
                    </div>
                    <div class="text-center h3">
                        <el-button type="primary">В корзину <span class="el-icon-sold-out"></span></el-button>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-pagination :pager-count="6" layout="prev, pager, next" :total="1000">
        </el-pagination>
    </page-layout>
</template>

<script>
import {ref} from "vue";
import {computed} from "@vue/reactivity";
import PageLayout from "@/layouts/PageLayout";
import {useStore} from "vuex";

export default {
    name: "Catalog",
    components: {PageLayout},
    setup() {
        const store = useStore()
        const loading = ref(false)
        const sendRequest = (action, data) => {
            if (search_data.value && !loading.value) {
                loading.value = true
                store.dispatch(action, data)
                    .then((response) => {
                        loading.value = false
                        products.value = response
                    })
            }
        }
        const products = ref([
            {
                name: 'Bond',
                img: 'http://vapeshopzv.ru/upload/iblock/aaa/aaa53f415f1b06ee23187fc9afbef809.jpg',
                price: 100,
                supplier: 'Bond-company',
                type: 'cigarettes'
            },
            {
                name: 'Winston',
                img: 'https://16.peredacha-ik.ru/628-large_default/vinston-blyu-sigarety.jpg',
                price: 120,
                supplier: 'Winston-company',
                type: 'cigarettes'
            },
            {
                name: 'Marlboro',
                img: 'https://kupi-sigarety.org/wp-content/uploads/2019/08/Marlboro-MICRO-HW-МРЦ-120.jpg',
                price: 150,
                supplier: 'Marlboro-company',
                type: 'cigarettes'
            },
            {
                name: 'Philip Morris',
                img: 'https://vsegda-kstati.ru/wp-content/uploads/2020/09/170-600x600-1000x1000-1.jpg',
                price: 80,
                supplier: 'Philip-Morris-company',
                type: 'sticks'
            },
            {
                name: 'Bond',
                img: 'http://vapeshopzv.ru/upload/iblock/aaa/aaa53f415f1b06ee23187fc9afbef809.jpg',
                price: 100,
                supplier: 'Bond-company',
                type: 'cigarettes'
            },
            {
                name: 'Winston',
                img: 'https://16.peredacha-ik.ru/628-large_default/vinston-blyu-sigarety.jpg',
                price: 120,
                supplier: 'Winston-company',
                type: 'cigarettes'
            },
            {
                name: 'Marlboro',
                img: 'https://kupi-sigarety.org/wp-content/uploads/2019/08/Marlboro-MICRO-HW-МРЦ-120.jpg',
                price: 150,
                supplier: 'Marlboro-company',
                type: 'cigarettes'
            },
            {
                name: 'Philip Morris',
                img: 'https://vsegda-kstati.ru/wp-content/uploads/2020/09/170-600x600-1000x1000-1.jpg',
                price: 80,
                supplier: 'Philip-Morris-company',
                type: 'sticks'
            },
            {
                name: 'Bond',
                img: 'http://vapeshopzv.ru/upload/iblock/aaa/aaa53f415f1b06ee23187fc9afbef809.jpg',
                price: 100,
                supplier: 'Bond-company',
                type: 'cigarettes'
            },
            {
                name: 'Winston',
                img: 'https://16.peredacha-ik.ru/628-large_default/vinston-blyu-sigarety.jpg',
                price: 120,
                supplier: 'Winston-company',
                type: 'cigarettes'
            },
            {
                name: 'Marlboro',
                img: 'https://kupi-sigarety.org/wp-content/uploads/2019/08/Marlboro-MICRO-HW-МРЦ-120.jpg',
                price: 150,
                supplier: 'Marlboro-company',
                type: 'cigarettes'
            },
            {
                name: 'Philip Morris',
                img: 'https://vsegda-kstati.ru/wp-content/uploads/2020/09/170-600x600-1000x1000-1.jpg',
                price: 80,
                supplier: 'Philip-Morris-company',
                type: 'sticks'
            },

        ])
        // sendRequest('products/GET_PRODUCTS')
        const options = ref([])
        const search_data = ref('')
        const filters = [
            {
                name: 'По цене',
                value: 'price',
            },
            {
                name: 'По фирме',
                value: 'supplier',
            },
            {
                name: 'По дате',
                value: 'date',
            },
        ]
        const selectedFilter = ref(filters[0])
        const productsList = computed(() => {
            if (selectedFilter.value.name) {
                return products.value.sort((a, b) => a[selectedFilter.value.value] > b[selectedFilter.value.value] && 1 || -1)
            } else {
                return products.value
            }
        })
        return {
            loading,
            products,
            search_data,
            sendRequest,
            filters,
            selectedFilter,
            options,
            productsList
        }
    }
}
</script>
